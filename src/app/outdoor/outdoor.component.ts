import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outdoor',
  templateUrl: './outdoor.component.html',
  styleUrls: ['./outdoor.component.css']
})
export class OutdoorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  /*
  Let: any count: number = 0;
  const counter = document.getElementById('counter');
  document: any.getElementById('add-animation').addEventListener('click', event => {
  const cl:any = counter.classList;
  const c:string = 'animated-counter';
  count++;
  counter.innerText = count;
  cl.remove(c, cl.contains(c));
  setTimeout(() =>
    counter?.classList.add('animated-counter'),1)
})*/
}
