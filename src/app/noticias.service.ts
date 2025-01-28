import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  url='http://localhost:3000/noticias';

  constructor(private http:HttpClient) { }
    getAllNoticias(){
      return this.http.get( this.url );
    }

    salvarNoticiaData(data:any){
      console.log(data);
      return this.http.post(this.url, data);
    }

    deletarNoticia(id:any){
      return this.http.delete(`${this.url}/${id}`);
    }

    getNoticiaById(id:number){
      return this.http.get(`${this.url}/${id}`)
    }

    editarNoticiaData(id:number, data:any){
      return this.http.put(`${this.url}/${id}`, data)

    }
}
