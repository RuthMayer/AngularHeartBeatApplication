import {Component, HostListener, ViewChild} from '@angular/core';
import {MdbTableDirective} from "angular-bootstrap-md";
import { User } from '../user';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.scss']
})
export class PriorityComponent  {

  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  allUser: User[] = [];
  
  headElements = ['', 'NAME', 'DATE', 'SCORE',''];

  searchText: string = '';
  previous: string;

  constructor(private service:ServiceService) { }

  ngOnInit() {
this.getUsers();

    this.mdbTable.setDataSource(this.allUser);
    this.allUser = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
  }
  
                     
  getUsers(){
    this.service.getAllNotChecked().subscribe(res => {
      this.allUser=res;  
       console.log(this.allUser[0].url);
    
       console.log(res);
     }, err => {
       console.log(err);
     })
    }
checked(url)
{
  window.open(url,"_blank");
}
update(id)
{
  this.service.updateCheckedUser(id).subscribe(res => {
    debugger;   
    console.log(res);
    this.getUsers();
     }, err => {
       console.log(err);
     })
}

}