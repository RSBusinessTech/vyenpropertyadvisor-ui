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

  //Sharing property.
  shareProperty(event: Event) {
   event.preventDefault();
  if ((navigator as any).share) {
    (navigator as any).share({
      title: 'Check out this property',
      text: 'Check out this amazing property for rent!',
      url: window.location.href
    }).catch((error: any) => {
      console.error('Error sharing:', error);
    });
  } else {
    alert('Sharing not supported on this browser. You can copy the URL manually.');
  }
 }
}
