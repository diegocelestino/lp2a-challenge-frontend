import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../core/client.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientPage} from "../../core/models/client-page";
import {first} from "rxjs";
import {Client} from "../../core/models/client";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  clientPage: ClientPage | undefined;
  page: number | undefined | null;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.page = this.getPage();
    this.getClientPage(this.page);
  }

  private getClientPage(page: number) {
    this.clientService.getClientPage(page)
      .pipe(first())
      .subscribe({
        next: clientPage => {
          this.clientPage = clientPage;
        }
      })
  }

  getClientDetail(client: Client) {
    location.replace('pages/' + client.id);
  }

  private getPage() {
    let page = this.route.snapshot.queryParamMap.get("page");
    if (page == null) {
      return 0;
    }
    return parseInt(page);
  }

  previous() {
    this.router.navigate(['/pages'], {queryParams: {page: this.page! - 1}})
      .then(r => this.ngOnInit());
  }

  next() {
    this.router.navigate(['/pages'], {queryParams: {page: this.page! + 1}})
      .then(r => this.ngOnInit());
    }


}
