import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from '../../itemService/item-service.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import SportNews from "../../json/sport-news.json";

@Component({
  selector: 'app-apple-news',
  templateUrl: './apple-news.component.html',
  styleUrls: ['./apple-news.component.scss']
})
export class AppleNewsComponent implements OnInit {

    constructor(private services: ItemServiceService, public router: Router) {}
    dataFromServer: any;
    dataArray = [];
    public result;
    resultList: any;
    articlesAmount: number = 10;
    searchWords: string[];
    myGroup: FormGroup;
    description: string;
    public SportNewsList:{name:string}[] = SportNews;

    ngOnInit(): void {
      this.result = this.SportNewsList.map(item => Object.values(item)[0]);
      this.dataArray = this.result;
      this.services.getData2().subscribe((result) => {
        console.log(result);
      });

        this.myGroup = new FormGroup({
          name: new FormControl()
        });
    
        this.myGroup.get('name').valueChanges.subscribe(
          value => {
            this.searchWords = value.split(' ');
            this.sortByWord(this.dataArray, this.searchWords);
          }
        );
    };

  public backToMainPage(): void {
    this.router.navigate(['']);
  }

  sortByWord(list, words) {
    this.articlesAmount = 0;
    list.forEach(element => {
      words.some(word => element.summary.includes(word)) ? element.summary2 = true : element.summary2 = false;
      words.some(word => element.title.includes(word)) ? element.title2 = true : element.title2 = false;

      if (element.title2) {
        element.sum = 20;
      }
      if (!element.title2 && element.summary2) {
        element.sum = 10;
      }
      if (!element.title2 && !element.summary2) {
        element.sum = 0;
      }
      element.text = words;
      if (element.sum2 > 0) {
        this.articlesAmount += 1;
      }
    });
    list.sort((a, b) => b.sum - a.sum);
    return list;
  }

  includeWord(value, word) {
    return value.includes(word);
  }
}
