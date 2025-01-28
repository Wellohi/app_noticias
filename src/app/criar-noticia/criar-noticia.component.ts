import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NoticiasService } from '../noticias.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-criar-noticia',
  imports: [ ReactiveFormsModule,CommonModule ],
  templateUrl: './criar-noticia.component.html',
  styleUrl: './criar-noticia.component.css'
})
export class CriarNoticiaComponent implements OnInit{

  constructor(private noticia:NoticiasService) {}
      criarNoticia = new FormGroup({
      titulo: new FormControl(''),
      descricao: new FormControl(''),
    });

    mensagem: boolean = false;

    ngOnInit(): void {

    }

    SalvarNoticia(){
      // console.log(this.criarNoticia.value);
      this.noticia.salvarNoticiaData(this.criarNoticia.value).subscribe((result) => {
        // console.log(result);
      this.mensagem = true;
      this.criarNoticia.reset({})
      
      });
    }
    removeMensagem(){
      this.mensagem = false
    }
  }


 
 