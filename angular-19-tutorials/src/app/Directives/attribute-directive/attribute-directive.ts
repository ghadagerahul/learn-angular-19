import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { Xliff } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  imports: [FormsModule, NgClass, CommonModule, NgStyle],
  templateUrl: './attribute-directive.html',
  styleUrl: './attribute-directive.css',
})
export class AttributeDirective {



  //NgClass : ngclass is used to chnage eternal CSS of the DOM stucture
  //Example-1
  colorVal: string = '';
  chnageColor(color: string) {
    this.colorVal = color;
  }

  //Example-2: checkbox
  clolorFlag: boolean = false;


  //Example-3 : inputfiels
  colorName: string = '';

  //ngStyle:    ng style is use to change internal CSS of the DOM  strucutre.
  //Example-1
  styleColorEx1: string = 'orange';
  chnageStyleColor(x: string) {
    this.styleColorEx1 = x;
  }

  //Example-2: checkbox
  styleColor: boolean = false;
  updateStylecolorcheckbox(x: boolean) {
    if (x) {
      this.styleColor = true;
    }
  }

  //Example-3:input

  textColor: string = '';

}
