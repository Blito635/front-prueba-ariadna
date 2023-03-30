import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  UrlApi = environment.baseUrl;
  DataId:any;
  items:any;
  data:{}={};

  constructor(
    private http:HttpClient,
    private router:Router,

  ) { }

  cancelCreacion(){
    this.router.navigate([`/`])
  }

  crearData(id:string,fecha_creacion:any,nombre:string,categoria:string,precio:string,valor:string,stock:string){
    this.data={id:id,fecha_creacion:fecha_creacion,nombre:nombre,categoria:categoria,precio:precio,valor:valor,stock:stock}
    this.http.post(`${this.UrlApi}producto`,this.data).subscribe(data => {
      this.items=data;  
      console.log(this.items);
   
   });
    this.router.navigate([`/`]);
  }

  ngOnInit(): void {
  }

}
