import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  UrlApi = environment.baseUrl;
  DataId:any;
  items:any;
  data:{}={};
  constructor(
    private http:HttpClient,
    private router:Router,
  ) { }
  getData(title:any,buscar:any){
    this.DataId={title:title}
    
    this.http.get(`${this.UrlApi}producto?${buscar}=${this.DataId.title}`).subscribe(data => {
      this.items=data;  
      console.log(this.items);
      console.log(this.items.obj.length);
      
   });
  }

  ngOnInit(): void {
  }

}
