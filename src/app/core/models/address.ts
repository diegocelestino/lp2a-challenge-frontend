export class Address {
  region: string;
  street: string;
  city: string;
  state: string;
  postCode: number;

  constructor(
    region: string,
    street: string,
    city: string,
    state: string,
    postCode: number,
  ) {
    this.region = region;
    this.street = street;
    this.city = city;
    this.state = state;
    this.postCode = postCode;
  }
}
