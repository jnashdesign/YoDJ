import { Injectable } from '@angular/core';
import { Ad } from '../../models/ad';
import { Api } from '../api/api';

@Injectable()
export class Ads {

  constructor(
    public api: Api) {}

  query(params?: any) {
    return this.api.get('/ads', params);
  }

  add(item: Ad) {
  }

  delete(item: Ad) {
  }

}
