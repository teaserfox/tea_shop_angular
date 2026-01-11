import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TeaBagModalService {

  private isOpen$ = new BehaviorSubject<boolean>(false);


  open(): void {
    this.isOpen$.next(true);
  }

  close(): void {
    this.isOpen$.next(false);
  }

  get state$() {
    return this.isOpen$.asObservable();
  }

  constructor() { }
}
