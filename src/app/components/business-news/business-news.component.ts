import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import BussinessNews from "../../json/bussiness-news.json";
import { ItemServiceService } from '../../itemService/item-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.scss']
})
export class BusinessNewsComponent implements OnInit {
    constructor(public router: Router, private services: ItemServiceService) {}
    articlesAmount: number = 10;
    public result;
    myGroup: FormGroup;
    searchWords: string[];
    dataArray = [];
    public BussinessNewsList:{name:string}[] = BussinessNews;
  
    ngOnInit(): void {
      this.result = this.BussinessNewsList.map(item => Object.values(item)[0]);
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
  }

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
    console.log("busssiness list; ", list);
    return list;
  }

  includeWord(value, word) {
    return value.includes(word);
  }
}
