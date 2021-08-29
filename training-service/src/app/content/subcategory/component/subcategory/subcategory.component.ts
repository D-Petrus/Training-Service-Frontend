import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent implements OnInit, OnDestroy {

  paramSubscription: Subscription | undefined;
  name: string = '';

  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.paramSubscription = this.route.params.subscribe(p => this.name = p['name']);
  }

  ngOnDestroy(): void {
    this.paramSubscription?.unsubscribe();

  }



}
