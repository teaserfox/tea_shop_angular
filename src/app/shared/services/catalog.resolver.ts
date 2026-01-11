import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { CatalogType } from '../../../types/catalog.type';
import { TeaService } from './tea.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogResolver implements Resolve<CatalogType[]> {

  constructor(private teaService: TeaService) {}

  resolve(): Observable<CatalogType[]> {
    return this.teaService.getAll();
  }
}

