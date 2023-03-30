import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {
  UrlApi = environment.baseUrl;
  DataId:any;
  items:any;
  data:{}={};
  constructor(
    private http:HttpClient,
    private router:Router,

  ) { }
  deleteData(data:any){
    this.http.delete(`${this.UrlApi}producto?id=${data}`).subscribe(data=>{
      this.router.navigate([`/`])
    })
  }
  getData(title:any){
    this.DataId={title:title}
    
    this.http.get(`${this.UrlApi}producto?id=${this.DataId.title}`).subscribe(data => {
      this.items=data;  
      console.log(this.items);
      console.log(this.items.obj.length);
      
   });
  }
  cancelBusqueda(){
    this.router.navigate([`/`])
  }
  ngOnInit(): void {
  }

}
