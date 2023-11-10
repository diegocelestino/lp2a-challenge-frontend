import { Component } from '@angular/core';
import {MainService} from "../../core/main.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(
    private mainService: MainService
  ) {}


}
