import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { NgForOf } from "../../../node_modules/@angular/common/common_module.d-NEF7UaHr";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [NgFor],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
images = [
    {
      thumbnail: 'elesym/gallery/19.webp',
      full: 'elesym/gallery/19.webp',
      alt: 'Table Full of Spices',
    },
    {
      thumbnail: 'elesym/gallery/01.webp',
      full: 'elesym/gallery/01.webp',
      alt: 'Place Royale Bruxelles',
    },
    {
      thumbnail: 'elesym/gallery/02.webp',
      full: 'elesym/gallery/02.webp',
      alt: 'View of the City in the Mountains',
    },
    {
      thumbnail: 'elesym/gallery/03.webp',
      full: 'elesym/gallery/03.webp',
      alt: 'Place Royale Bruxelles',
    },
    {
      thumbnail: 'elesym/gallery/04.webp',
      full: 'elesym/gallery/04.webp',
      alt: 'Place Royale Bruxelles',
    },
    {
      thumbnail: 'elesym/gallery/05.webp',
      full: 'elesym/gallery/06.webp',
      alt: 'Place Royale Bruxelles',
    },
    {
      thumbnail: 'elesym/gallery/07.webp',
      full: 'elesym/gallery/07.webp',
      alt: 'Table Full of Spices',
    },
    {
      thumbnail: 'elesym/gallery/10.webp',
      full: 'elesym/gallery/10.webp',
      alt: 'Table Full of Spices',
    },
    {
      thumbnail: 'elesym/gallery/14.webp',
      full: 'elesym/gallery/14.webp',
      alt: 'Table Full of Spices',
    }
  ];
  showNavigationArrows = false;
	showNavigationIndicators = false;
  currentImage: string = '';
  groupedImages: any[] = [];
  groupedAmenities: any[][] = [];
  @ViewChild('lightbox') lightboxModal!: TemplateRef<any>;
  isMobile = window.innerWidth <= 768;
  constructor(private modalService: NgbModal) {}

  openLightbox(imageUrl: string) {
    this.currentImage = imageUrl;
    this.modalService.open(this.lightboxModal, { size: 'lg', centered: true });
  }
  handleKeyDown(event: KeyboardEvent, imageUrl: string): void {
    if (event.key === 'Enter' || event.key === ' ') {
      this.openLightbox(imageUrl);
    }
  }
  ngOnInit() {
    this.groupImages();
    // this.groupedAmenities = this.chunk(this.amenities, 3);
  }

  groupImages() {
    const chunkSize = 3;
    for (let i = 0; i < this.images.length; i += chunkSize) {
      this.groupedImages.push(this.images.slice(i, i + chunkSize));
    }
  }
  chunk(arr: any[], size: number) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  }
  open(title: string) {
      console.log('open', title);
      const modalRef = this.modalService.open(ModalComponent);
      modalRef.componentInstance.title = title;
    }
}
