import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from '../../itemService/item-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import BussinessNews from "../../json/bussiness-news.json";
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bussiness-item-component',
  templateUrl: './bussiness-item-component.component.html',
  styleUrls: ['./bussiness-item-component.component.scss']
})
export class BussinessItemComponentComponent implements OnInit {
  dataFromServer: any;
  articleData: any;
  articleId: number;
  dataArray = [];
  myGroup: FormGroup;
  resultList: any;
  articlesAmount: number = 10;
  searchWords: string[];
  public result;
  public BussinessNewsList:{name:string}[] = BussinessNews;
  constructor(private services: ItemServiceService, private route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    this.articleId = Number(this.route.snapshot.params.id);
    this.result = this.BussinessNewsList.map(item => Object.values(item)[0]);
    console.log('this.resultSpace = ', this.result[this.articleId-1], this.articleId);
    this.services.getData2().subscribe((result) => {
      console.log(result);
    });

    this.myGroup = new FormGroup({
      name: new FormControl()
    });
  }

  public routeToMainPage(): void {
    this.router.navigate(['/bussiness']);
  }

}
