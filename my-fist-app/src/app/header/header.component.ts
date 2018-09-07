import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  isIn = false;   // store state
  toggleState() { // click handler
      let bool = this.isIn;
      this.isIn = bool === false ? true : false; 
  }

  time = new Observable(observer =>{
    setInterval(() => observer.next(new Date().toString()), 1000)
  });

  squareOdd = of(1, 2, 3, 4, 5)
  .pipe(
    filter(n => n % 2 !== 0),
    map(n => n * n)
  );

// Subscribe to get values
//squareOdd.Subscribe(x => console.log(x));

}
