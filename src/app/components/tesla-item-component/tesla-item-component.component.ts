import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from '../../itemService/item-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import CultureNews from "../../json/culture-news.json";


@Component({
  selector: 'app-tesla-item-component',
  templateUrl: './tesla-item-component.component.html',
  styleUrls: ['./tesla-item-component.component.scss']
})
export class TeslaItemComponentComponent implements OnInit {
  dataFromServer: any;
  articleData: any;
  articleId: number;
  dataArray = [];
  resultList: any;
  myGroup: FormGroup;
  articlesAmount: number = 10;
  searchWords: string[];
  public result;
  public CultureNewsList:{name:string}[] = CultureNews;
  constructor(private services: ItemServiceService, private route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    this.articleId = Number(this.route.snapshot.params.id);
    this.result = this.CultureNewsList.map(item => Object.values(item)[0]);
    console.log('this.resultSpace = ', this.result[this.articleId-1], this.articleId);
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

  public routeToMainPage(): void {
    this.router.navigate(['/tesla']);
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
