import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bussiness-news-item',
  templateUrl: './bussiness-news-item.component.html',
  styleUrls: ['./bussiness-news-item.component.scss']
})
export class BussinessNewsItemComponent implements OnInit {
  @Input() data;
  constructor(public router: Router) {}
  public isClicked: boolean = false;

  ngOnInit(): void {
  }

  public toggleClicked() {
    this.isClicked = !this.isClicked;
  }

  public routeToArticle(): void {
    this.router.navigate(['/bussinessDetails', this.data.id]);
  }
}
