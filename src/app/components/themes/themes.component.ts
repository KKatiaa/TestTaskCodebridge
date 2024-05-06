import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {
  dataFromServer: any;
  articleData: any;
  articleId: any;
  constructor(private route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    this.articleId = this.route.url;
  }

  public routeToMainPage(): void {
    this.router.navigate(['']);
  }

  public navigateToCosmosComponent() {
    this.router.navigate(['']);
  }

  public navigateToBussinessComponent() {
    this.router.navigate(['/bussiness']);
  }

  public navigateToTeslaComponent() {
    this.router.navigate(['/tesla']);
  }

  public navigateToAppleComponent() {
    this.router.navigate(['/apple']);
  }
}
