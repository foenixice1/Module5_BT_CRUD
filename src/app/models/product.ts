export class Product {
  id!: number;
  name!: string;
  user!: string;
  passWord!: string;
  birthDay!: string;
  gender!: string;
  address!: string;


  constructor(id: number, name: string, user: string, passWord: string, birthDay: string, gender: string, address: string) {
    this.id = id;
    this.name = name;
    this.user = user;
    this.passWord = passWord;
    this.birthDay = birthDay;
    this.gender = gender;
    this.address = address;
  }
}
