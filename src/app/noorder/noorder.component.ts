import { Component, OnInit } from '@angular/core';
import { MyservicesService } from '../services/myservices.service';

@Component({
  selector: 'app-noorder',
  templateUrl: './noorder.component.html',
  styleUrls: ['./noorder.component.css']
})
export class NoorderComponent implements OnInit {

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
    this.myservices.NorderReport().subscribe(
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
        field: 'salesman_name',
        search: query
      },
      {
        field: 'dist',
        search: query
      },{
        field: 'vendor',
        search: query
      },
      {
        field: 'entry_date',
        search: query
      },
      {
        field: 'entry_time',
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
      salesman_name: {
        title: 'salesman_name',
        filter: true
      },
      dist: {
        title: 'dist',
        filter: true
      },
      vendor: {
        title: 'vendor',
        filter: true
      },
      entry_date: {
        title: 'entry_date',
        filter: true
      },
      entry_time: {
        title: 'entry_time',
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

