import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/model/property';
import { PropertyService } from 'src/app/services/property.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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

 //Download PDF/
  downloadPDF() {
  const DATA: any = document.getElementById('mm2h-table-section');
  if (!DATA) {
    console.error('MM2H table section not found!');
    return;
  }

  html2canvas(DATA).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');

    const imgWidth = 210; // full width A4
    const pageHeight = 297;
    const imgHeight = canvas.height * imgWidth / canvas.width;

    let position = 0;
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    pdf.save('MM2H_Table.pdf');
  }).catch((err) => {
    console.error('Error generating PDF:', err);
  });
}


}
