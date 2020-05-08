# Ng2-SmartTable 
# Getting Started
      Hello and Welcome! 

# First Step: Installation of ng2-smart-table by using npm command   
     npm install --save ng2-smart-table
     
# Second Step: import the ng2-smart-table directives into your app.module.ts. 
    import { Ng2SmartTableModule } from 'ng2-smart-table';
    Then register it by adding to the list of directives of your module: 
        
                  // ...

                  @NgModule({
                    imports: [
                      // ...

                      Ng2SmartTableModule,

                      // ...
                    ],
                    declarations: [ ... ]
                  })
                  // ...

# Third Step:Let's register settings property inside of the component where we want to have the table and configure some columns
                settings = {
                  columns: {
                    id: {
                      title: 'ID'
                    },
                    name: {
                      title: 'Full Name'
                    },
                    username: {
                      title: 'User Name'
                    },
                    email: {
                      title: 'Email'
                    }
                  }
                };
                
 # Fourth step:Finally let's put the ng2-smart-table component inside of the template: 

                // ...

                @Component({
                  template: `
                    <ng2-smart-table [settings]="settings"></ng2-smart-table>
                  `
                })
                // ...


   
    
  
    
