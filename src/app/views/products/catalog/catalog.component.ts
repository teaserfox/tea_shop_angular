import { Component, OnInit } from '@angular/core';
import {CatalogType} from "../../../../types/catalog.type";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  catalog: CatalogType[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.catalog = this.route.snapshot.data['catalog'];
  }
}
