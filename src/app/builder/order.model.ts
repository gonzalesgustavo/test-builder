interface Payload {
  attrOne?: string;
  attrTwo?: string;
  symbol?: string;
  text?: string;
}
export class Order {
  constructor(
    public id: number,
    public type: string,
    public payload: Payload
  ) {}
}
