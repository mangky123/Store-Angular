import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http : HttpClient) { }

  getproduct() {
    return this.http.get<Product[]>('http://angulardb/getproduct');
  }
}
