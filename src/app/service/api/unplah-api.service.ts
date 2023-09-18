import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnplahApiService {

  private url = 'https://api.unsplash.com/search/photos?page=1&per_page=10&query='

  constructor(private http: HttpClient) { }

  getImgSearch(imgSearch:any) {
    const url = this.url+imgSearch;
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `${environment.unplashKey}`);

    return this.http.get(url,{headers})
  }
}
