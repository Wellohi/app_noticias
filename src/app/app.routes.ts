import { Routes } from '@angular/router';
import { ListarNoticiaComponent } from './listar-noticia/listar-noticia.component';
import { EditarNoticiaComponent } from './editar-noticia/editar-noticia.component';
import { CriarNoticiaComponent } from './criar-noticia/criar-noticia.component';

export const routes: Routes = [
    {path:'', redirectTo: 'listar-noticia', pathMatch:'full'},
    {path:'listar-noticia', component:ListarNoticiaComponent},
    {path:'editar-noticia/:id', component:EditarNoticiaComponent},
    {path:'criar-noticia', component:CriarNoticiaComponent},
]
    

