import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  constructor(private http: HttpClient) { }
  link = 'https://api.spaceflightnewsapi.net/v4/blogs';

  getData(): Observable<any> {
    return this.http.get(this.link);
  }
}
