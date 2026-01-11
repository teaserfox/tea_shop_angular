import {AfterViewInit, Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Subscription, timer} from "rxjs";
import {TeaBagModalService} from "../../../shared/services/tea-bag-modal.service";
declare var $: any;

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {

  ngAfterViewInit(): void {
    ($('.autoplay') as any).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      adaptiveHeight: true,
    });

    // jQuery UI Accordion
    ($('#accordion') as any).accordion({
      collapsible: true,
      heightStyle: 'content',
      icons: { "header": "arrow-down", "activeHeader": "arrow-up" }
    });

    // Wow.js
    if ((window as any).WOW) {
      new (window as any).WOW().init();
    }

  }

  private popupSub?: Subscription;

  constructor(private modalService: TeaBagModalService) { }

  ngOnInit(): void {
    this.popupSub = timer(10000).subscribe(() => {
      this.modalService.open();
    });
  }

  ngOnDestroy(): void {
    this.popupSub?.unsubscribe();
  }
}
