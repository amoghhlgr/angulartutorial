import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ServersService {

  constructor(private http: Http) { }

  storeServers(servers: any[]) {
    return this.http.post('https://fir-60f4a.firebaseio.com/data.json', servers);
  }
}
