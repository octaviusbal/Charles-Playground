import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observables';
  public numbers$: Observable<number[]> = of([1, 2, 3, 4, 6, 7, 8, 9, 10]);

  constructor() {
    // Challenge 1 
    // Use the numbers$ observable and double every value of the array

    // Challenge 2
    // Use the numbers$ observable and filter out any value thats less than 5

  }
}
