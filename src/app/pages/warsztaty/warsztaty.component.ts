import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventsService } from 'src/app/events.service';
import { Post } from 'src/app/models/Post';


@Component({
  selector: 'app-warsztaty',
  templateUrl: './warsztaty.component.html',
  styleUrls: ['./warsztaty.component.scss']
})
export class WarsztatyComponent implements OnInit {

  posts!: Observable<Post[]>

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.posts = this.eventsService.getPosts();
    console.log('KUPAAA' + this.posts);

  }

}
