export interface IProperty {
  Id: number;
  sellRent: number;
  name: string;
  type: string;
  price: number;
  // the ? denotes an optional property
  image?: string;
}
