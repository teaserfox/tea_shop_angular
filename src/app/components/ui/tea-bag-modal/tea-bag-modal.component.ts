import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {TeaBagModalService} from "../../services/tea-bag-modal.service";
import {Router} from "@angular/router";

@Component({
  selector: 'tea-bag-modal',
  templateUrl: './tea-bag-modal.component.html',
  styleUrls: ['./tea-bag-modal.component.scss']
})
export class TeaBagModalComponent implements OnInit {

  isOpen$ = this.modalService.state$;

  constructor(
    private modalService: TeaBagModalService,
    private elRef: ElementRef,
    private router: Router) {

  }

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = this.elRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.modalService.close();
    }
  }

  cart(): void {
    this.router.navigate(['/catalog']);
    this.modalService.close();
  }
}
