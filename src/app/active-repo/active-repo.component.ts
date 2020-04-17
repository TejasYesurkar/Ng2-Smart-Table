import { Component, OnInit } from '@angular/core';
import { MyservicesService } from '../services/myservices.service';

@Component({
  selector: 'app-active-repo',
  templateUrl: './active-repo.component.html',
  styleUrls: ['./active-repo.component.css']
})
export class ActiveRepoComponent implements OnInit {

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
    this.myservices.ActiveReport().subscribe(
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
        field: 'RetailerName',
        search: query
      },
      {
        field: 'Address',
        search: query
      },{
        field: 'City',
        search: query
      },
      {
        field: 'LastOrderDate ',
        search: query
      },
      {
        field: 'OrderCount',
        search: query
      },
      {
        field: 'status',
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
      RetailerName: {
        title: 'RetailerName',
        filter: true
      },
      Address: {
        title: 'Address',
        filter: true
      },
      City: {
        title: 'City',
        filter: true
      },
      LastOrderDate: {
        title: 'LastOrderDate',
        filter: true
      },
      OrderCount: {
        title: 'OrderCount',
        filter: false
      },
      status: {
        title: 'status',
        filter: true
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

