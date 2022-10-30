
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indoor',
  templateUrl: './indoor.component.html',
  styleUrls: ['./indoor.component.css']
})
export class IndoorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  alert() {
    alert("thank you for buying this item \n your product will be sent in minutes ");
  }
  outofstockalert() {
    alert("SORRY,\n this items is out of stock \n please try later \n thank you ");
  }
  
  indoorfurniture= [
    {title: "Bed", details: "this is large bed for adults colored white and grey with price $399 ", img: "bigbed$399.jpg", price: "$399", type: "bed", items: "1", color:"white and grey",stat:"bellow",status:"IN STOCK"},
    { title: "Chair salon", details: "this is chair for salone colored black  ", img: "chair$233.jpg", price: "$233", type: "chair", items: "6", color: "brown", stat: "bellow", status: "OUT OF STOCK" },
    { title: "brown desk", details: "this is brown desk with price $11,533  ", img: "deskbrown$11533.jpg", price: "$11,533", type: "desk", items: "1", color: "wood", stat: "above", status: "OUT OF STOCK" },
    { title: "Black chair", details: "this is chair colored black  ", img: "chairblack$277.jpg", price: "$277", type: "chair", items: "5", color: "black", stat: "bellow", status: "IN STOCK" },
    { title: "White chair", details: "this is chair colored white   ", img: "chairindoorwhite$302.jpg", price: "$302", type: "chair", items: "4", color: "white", stat: "bellow", status: "IN STOCK" },
    { title: "Wood table", details: "this is table with price $863  ", img: "chairtable$863.jpg", price: "$863", type: "table", items: "1", color: "brown", stat: "bellow", status: "OUT OF STOCK" },
    { title: "Brown table", details: " this is table colored brown with price $1,189 ", img: "chairtableindoor$1189.jpg", price: "$1,189", type: "table", items: "1", color: "wood", stat: "above", status: "OUT OF STOCK" },
    { title: "Chair", details: " no details ", img: "chair$369.jpg", price: "$369", type: "chair", items: "6", color: "brown", stat: "bellow",status:"IN STOCK" }, 
    { title: "Wood desk", details: "this is desk with price $13,500  ", img: "deskbrown$13500.jpg", price: "$13,500", type: "desk", items: "1", color: "wood", stat: "above", status: "IN STOCK" },
    { title: "black deskchair", details: " this is black desk chair colored black  ", img: "deskchairblack$168.jpg", price: "$168", type: "chairdesk", items: "1", color: "black", stat: "bellow", status: "IN STOCK" },
    { title: "deskchair black", details: "no details  ", img: "deskchairblack$326.jpg", price: "$326", type: "chairdesk", items: "1", color: "black", stat: "bellow", status: "OUT OF STOCK" },
    { title: "Wood desk", details: "this is wood desk with price $26,440  ", img: "deskdarkbrown$26440.jpg", price: "$26,440", type: "desk", items: "1", color: "brown", stat: "above", status: "IN STOCK" },
    { title: "Double bed", details: "this is double bed for kids  with price $538  ", img: "doublebed$538.jpg", price: "$538", type: "bed", items: "1", color: "none", stat: "bellow",status:"OUT OF STOCK" },
    { title: "Paint desk", details: "none ", img: "paintdesk$2077.jpg", price: "$2,077", type: "desk", items: "1", color: "black", stat: "above", status: "IN STOCK" },
    { title: "Small bed", details: "this is a small bed for girl kid colored green and pink ", img: "smallbed$310.jpg", price: "$310", type: "bed", items: "1", color: "green and pink", stat: "bellow", status: "IN STOCK" },
    { title: "grey sofa", details: "none ", img: "sofa$1130.jpg", price: "$1,130", type: "sofa", items: "1", color: "grey", stat: "above", status: "IN STOCK" },
    { title: "blue sofa", details: " none", img: "sofa$1289.jpg", price: "$1,289", type: "sofa", items: "1", color: "blue", stat: "above", status: "OUT OF STOCK" },
    { title: "ehite sofa ", details: " none", img: "sofa$1613.jpg", price: "$1,613", type: "sofa", items: "1", color: "white", stat: "above", status: "OUT OF STOCK" }
    
  ]
  getalltypes() {
    return this.indoorfurniture.length;
  }
  getbed() {
    return this.indoorfurniture.filter(indoorfurniture => indoorfurniture.type === 'bed').length;
  }
  gettable() {
    return this.indoorfurniture.filter(indoorfurniture => indoorfurniture.type === 'table').length;
  }
  getsofa() {
    return this.indoorfurniture.filter(indoorfurniture => indoorfurniture.type === 'sofa').length;
  } getchair() {
    return this.indoorfurniture.filter(indoorfurniture => indoorfurniture.type === 'chair').length;
  } getdesk() {
    return this.indoorfurniture.filter(indoorfurniture => indoorfurniture.type === 'desk').length;
  } getchairdesk() {
    return this.indoorfurniture.filter(indoorfurniture => indoorfurniture.type === 'chairdesk').length;
  }
  selection: string = 'all';
  onfilterradiobtnchange(data: string) {
    this.selection = data;
  }
  searchtext: string = '';
  onsearchentered(searchvalue: string) {
    this.searchtext = searchvalue;
  }
}
