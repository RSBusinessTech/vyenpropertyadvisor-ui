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
    showAll = false;
    showAllCommonFacilities = false;


  property = {
    name: 'Axis Crown @ Axis Pandan',
    address: 'Pandan Indah, 68000, Ampang',
    price: 3800,
    beds: 2,
    baths: 2,
    carParks: 2,
    furnish: 'Fully',
    sqft: 788
  };

  amenities: string[] = [
    'Air conditioner',
    'Balcony',
    'Bed',
    'Covered car parking',
    'Refrigerator',
    'Washing machine',
    'Water heater',
    'Wardrobe',
    'Sofa set',
    'Dining table',
    'Microwave oven',
    'TV unit',
    'High-speed WiFi',
    '24-hour security'
  ];

    commonFacilities: string[] = [
    'Gym',
    'Balcony',
    'Covered car parking',
    'TV unit',
    'High-speed WiFi',
    '24-hour security'
  ];

  ngOnInit() {
    this.selectedImage = this.images[0];
  }

  selectImage(img: string) {
    this.selectedImage = img;
  }

  showEnquiry = false;

  toggleEnquiry() {
    this.showEnquiry = !this.showEnquiry;
  }

  openWhatsApp() {
    window.open('https://wa.me/+60162907662', '_blank');
  }

  // Amenities
  get displayedAmenities(): string[] {
    return this.showAll ? this.amenities : this.amenities.slice(0, 4);
  }

  toggleAmenities() {
    this.showAll = !this.showAll;
  }


  //Common Facilities
   get displayedCommonFacilities(): string[] {
    return this.showAllCommonFacilities ? this.commonFacilities : this.commonFacilities.slice(0, 4);
  }

    toggleCommonFacilities() {
    this.showAllCommonFacilities = !this.showAllCommonFacilities;
  }

}
