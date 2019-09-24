import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  url:string="http://localhost:64502/api/user/";
  constructor(private http:HttpClient) {}
    getUserById(id:number){
      return this.http.get(this.url+id).subscribe();
    }

    getpdfByname(id){
      return this.http.get<User[]>(this.url+'getpdfByname/'+id);
    }
    getAllName(){
      return this.http.get<User[]>(this.url+'getAllNames');
    }
    getAllNotChecked(){
      return this.http.get<User[]>(this.url+'getAllNotChecked');
    }
    updateCheckedUser(id)
    {
      debugger;
      return this.http.get<boolean>(this.url+"updateCheckedUser/"+id);
    }
}
