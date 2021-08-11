import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { Article } from '../../../models/Article';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit, AfterViewChecked {

  @Input() article!: Article;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void{
    console.log(this.article.categories + '  hejkaaaaa')
  }

}
