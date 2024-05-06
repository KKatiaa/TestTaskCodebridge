import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tesla-news-item',
  templateUrl: './tesla-news-item.component.html',
  styleUrls: ['./tesla-news-item.component.scss']
})
export class TeslaNewsItemComponent {
  @Input() data;
  constructor(public router: Router) {}
  public isClicked: boolean = false;

  public routeToArticle(): void {
    this.router.navigate(['/teslaDetails', this.data.id]);
  }

  public toggleClicked() {
    this.isClicked = !this.isClicked;
  }
  
  public routeToMainPage(): void {
    this.router.navigate(['/tesla']);
  }

}
