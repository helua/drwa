import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EventsService } from 'src/app/events.service';
import { switchMap } from 'rxjs/operators';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})



export class PostComponent implements OnInit {
  post: any = {};
  title: string;
  keywords: MetaDefinition = {};
  description: MetaDefinition = {};

  constructor(
    private http: EventsService ,
    private route: ActivatedRoute,
    private location: Location,
    private titleService: Title,
    private metaService: Meta
  ) {}


  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.http.getPost(params.get('id')))).
      subscribe(post => {
        this.post = post;
        console.log(post);
      })


  }

  ngAfterViewChecked(){
    this.title = this.post.name;
    this.titleService.setTitle(this.title);
    this.keywords = {name: 'keywords', content: 'jakies tam keywords'};
    this.description = {name: 'description', content: 'jakis tam opis' };
    this.metaService.updateTag(this.keywords);
    this.metaService.updateTag(this.description);
  }


  goToPosts() {
    this.location.back();
  }

}
