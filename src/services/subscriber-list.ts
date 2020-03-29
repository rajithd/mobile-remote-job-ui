import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MenuItem} from '../app/menu-item';

@Injectable()
export class SubscriberListService {

  constructor(public http: HttpClient) {
  }

  getAll(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>("http://localhost:8080/api/subscribers");
  }

}
