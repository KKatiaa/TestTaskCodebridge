import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from '../../itemService/item-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-articles-list-component',
  templateUrl: './articles-list-component.component.html',
  styleUrls: ['./articles-list-component.component.scss']
})
export class ArticlesListComponentComponent implements OnInit {
  constructor(private services: ItemServiceService) {}
  dataFromServer: any;
  dataArray = [];
  resultList: any;
  articlesAmount: number;
  myGroup: FormGroup;
  searchWords: string[];

  ngOnInit(): void {
    this.services.getData().subscribe((result) => {
      this.dataFromServer = result.results;
      this.articlesAmount = this.dataFromServer.length;

      this.dataFromServer.forEach(el => {
        this.dataArray.push({value: el, summary: false, title: false, sum: 10, text: ''});
      });
      this.resultList = this.dataArray;
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
      words.some(word => element.value.summary.includes(word)) ? element.summary = true : element.summary = false;
      words.some(word => element.value.title.includes(word)) ? element.title = true : element.title = false;

      if (element.title) {
        element.sum = 20;
      }
      if (!element.title && element.summary) {
        element.sum = 10;
      }
      if (!element.title && !element.summary) {
        element.sum = 0;
      }
      element.text = words;
      if (element.sum > 0) {
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
