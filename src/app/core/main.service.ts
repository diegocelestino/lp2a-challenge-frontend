import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ClientPage} from "./models/client-page";

@Injectable({
  providedIn: 'root'
})
export class MainService {
  apiUrl = `http://localhost:8080/api/v1/client`;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept-Language': 'pt-BR'
    })
  };

  constructor(private httpClient: HttpClient) {}

  getClientPage(page: number): Observable<ClientPage> {
    return this.httpClient.get<ClientPage>(this.apiUrl  + "?page=" + page, this.httpOptions);
  }

}
