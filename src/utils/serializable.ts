//export class Serializable {
export interface Serializable {
  fromJSON(json: any): any;
  toJSON(): any;
}
