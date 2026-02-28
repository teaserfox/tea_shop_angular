import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {CatalogType} from "../types/catalog.type";

@Injectable({
  providedIn: 'root'
})
export class TeaService {

  private apiUrl = 'https://testologia.ru/tea';

  constructor(private http: HttpClient) { }

  getAll(): Observable<CatalogType[]> {
    return this.http.get<CatalogType[]>(this.apiUrl);
  }

  getById(id: number): Observable<CatalogType | null> {
    return this.getAll().pipe(
      map(items => items.find(item => item.id === id) || null)
    );
  }
}
