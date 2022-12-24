import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  get getDescription(): string {
    return this._getDescription;
  }

  set getDescription(value: string) {
    this._getDescription = value;
  }
  private _getDescription = 'Nice Description';
}
