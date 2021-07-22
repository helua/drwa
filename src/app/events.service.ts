import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Event } from './models/Event';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>('/.netlify/functions/getEvents', {
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
