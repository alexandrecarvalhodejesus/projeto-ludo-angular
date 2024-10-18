import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JogadorComponent } from "./jogador/jogador.component";
import { NgFor } from '@angular/common';
import { JogadorModel } from './jogador.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JogadorComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'primeiroprojeto';
//  jogadores: string[] = ['jogador1',  'jogador2', 'jogador3', 'jogador4'];
  jogadores: JogadorModel [] = []; 
  ngOnInit(): void
  {
   const jogador1 = new JogadorModel("blue",'TopoEsquerda');
   const jogador2 = new JogadorModel("red",'TopoDireita');
   const jogador3 = new JogadorModel("green",'BaseEsquerda');
   const jogador4 = new JogadorModel("yellow",'BaseDireita');
   
   this.jogadores.push(jogador1);
   this.jogadores.push(jogador2);
   this.jogadores.push(jogador3);
   this.jogadores.push(jogador4);

  }
}