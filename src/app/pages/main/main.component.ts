import {Component, OnInit} from '@angular/core';
import {MainService} from "../../core/main.service";
import {ActivatedRoute} from "@angular/router";
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
    private route: ActivatedRoute
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
          console.log(this.clientPage);
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


}
