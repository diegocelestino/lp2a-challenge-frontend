import {Component, OnInit} from '@angular/core';
import {MainService} from "../../core/main.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientPage} from "../../core/models/client-page";
import {first} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  clientPage: ClientPage | undefined;
  page: number | undefined | null;

  constructor(
    private mainService: MainService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.page = this.getPage();
    this.getClientPage(this.page);

  }

  private getClientPage(page: number) {
    this.mainService.getClientPage(page)
      .pipe(first())
      .subscribe({
        next: clientPage => {
          this.clientPage = clientPage;
        }
      })
  }

  private getPage() {
    let page = this.route.snapshot.queryParamMap.get("page");
    if (page == null) {
      return 0;
    }
    return parseInt(page);
  }

  previous() {
    this.router.navigate(
      ['/pages'],
      {queryParams: {page: this.page! -1}}
    ).then(r => {
      location.replace('pages?page=' + (parseInt(String(this.page!)) - 1));
    });
  }

  next() {
    this.router.navigate(
      ['/pages'],
      {queryParams: {page: this.page! + 1}}
    ).then(r => {
      location.replace('pages?page=' + (parseInt(String(this.page!)) + 1));
    });
   }

}
