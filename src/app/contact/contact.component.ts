import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  email: boolean = true;
  showemail() {
    this.email =!this.email;
  }
  calling() {
    alert("calling ...\nplease wait");
  }
  change:boolean=true;
  showpass(){
this.change=!this.change;
  }
  change2:boolean=true;
  showconfirmpass(){
this.change2=!this.change2;
  }
creatingaccount:boolean=true;
creatacc(){
  this.creatingaccount=!this.creatingaccount;
}
}
