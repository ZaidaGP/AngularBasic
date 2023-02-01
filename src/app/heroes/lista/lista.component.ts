import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  heroes:string[] = ['Spiderman','Iroman','Hulk','Capitana Marvel'];
  heroeBorrado:string = '';
  borrarHeroe(){
    
    const heroeDelete = this.heroes.pop() || '';
    this.heroeBorrado = heroeDelete;
    

  }
}
