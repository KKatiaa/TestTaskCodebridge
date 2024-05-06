import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from '../../itemService/item-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import SpaceNews from "../../json/space-news.json";

@Component({
  selector: 'app-articles-list-component',
  templateUrl: './articles-list-component.component.html',
  styleUrls: ['./articles-list-component.component.scss']
})
export class ArticlesListComponentComponent implements OnInit {
  constructor(private services: ItemServiceService) {}
  dataArray = [];
  resultList: any;
  articlesAmount: number = 10;
  myGroup: FormGroup;
  searchWords: string[];
  public result;
  public SpaceNewsList:{name:string}[] = SpaceNews;

  ngOnInit(): void {

    this.result = this.SpaceNewsList.map(item => Object.values(item)[0]);
    this.dataArray = this.result;
    console.log('this.resultSpace = ', this.result[0].id);
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
