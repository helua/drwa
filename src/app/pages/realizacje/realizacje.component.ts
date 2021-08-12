import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product'
import { EventsService } from 'src/app/events.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-realizacje',
  templateUrl: './realizacje.component.html',
  styleUrls: ['./realizacje.component.scss']
})
export class RealizacjeComponent implements OnInit {

  products!: Observable<Product[]>

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.products = this.eventsService.getProducts();

  }
}
