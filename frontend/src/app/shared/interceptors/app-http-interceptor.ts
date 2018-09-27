import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { CookieService } from 'ngx-cookie-service';

@Injectable()


export class AppHttpInterceptor implements HttpInterceptor {
  apiToken: string;
  constructor(private cookieService: CookieService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.cookieService.get('token');

    // let user = this.cookieService.getAll();
    // console.log('in interceptor'+user['token']);

    this.apiToken = `Bearer ` + token;
    // this.apiToken = `Bearer `+user['token'];
    const newRequest = request.clone({
      setHeaders: {
        'Authorization': `${this.apiToken}`,
        'Accept': 'application/json'/*,
        'Content-Type': 'application/json'*/
      }
    });

    return next.handle(newRequest);
    }
}
