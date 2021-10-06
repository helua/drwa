import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Product } from './models/Product';
import { Event } from './models/Event';
import { Post } from './models/Post';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private http: HttpClient) {}

  getPosts(feed): Observable<Post[]> {
    return this.http.get<Post[]>('/.netlify/functions/get'+feed, {
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

  getPost(id) {
    console.log(id);
    return this.http.get( `/.netlify/functions/getPost\?id=${id}`
    , {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        // 'Reffer-Policy': 'origin',
        // 'Authorization': 'Bearer sknAMz65HppdnFiQD3UHDQx1R6Bbd9uZofibABd14HsNoa38UoJE3diWIPB7Qp61DAUmyD7QFcVzy797IEd7zt4GaYdGdI9NSeBlVjAhywekd7PPYHXspgTFMHJryRvO61cjZBUi9sZv03wYf8KUrHnFr1h6zsQuvoiI2kvvcR0MPXN2jXPc',
        // 'Access-Control-Allow-Origin': 'https://10ugj9p1.api.sanity.io'
      },
    });
  }

}
