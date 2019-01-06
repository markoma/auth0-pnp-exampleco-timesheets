interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  silentCallbackURL: string;
  audience: string;
  apiUrl: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'QymOnhzU5cs262Qa50ttt0tYy6lb4oKz',
  domain: 'sboguys.auth0.com',
  callbackURL: 'http://localhost:4200/callback',
  silentCallbackURL: 'http://localhost:3001/silent',
  audience: 'https://api-example.com/timesheets',
  apiUrl: 'http://localhost:8080'
};
