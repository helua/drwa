import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventsService } from 'src/app/events.service';
import { Post } from 'src/app/models/Post';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() feed: string;

  posts!: Observable<Post[]>

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.posts = this.eventsService.getPosts(this.feed);

  }
}
