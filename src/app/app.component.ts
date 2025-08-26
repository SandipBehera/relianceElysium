import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { SliderComponent } from "./slider/slider.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { AminitiesComponent } from "./aminities/aminities.component";
import { FloorplansComponent } from "./floorplans/floorplans.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ContactComponent } from "./contact/contact.component";
import { WebsitetrackerService } from './websitetracker.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, SliderComponent, AboutusComponent, AminitiesComponent, FloorplansComponent, GalleryComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RelianceElysium';
  constructor(private VisitorTrackerService:WebsitetrackerService){}
  ngOnInit() {
    this.VisitorTrackerService.logVisitor('https://relianceelysium.com').subscribe({
      next: (res) => console.log('Visitor logged', res),
      error: (err) => console.error('Error logging visitor:', err)
    });
  }

}
