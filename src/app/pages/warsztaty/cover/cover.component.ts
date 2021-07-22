import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../../../models/Event';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {

  @Input() event!: Event;
  
  constructor() { }

  ngOnInit(): void {
  }

}
