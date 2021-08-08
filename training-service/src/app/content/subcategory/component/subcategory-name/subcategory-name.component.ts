import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subcategory-name',
  templateUrl: './subcategory-name.component.html',
  styleUrls: ['./subcategory-name.component.scss']
})
export class SubcategoryNameComponent implements OnInit {

  name: string | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(p => this.name = p['name'])
  }

}
