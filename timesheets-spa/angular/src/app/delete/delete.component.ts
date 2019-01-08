import { Component, OnInit } from '@angular/core';
import { TimesheetsService } from '../services/timesheets.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  timesheets: Array<any>;
  error: string;

  constructor(private timesheetsService: TimesheetsService) { }
  
    ngOnInit() {
      this.timesheetsService.getUndeletedTimesheets()
        .subscribe(
        data => this.timesheets = data,
        error => this.error = error.statusText
        );
    }

    delete(id: number) {
      this.timesheetsService.deleteTimesheet(id)
      .subscribe(
        data => this.timesheets = this.timesheets.filter(i => i.id !== id),
        error => this.error = error.statusText
      );
      
    }

}
