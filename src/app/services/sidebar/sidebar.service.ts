import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {
  public status = true;

  constructor() { }

  public change(status?: boolean) {
    this.status = typeof status === 'boolean' ? status : !this.status;
  }

  public close() {
    this.status = false;
  }

  public open() {
    this.status = true;
  }
}
