import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ZipcodesService {
  constructor(private httpClient: HttpClient) { }

  getState (zipcode: string) {
    const apiKey = 'AIzaSyA3_BMvfU2NLAI4ULNoGzC9Ngr1EqNXtgs';
    const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + zipcode + '&key=' + apiKey;
    return this.httpClient.get(url);
  }
  
}
