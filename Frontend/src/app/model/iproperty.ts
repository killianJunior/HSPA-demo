import { IpropertyBase } from './iproperty-base';


export class Property implements IpropertyBase {
  // sellRent: number;

  Id: number;
  SellRent: number;
  name: string;
  ptype: string;
  ftype: string;
  price: number;
  BHK: number;
  builtArea: number;
  carpetArea?: number;
  address:string;
  address2?: string;
  city: string;
  floorNo?: string;
  totalFloor?: string;
  RTM: number;
  AOP?: string;
  mainEntrnace?: string;
  security?: number;
  gated?: number;
  maintenance?: string;
  possession?: string;
  image?: string;
  description?: string;
  postedOn: string;
  postedBy: number;



}
