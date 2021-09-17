import { Input } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'app-subcategory-name',
  templateUrl: './subcategory-name.component.html',
  styleUrls: ['./subcategory-name.component.scss']
})
export class SubcategoryNameComponent {

  @Input() name = '';
}
