import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NoticiasService } from '../noticias.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-listar-noticia',
  imports: [CommonModule, RouterLink],
  templateUrl: './listar-noticia.component.html',
  styleUrl: './listar-noticia.component.css'
})
export class ListarNoticiaComponent implements OnInit {

  constructor(private noticia: NoticiasService, private changeDetector: ChangeDetectorRef) {}

  noticiaData: any = [];

  ngOnInit(): void {
    this.noticia.getAllNoticias().subscribe((allData) => {
      console.log(allData);
      this.noticiaData = allData;
      // Call change detection to update the view
      this.changeDetector.detectChanges();
    });;   
    }
    deletarNoticia(noticia_id:any){
      // console.log(noticia_id);
      this.noticia.deletarNoticia(noticia_id).subscribe((result) => {
        // console.log(result);
        this.ngOnInit();
      })

  }
}
