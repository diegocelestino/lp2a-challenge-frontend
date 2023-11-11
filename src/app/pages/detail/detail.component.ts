import {Component, OnInit} from '@angular/core';
import {Client} from "../../core/models/client";
import {ClientService} from "../../core/client.service";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  client: Client | undefined
  id: string | undefined | null;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getClient(this.id!);
  }

  private getClient(id: string) {
    this.clientService.getClient(id)
      .pipe(first())
      .subscribe({
        next: client => {
          this.client = client;
          console.log(this.client.name)
        }
      })
  }

}
