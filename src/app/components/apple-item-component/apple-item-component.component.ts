import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from '../../itemService/item-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import AppleNews from "../../json/sport-news.json";

@Component({
  selector: 'app-apple-item-component',
  templateUrl: './apple-item-component.component.html',
  styleUrls: ['./apple-item-component.component.scss']
})
export class AppleItemComponentComponent implements OnInit {
  dataFromServer: any;
  articleData: any;
  articleId: number;
  dataArray = [];
  resultList: any;
  articlesAmount: number = 10;
  searchWords: string[];
  public result;
  public AppleNewsList:{name:string}[] = AppleNews;
  constructor(private services: ItemServiceService, private route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    this.articleId = Number(this.route.snapshot.params.id);
    this.result = this.AppleNewsList.map(item => Object.values(item)[0]);
    console.log('this.resultSpace = ', this.result[this.articleId-1], this.articleId);
    this.services.getData2().subscribe((result) => {
      console.log(result);
    });
  }

  
  public routeToMainPage(): void {
    this.router.navigate(['/apple']);
  }


}
