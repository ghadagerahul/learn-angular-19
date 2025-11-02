import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StructuralDirective } from "./Directives/structural-directive/structural-directive";
import { AttributeDirective } from "./Directives/attribute-directive/attribute-directive";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StructuralDirective, AttributeDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-19-tutorials');


}
