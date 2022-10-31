import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hiddenproduct: boolean = true;
  showproduct() {
    this.hiddenproduct =!this.hiddenproduct;
  } hiddenproduct2: boolean = true;
  showproduct2() {
    this.hiddenproduct2 =!this.hiddenproduct2;
  } hiddenproduct3: boolean = true;
  showproduct3() {
    this.hiddenproduct3 =!this.hiddenproduct3;
  }
}
