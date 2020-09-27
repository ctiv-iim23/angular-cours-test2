import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // components have three files (MVC) :
  // - name.component.ts    => C (controller) all the logic here
  // - name.component.html  => V (view presentation) => HTML
  // - name.component.css   => V (view style) => styling
  // the M (model) is manipulated by the controller => see the students.component example
}
