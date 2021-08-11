import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventsService } from 'src/app/events.service';
import { Article } from 'src/app/models/Article';


@Component({
  selector: 'app-warsztaty',
  templateUrl: './warsztaty.component.html',
  styleUrls: ['./warsztaty.component.scss']
})
export class WarsztatyComponent implements OnInit {

  articles!: Observable<Article[]>
  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.articles = this.eventsService.getArticles();
  }

}
