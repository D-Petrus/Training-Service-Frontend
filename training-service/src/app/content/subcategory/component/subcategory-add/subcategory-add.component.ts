import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subcategory-add',
  templateUrl: './subcategory-add.component.html',
  styleUrls: ['./subcategory-add.component.css']
})
export class SubcategoryAddComponent {

  submitted = false;

  subcatAddForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    description: new FormControl('', [
      Validators.required,
      Validators.maxLength(300)
    ])
  });

  constructor() { }

  // saveSubcat() {
  //   const subcat:Subcategory = this.subcatAddForm.value;
  //     this.subcategoryService.addNewSubCat(subcat);
  //     this.submitted = true;
  //     this.subcatAddForm.reset();
  // }

}
