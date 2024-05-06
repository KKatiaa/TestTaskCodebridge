import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  constructor(private http: HttpClient) { }
  link = 'https://api.spaceflightnewsapi.net/v4/blogs';
  link2 = 'https://api.nytimes.com/svc/movies/v2/critics/{reviewer}.json';// Movie Reviews API
  link3 = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=63079e1681484e5db25e5f8eaf09403c';//Top business headlines in the US right now
  link4 = 'https://newsapi.org/v2/everything?q=apple&from=2024-03-24&to=2024-03-24&sortBy=popularity&apiKey=63079e1681484e5db25e5f8eaf09403c';//All articles mentioning Apple from yesterday, sorted by popular publishers first
  link5 = 'https://newsapi.org/v2/everything?q=tesla&from=2024-02-25&sortBy=publishedAt&apiKey=63079e1681484e5db25e5f8eaf09403c';//All articles about Tesla from the last month, sorted by recent first
  link6 = 'https://newsdata.io/api/1/archive?apikey=pub_40781b9096c9a85f320d5731d4070584f8326&q=metaverse';//Historical api

  getData(): Observable<any> {
    return this.http.get(this.link);
  }
  getData2(): Observable<any> {
    return this.http.get(this.link2);
  }

  getData4(): Observable<any> {
    return this.http.get(this.link2);
  }

  getData5(): Observable<any> {
    return this.http.get(this.link5);
  }

  getData6(): Observable<any> {
    return this.http.get(this.link6);
  }
}
