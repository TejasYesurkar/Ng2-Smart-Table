import { Component, OnInit } from '@angular/core';
import { MyservicesService } from '../services/myservices.service';

@Component({
  selector: 'app-retailerlist',
  templateUrl: './retailerlist.component.html',
  styleUrls: ['./retailerlist.component.css']
})
export class RetailerlistComponent implements OnInit {

  data:any;
  source: any; // add a property to the component
  ngOnInit() {
    this.NOrder();  
  }

 NOrder(){
 
}
// data = [
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz"
//   },
//   {
//     id: 2,
//     name: "Ervin Howell",
//     username: "Antonette",
//     email: "Shanna@melissa.tv"
//   },
  
//   // ... list of items
  
//   {
//     id: 11,
//     name: "Nicholas DuBuque",
//     username: "Nicholas.Stanton",
//     email: "Rey.Padberg@rosamond.biz"
//   } 
// ];
  constructor( private myservices:MyservicesService) {
    this.myservices.RetDetailsReport().subscribe(
      result=>{
        this.source = result;
        console.log(result)
      }
    )
  }

  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'Retailer',
        search: query
      },
      {
        field: 'Address',
        search: query
      },{
        field: 'city',
        search: query
      },
      {
        field: 'PhoneNo',
        search: query
      },
      {
        field: 'mobile',
        search: query
      },
      {
        field: 'BeatName',
        search: query
      },
      {
        field: 'Area',
        search: query
      },
      {
        field: 'SalesmanName',
        search: query
      }
    ], false); 
    // second parameter specifying whether to perform 'AND' or 'OR' search 
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }
  settings = {
    selectMode: 'multi', 
    columns: {
      id: {
        title: 'ID',
        filter: false,
        
      },
      Retailer: {
        title: 'Retailer',
        filter: true
      },
      Address: {
        title: 'Address',
        filter: true
      },
      city: {
        title: 'city',
        filter: true
      },
      PhoneNo: {
        title: 'PhoneNo',
        filter: true
      },
      entry_time: {
        title: 'mobile',
        filter: false
      },
      BeatName: {
        title: 'BeatName',
        filter: false
      },
      Area: {
        title: 'Area',
        filter: false
      },
      SalesmanName: {
        title: 'SalesmanName',
        filter: false
      }
    },
    actions: {
      add: false,
      edit: false,
      delete:false,
      },
    sort: true,
    attr: {
      class: 'table table-bordered'
    }
    
  };  

}

