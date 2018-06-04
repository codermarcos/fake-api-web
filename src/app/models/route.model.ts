export class Route {
  constructor(merge: Route | Object | any) {
    this.url = '';
    this.method = 'GET';
    this.status = 200;
    this.body = null;
    this.headers = {};

    if (!merge) { return; }

    this.url = merge.url;
    this.method = merge.method || this.method;
    this.status = merge.status || this.status;
    this.body = merge.body;
    this.headers = merge.headers;
  }

  public url: string;
  public method: string;
  public status: number;
  public body: any;
  public headers: object;
}
