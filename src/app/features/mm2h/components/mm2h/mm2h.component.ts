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

   properties: Property[] = [];        // full list.
   activeProperties: Property[] = [];  // filtered only if isActive = YES.
 
 
   //dependency injection of PropertyService(Constrcutor DI).n.
   constructor(private propertyService: PropertyService) { }
 
   ngOnInit() {
     //calling loadProperties() for type 'rent'.
     this.loadProperties('buy','vyenpropertyadvisor');
   }
 
//method to call PropertyService to get properties.
loadProperties(type: string, agentId: string) {
  this.propertyService.getPropertiesByType(type,agentId).subscribe(
    data => {
      this.properties = data;

      // Filter only active properties robustly
      this.activeProperties = this.properties.filter(
        p => p.isActive && p.isActive.trim().toUpperCase() === 'YES'
      );
    },
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

 //Download PDF
  downloadPDF() {
  const DATA: any = document.getElementById('mm2h-table-section');
  const button: any = document.querySelector('.cta-button'); // your download button selector.

  if (!DATA) {
    console.error('MM2H table section not found!');
    return;
  }

  //hide the button before capture.
  if (button) button.style.display = 'none';

  //save original styles.
  const originalWidth = DATA.style.width;
  const originalOverflow = DATA.style.overflow;

  //force full-width rendering.
  DATA.style.width = '1000px';
  DATA.style.overflow = 'visible';

  setTimeout(() => {
    html2canvas(DATA, {
      scale: 2,
      useCORS: true,
      windowWidth: 1000,
    }).then((canvas) => {

      //restore styles.
      DATA.style.width = originalWidth;
      DATA.style.overflow = originalOverflow;

      //show the button again.
      if (button) button.style.display = 'inline-block';

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');

      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('VyenProperty-MM2H-Comparison.pdf');
    });
  }, 100);
 }
}
