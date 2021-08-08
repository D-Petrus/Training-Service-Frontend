import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category-name.component.html',
  styleUrls: ['./category-name.component.scss']
})
export class CategoryNameComponent implements OnInit {

  name: string | undefined;
  paramSubscription: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.paramSubscription = this.route.params.subscribe(p => this.name = p['name']);
    }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }
}
