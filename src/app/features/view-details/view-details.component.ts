import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  constructor(private location:Location) { }

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

  // Google Map Embed URL (moved from HTML)
  mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15930.970407806825!2d101.68405868809338!3d3.1390036499999967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37d111111111%3A0x7a0b1d362bc3a0!2sKuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2smy!4v1661430783654!5m2!1sen!2smy';



  //CTA
  goBack(): void {
    this.location.back();
  }
}
