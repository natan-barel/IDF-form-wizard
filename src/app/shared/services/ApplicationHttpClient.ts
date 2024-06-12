import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
  HttpHandler,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_CONFIG, AppConfig } from '../../app-config/app-config';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LoaderService } from '../loader/loader.service';

export interface IRequestOptions {
  headers?: HttpHeaders;
  observe?: any; // 'body';
  params?: HttpParams;
  reportProgress?: boolean;
  responseType?: any; // 'json';
  withCredentials?: boolean;
  body?: any;
  preventSpinner?: boolean;
  // TODO: Add Custom api if the base api is not needed / Add PreventApiUse
}

export function applicationHttpClientCreator(
  httpHandler: HttpHandler,
  config: AppConfig,
  loaderService: LoaderService
) {
  return new ApplicationHttpClient(httpHandler, config, loaderService);
}

@Injectable()
export class ApplicationHttpClient extends HttpClient {
  private api = '';
  private requestCount: number;

  constructor(
    httpHandler: HttpHandler,
    config: AppConfig,
    private loaderService: LoaderService
  ) {
    super(httpHandler);
    this.api = config.baseUrl;
    this.requestCount = 0;
  }

  public getAPI() {
    return this.api;
  }

  /**
   * GET request
   * @param {string} endPoint it doesn't need / in front of the end point
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @param {string} api use if there is needed to send request to different back-end than the default one.
   * @returns {Observable<T>}
   */
  public Get<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
    const request = this.get<T>(this.api + endPoint, options);
    return this.handleRequest(request, options);
  }

  /**
   * POST request
   * @param {string} endPoint end point of the api
   * @param {Object} params body of the request.
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public Post<T>(
    endPoint: string,
    params: Object,
    options?: IRequestOptions
  ): Observable<T> {
    const request = this.post<T>(this.api + endPoint, params, options);
    return this.handleRequest(request, options);
  }

  /**
   * PUT request
   * @param {string} endPoint end point of the api
   * @param {Object} params body of the request.
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public Put<T>(
    endPoint: string,
    params: Object,
    options?: IRequestOptions
  ): Observable<T> {
    const request = this.put<T>(this.api + endPoint, params, options);
    return this.handleRequest(request, options);
  }

  /**
   * DELETE request
   * @param {string} endPoint end point of the api
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public Delete<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
    const request = this.delete<T>(this.api + endPoint, options);
    return this.handleRequest(request, options);
  }

  handleRequest<T>(
    obs: Observable<T>,
    options: IRequestOptions
  ): Observable<T> {
    if (!options || (options && !options.preventSpinner)) {
      this.handleSpinnerAdd();
    }

    return obs.pipe(
      tap(() => {
        if (!options || (options && !options.preventSpinner)) {
          this.hanldeSpinnerRemove();
        }
      }),
      catchError((err) => {
        if (!options || (options && !options.preventSpinner)) {
          this.hanldeSpinnerRemove();
        }
        return throwError(err);
      })
    );
  }

  private handleSpinnerAdd() {
    this.requestCount++;
    this.loaderService.show();
  }

  private hanldeSpinnerRemove() {
    this.requestCount--;
    if (this.requestCount === 0) {
      this.loaderService.hide();
    }
  }
}
