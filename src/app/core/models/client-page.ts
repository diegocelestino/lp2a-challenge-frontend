import {Client} from "./client";

export class ClientPage {
  totalPages: number;
  actualPage: number;
  totalElements: number;
  size: number;
  clientDtoList: Client[];

  constructor(
    totalPages: number,
    actualPage: number,
    totalElements: number,
    size: number,
    clientDtoList: Client[]
  ) {
    this.totalPages = totalPages;
    this.actualPage = actualPage;
    this.totalElements = totalElements;
    this.size = size;
    this.clientDtoList = clientDtoList;
  }
}
