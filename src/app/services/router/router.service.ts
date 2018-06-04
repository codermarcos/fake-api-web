import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Route } from '../../models';

@Injectable()
export class RouterService {

  public baseUrl = `${environment}/url`;
  public options = { headers: new HttpHeaders() };

  constructor(public http: HttpClient) {
    this.options.headers.append('content-type', 'application/json');
  }

  public insert(route: Route) {
    return this.http.post(`${this.baseUrl}/create`, route, this.options);
  }

}
