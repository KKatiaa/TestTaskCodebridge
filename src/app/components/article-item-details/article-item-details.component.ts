import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from '../../itemService/item-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article-item-details',
  templateUrl: './article-item-details.component.html',
  styleUrls: ['./article-item-details.component.scss']
})
export class ArticleItemDetailsComponent implements OnInit {
  dataFromServer: any;
  articleData: any;
  articleId: number;
  constructor(private services: ItemServiceService, private route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    this.articleId = Number(this.route.snapshot.params.id);
    this.services.getData().subscribe((result) => {
      this.dataFromServer = result.results;
      this.dataFromServer.forEach((el) => {
        if (el.id === this.articleId) {
          this.articleData = el;
        }
      });
    });
  }

  public routeToMainPage(): void {
    this.router.navigate(['']);
  }

}
