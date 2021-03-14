import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((err: HttpErrorResponse) => {
        let message = '';
        if (err.error instanceof ErrorEvent) {
          //client-side
          message = `Error: ${err.error.message}`;
        } else {
          //ssr
          message = `Error Code: ${err.status}\nMessage: ${err.message}`;
        }

        return throwError(message);
      }),
    );
  }
}
