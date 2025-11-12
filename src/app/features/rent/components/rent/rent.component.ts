import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/model/property';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {

  //declaring properties array.
  properties: Property[] = [];


  //dependency injection of PropertyService(Constrcutor DI).n.
  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    //calling loadProperties() for type 'rent'.
    this.loadProperties('rent');
  }

  //method to call PropertyService to get properties.
  loadProperties(type: string) {
    this.propertyService.getPropertiesByType(type).subscribe(
      data => this.properties = data,
      error => console.error('Error fetching properties:', error)
    );
  }

}
