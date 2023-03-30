import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  UrlApi = environment.baseUrl;
  DataId:any;
  items:any;
  data:{}={};
  constructor(
    private http:HttpClient,
    private router:Router,

  ) { }

  cancelModificacion(){
    this.router.navigate([`/`])
  }

  getData(title:any){
    this.DataId={title:title}
    
    this.http.get(`${this.UrlApi}producto?id=${this.DataId.title}`).subscribe(data => {
      this.items=data;  
      console.log(this.items);
      console.log(this.items.obj.length);
      
   });
  }

  modificarData(id:string,nombre:string,precio:string,valor:string,stock:string){
    // this.DataId={id:id}
    this.data={id:id,nombre:nombre,precio:precio,valor:valor,stock:stock}
    console.log(this.data,this.DataId);
    this.http.put(`${this.UrlApi}producto?id=${id}`,this.data).subscribe(data => {
      this.items=data;  
   });
    this.router.navigate([`/`]);
  }

  ngOnInit(): void {
  }

}
