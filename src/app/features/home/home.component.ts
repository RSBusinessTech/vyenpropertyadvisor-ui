import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private title: Title, private meta: Meta, private router: Router) { }

  selectedOption: string = 'rent'; // default option
  searchQuery: string = '';

  //Start: Enabling video to play automatically, by default it will be disabled by browser.
  @ViewChild('heroVideo', { static: false }) heroVideo!: ElementRef<HTMLVideoElement>;  

    ngAfterViewInit() {
    const video = this.heroVideo.nativeElement;
    video.muted = true;   // ensure muted property is set programmatically
    video.play().catch(error => {
      console.warn('Video play was prevented:', error);
    });
  }
  //End: Enabling video to play automatically, by default it will be disabled by browser.

  ngOnInit(): void {
    // ✅ SEO optimization
    this.title.setTitle('Vyen Property | Real Estate in Kuala Lumpur | Buy, Rent, New Projects');
    this.meta.addTags([
      { name: 'description', content: 'Find property for sale, rent or new projects in Kuala Lumpur and Malaysia. Explore apartments, condos and rooms with Vyen Property – trusted real estate experts.' },
      { name: 'keywords', content: 'real estate Malaysia, property Kuala Lumpur, rent apartment KL, buy condo KL, Vyen Property, Malaysian property, KL rooms, new property projects' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Vyen Property - Find Your Dream Home in Malaysia' },
      { property: 'og:description', content: 'Buy, rent, or invest in properties across Kuala Lumpur and Malaysia.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://vyenproperty.com.my' },
    ]);
  }

  //Search button"
     onSearch() {
    switch (this.selectedOption) {
      case 'rent':
        this.router.navigate(['/rent']);
        break;
      case 'buy':
        this.router.navigate(['/buy']);
        break;
      case 'commercial':
        this.router.navigate(['/commercial']);
        break;
      case 'mm2h':
        this.router.navigate(['/mm2h']);
        break;
      case 'newProjects':
        this.router.navigate(['/newProjects']);
        break;
      default:
        this.router.navigate(['/home']);
    }
  }
}
