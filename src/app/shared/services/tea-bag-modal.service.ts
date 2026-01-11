import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TeaBagModalComponent } from '../ui/tea-bag-modal/tea-bag-modal.component';

@Injectable({
  providedIn: 'root'
})
export class TeaBagModalService {

  constructor(private modalService: NgbModal) {}

  open(): void {
    this.modalService.open(TeaBagModalComponent, {
      backdrop: false,
      backdropClass: 'custom-backdrop',
      windowClass: 'tea-modal-window',

    });
  }

  closeAll(): void {
    this.modalService.dismissAll();
  }
}

