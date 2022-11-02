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
  head = [{id:"id", name:"name", gender:"gender ", products:"products name", total:"total price paied",staus:"buy or sell"}];
  coustomers=[
    { id: "1", name: "abdullah tarhini",gender:"male", product:"-table\n-5 chairs\n-sofa",total:"+$2,654",status:"buy" },
    { id: "2", name: "wisam wehbe", gender:"male", product:"-big bed\n-2 small beds",total:"+$1,984",status:"buy" },
    { id: "3", name: "jamila abdo ", gender:"female", product:"-sofa",total:"-$500",status:"sell" },
    { id: "4", name: " hasan jaafal", gender:"male", product:"-desk chair",total:"-$1,000",status:"sell" },
    { id: "5", name: "mahdi ahmad", gender:"male", product:"-desk",total:"+$2,123",status:"buy" },
    { id: "6", name: "tony antwan", gender:"male", product:"-8 chairs",total:"+$400",status:"buy" },
    { id: "7", name: "mahdi sha3ban", gender:"male", product:"-table\n -vase",total:"-$1,094",status:"sell" },
    { id: "8", name: " salma amin", gender:"femal", product:"-painting desk",total:"-$894",status:"sell" },
    { id: "9", name: " yasseen ", gender:"male", product:"-vase",total:"+$200",status:"buy" }
  ]
}
