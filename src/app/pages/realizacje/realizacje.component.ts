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

  domki = [
    {
      title: "Domek Pana Marcina",
      images: [
          '../assets/1.jpg',
          '../assets/2.jpg',
          '../assets/3.jpg'
      ],
      investor: "Pan Marcin z Wielkopolski",
      houseColor: "beżowy brąz",
      roofColor: "czarny",
      slug: "domek-pana-marcina"

    },
    {
      title: "Domek Pana Łukasza",
      images: [
          '../assets/1.jpg',
          '../assets/2.jpg',
          '../assets/3.jpg'
      ],
      investor: "Pan Łukasz z Podkarpacia",
      houseColor: "beżowy brąz",
      roofColor: "niebieski",
      slug: "domek-pana-lukasza"

    },
    {
      title: "Domek Pani Wandy",
      images: [
          '../assets/1.jpg',
          '../assets/2.jpg',
          '../assets/3.jpg'
      ],
      investor: "Pan Maria z Polesia",
      houseColor: "biały",
      roofColor: "zielony",
      slug: "domek-pani-wandy"

    }
  ]

  ngOnInit(): void {
    this.products = this.eventsService.getProducts();
  }
}
