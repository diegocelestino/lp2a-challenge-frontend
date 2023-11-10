import {Address} from "./address";
import {Picture} from "./picture";

export class Client {
  id: string;
  type: string;
  gender: string;
  name: string;
  address: Address
  email: string;
  birthday: Date;
  registered: Date;
  telephoneNumbers: string[];
  picture: Picture;
  nationality: string;

  constructor(
    id: string,
    type: string,
    gender: string,
    name: string,
    address: Address,
    email: string,
    birthday: Date,
    registered: Date,
    telephoneNumbers: string[],
    picture: Picture,
    nationality: string,
  ) {
    this.id = id;
    this.type = type;
    this.gender = gender;
    this.name = name;
    this.address = address;
    this.email = email;
    this.birthday = birthday;
    this.registered = registered;
    this.telephoneNumbers = telephoneNumbers;
    this.picture = picture;
    this.nationality = nationality;
  }
}
