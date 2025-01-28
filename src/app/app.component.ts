import { Component } from '@angular/core';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [NavegacaoComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app_noticias';
}
