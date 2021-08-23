import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  constructor(private cookie: CookieService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.handleAccess(request, next);
  }

  private handleAccess(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.cookie.get('access_token');
    const headers: { [name: string]: string | string[] } = {};

    for (const key of request.headers.keys()) {
      headers[key] = request.headers.getAll(key);
    }
    if (token) {
      headers['Authorization'] = 'Bearer ' + token;
    }
    const newHeader = new HttpHeaders(headers);

    const changedRequest = request.clone({
      headers: newHeader,
    });
    return next.handle(changedRequest);
  }
}