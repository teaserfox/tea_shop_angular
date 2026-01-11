import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'tea-bag-modal',
  templateUrl: './tea-bag-modal.component.html',
  styleUrls: ['./tea-bag-modal.component.scss']
})
export class TeaBagModalComponent {

  constructor(
    public activeModal: NgbActiveModal,
    private router: Router
  ) {}

  cart(): void {
    this.activeModal.close();
    this.router.navigate(['/catalog']);
  }
}

