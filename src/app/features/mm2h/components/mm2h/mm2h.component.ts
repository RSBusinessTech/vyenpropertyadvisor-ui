import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/model/property';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-mm2h',
  templateUrl: './mm2h.component.html',
  styleUrls: ['./mm2h.component.css']
})
export class Mm2hComponent implements OnInit {

   //declaring properties array.
   properties: Property[] = [];
 
 
   //dependency injection of PropertyService(Constrcutor DI).n.
   constructor(private propertyService: PropertyService) { }
 
   ngOnInit() {
     //calling loadProperties() for type 'rent'.
     this.loadProperties('mm2h');
   }
 
   //method to call PropertyService to get properties.
   loadProperties(type: string) {
     this.propertyService.getPropertiesByType(type).subscribe(
       data => this.properties = data,
       error => console.error('Error fetching properties:', error)
     );
   }
}
