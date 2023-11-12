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
  type: string | undefined | null;
  region: string | undefined | null;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.page = this.getPage();
    this.type = this.getType();
    this.region= this.getRegion();
    console.log(this.type);
    this.getClientPage(this.page, this.type, this.region);
  }

  private getClientPage(page: number, type: string, region: string) {
    this.clientService.getClientPage(page, type, region)
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

  private getType() {
    let type = this.route.snapshot.queryParamMap.get("type");
    if (type == null){
      return "ALL";
    }
    return type;
  }

  private getRegion() {
    let region = this.route.snapshot.queryParamMap.get("region");
    if (region == null){
      return "ALL";
    }
    return region;
  }


  previous() {
    this.router.navigate(['/pages'],
      {queryParams: {page: this.page! - 1, type: this.type, region: this.region}})
      .then(r => this.ngOnInit());
  }

  next() {
    this.router.navigate(['/pages'],
      {queryParams: {page: this.page! + 1, type: this.type, region: this.region}})
      .then(r => this.ngOnInit());
    }


  filterByType(type: string) {
    this.router.navigate(['/pages'], {queryParams: {type: type}})
      .then(r => this.ngOnInit());
  }

  filterByRegion(region: string) {
    this.router.navigate(['/pages'], {queryParams: {region: region}})
      .then(r => this.ngOnInit());
  }
}
