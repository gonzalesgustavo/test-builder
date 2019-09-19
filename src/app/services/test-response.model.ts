interface PayloadInterface {
  attrOne?: string;
  attrTwo?: string;
  symbol?: string;
  text?: string;
}
export class TestResponse {
  constructor(
    public id: number,
    public type: string,
    public payload: PayloadInterface
  ) {}
}
