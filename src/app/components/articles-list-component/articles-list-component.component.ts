import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from '../../itemService/item-service.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { articleData } from '../../interface/objectType';

@Component({
  selector: 'app-articles-list-component',
  templateUrl: './articles-list-component.component.html',
  styleUrls: ['./articles-list-component.component.scss']
})
export class ArticlesListComponentComponent implements OnInit {
  constructor(private services: ItemServiceService, private fb: FormBuilder) {}
  dataFromServer: any;
  dataObject: articleData = {};
  dataArray = [];
  resultList: any;
  articlesAmount: number;
  form: FormGroup;
  name = new FormControl('');
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
      firstName: new FormControl()
    });

    this.myGroup.get('firstName').valueChanges.subscribe(
      value => {
        this.searchWords = value.split(' ');
        console.log(this.searchWords);
        this.sortByWord(this.dataArray, this.searchWords);
        //this.searchWords.forEach((word) => {
          //this.resultList = this.sortByWord(this.dataArray, word);
          //console.log(this.resultList);
        //});
      }
    );
  }

  sortByWord(list, words) {
    this.articlesAmount = 0;
    list.forEach(element => {
      //element.value.summary.some(this.includeWord) ? element.summary = true : element.summary = false;
      //element.value.title.some(this.includeWord) ? element.title = true : element.title = false;

      words.some(word => element.value.summary.includes(word)) ? element.summary = true : element.summary = false;
      words.some(word => element.value.title.includes(word)) ? element.title = true : element.title = false;

      element.title ? element.sum = 20 : '';
      !element.title && element.summary ? element.sum = 10 : '';
      !element.title && !element.summary ? element.sum = 0 : '';
      element.text = words;
      element.sum > 0 ? this.articlesAmount += 1 : '';
    });
    list.sort(function(a, b){return b.sum - a.sum});
    console.log(list);
    return list;
  }

  includeWord(value, word) {
    console.log(value, word, '123');
    return value.includes(word);
  }
}
