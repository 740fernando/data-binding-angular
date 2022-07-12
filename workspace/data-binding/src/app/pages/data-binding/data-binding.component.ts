import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  name = 'Fernando';
  imgUrl = 'https://picsum.photos/id/237/200/300';
  imgDesc = 'Tá um cachorro velho hein';
  buttonText = 'Clique aqui';
  isRed = false;
  bgColor = 'green';
  fontSize= '50px';
  widthImg = 50;
  textInput = '';
  constructor() { }

  ngOnInit() {
  }

  retornaIdade(anoNascimento: number){
    return 2022-anoNascimento;
  }

  clicou() {
    this.name = 'Fernando Luiz'
    console.log('clicou aqui');
    this.isRed = true;
  }

  clicouNoFilho(text: any){
    console.log(text)
  }

  recebendoArgumento(value: any) {
    console.log('Argumento : ',value);
  }
}
