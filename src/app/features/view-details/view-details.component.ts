import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  constructor() { }

  images: string[] = [
    'assets/images/buy-hero.webp',
    'assets/images/commercial-hero.webp',
    'assets/images/kl.webp',
    'assets/images/kl-rent-bg.webp',
    'assets/images/commercial-hero.webp',
    'assets/images/buy-hero.webp',
    'assets/images/kl-rent-bg.webp',
  ];

  selectedImage: string;

  property = {
    name: 'Axis Crown @ Axis Pandan',
    address: 'Pandan Indah, 68000, Ampang',
    price: 3800,
    beds: 2,
    baths: 2,
    sqft: 788
  };

  ngOnInit() {
    this.selectedImage = this.images[0];
  }

  selectImage(img: string) {
    this.selectedImage = img;
  }

}
