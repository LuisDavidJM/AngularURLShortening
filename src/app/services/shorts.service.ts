import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Short } from '../models/short';

@Injectable({
  providedIn: 'root'
})
export class ShortsService {

  public url_api: string;

  constructor(public http: HttpClient) { 
    this.url_api = 'https://api.shrtco.de/v2/shorten';
  }

  getUrl(link: string): Observable<Short>{
    return this.http.get<Short>(this.url_api+'?url='+link);
  }
}
 