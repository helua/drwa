import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from './models/Product';
import { Event } from './models/Event';
import { Post } from './models/Post';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('/.netlify/functions/getPosts', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>('/.netlify/functions/getEvents', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/.netlify/functions/getProducts', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // getPost(id) {
  //   console.log(id);
  //   return this.http.get( `/.netlify/functions/getPost\?id=${id}`
  //   , {
  //     headers: {
  //       'Content-Type': 'application/json; charset=utf-8',
  //     },
  //   });
  // }

}
