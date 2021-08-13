import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { Post } from '../../../models/Post';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit, AfterViewChecked {

  @Input() post!: Post;
  categories?: string[];

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewChecked(): void{
    console.log(this.post + '  hejkaaaaa')
    this.categories = this.post.categories;
    console.log(this.categories);
  }

}
