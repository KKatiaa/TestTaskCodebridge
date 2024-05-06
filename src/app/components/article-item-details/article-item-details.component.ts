import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from '../../itemService/item-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import SpaceNews from "../../json/space-news.json";

@Component({
  selector: 'app-article-item-details',
  templateUrl: './article-item-details.component.html',
  styleUrls: ['./article-item-details.component.scss']
})
export class ArticleItemDetailsComponent implements OnInit {
  dataFromServer: any;
  articleData: any;
  articleId: number;
  dataArray = [];
  resultList: any;
  articlesAmount: number = 10;
  searchWords: string[];
  public result;
  public SpaceNewsList:{name:string}[] = SpaceNews;
  constructor(private services: ItemServiceService, private route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    this.articleId = Number(this.route.snapshot.params.id);
    this.result = this.SpaceNewsList.map(item => Object.values(item)[0]);
    console.log('this.resultSpace = ', this.result[this.articleId-1], this.articleId);
    this.services.getData2().subscribe((result) => {
      console.log(result);
    });
  }

  public routeToMainPage(): void {
    this.router.navigate(['']);
  }

}
