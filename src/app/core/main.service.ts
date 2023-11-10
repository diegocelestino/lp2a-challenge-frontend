import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environments} from "./environments";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MainService {
  apiUrl = `${environments.apiUrl}/client`;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept-Language': 'pt-BR'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getClientPage(): Observable<ClientPage> {
    return this.httpClient.get<ClientPage>(this.apiUrl, this.httpOptions);
  }
}
