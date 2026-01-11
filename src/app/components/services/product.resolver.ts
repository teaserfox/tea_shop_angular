import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { Observable, of } from 'rxjs';
import {CatalogType} from "../types/catalog.type";
import {TeaService} from "./tea.service";

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<CatalogType | null> {

  constructor(private teaService: TeaService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CatalogType | null> {

    const id = Number(route.paramMap.get('id'));

    if (!id) {
      return of(null);
    }

    return this.teaService.getById(id);
  }
}
