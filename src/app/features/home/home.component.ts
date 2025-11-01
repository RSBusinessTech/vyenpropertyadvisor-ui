import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) { }

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
}
