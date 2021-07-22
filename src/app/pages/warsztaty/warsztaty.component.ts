import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventsService } from 'src/app/events.service';
import { Event } from 'src/app/models/Event';


@Component({
  selector: 'app-warsztaty',
  templateUrl: './warsztaty.component.html',
  styleUrls: ['./warsztaty.component.scss']
})
export class WarsztatyComponent implements OnInit {

  events!: Observable<Event[]>
  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.events = this.eventsService.getEvents();
    console.log(this.events);
  }

}
