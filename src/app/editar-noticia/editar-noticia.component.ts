import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { NoticiasService } from '../noticias.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editar-noticia',
  imports: [ReactiveFormsModule, CommonModule,],
  templateUrl: './editar-noticia.component.html',
  styleUrl: './editar-noticia.component.css'
})
export class EditarNoticiaComponent implements OnInit {


  constructor(private noticia: NoticiasService, private router: ActivatedRoute) { }
  editarNoticia = new FormGroup({
    titulo: new FormControl(''),
    descricao: new FormControl(''),
  });

  mensagem: boolean = false;

  ngOnInit(): void {
    const id = this.router.snapshot.params['id']
    // console.log(id);
    this.noticia.getNoticiaById(id).subscribe((result:any) =>{
      console.log(result);
      this.editarNoticia = new FormGroup({
        titulo: new FormControl(result['titulo']),
        descricao: new FormControl(result['descricao']),
    });
  });
}

  EditarNoticia(){
    // console.log(this.editarNoticia.value);
    this.noticia.editarNoticiaData(  this.router.snapshot.params['id'], this.editarNoticia.value).subscribe((result) =>{
      // console.log(result);
    });
    this.mensagem = true
  }

  
  removeMensagem(){
    this.mensagem = false
  }


}

