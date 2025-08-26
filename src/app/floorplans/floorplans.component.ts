import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-floorplans',
  imports: [],
  templateUrl: './floorplans.component.html',
  styleUrl: './floorplans.component.css'
})
export class FloorplansComponent {
constructor(private modalService: NgbModal) {}
 open(title: string) {
       window.location.href = '#contact';
     }

}
