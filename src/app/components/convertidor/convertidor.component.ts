import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {

  cantidad=0;
  total= 0;
  tengo = 'Metros';
  quiero = 'Pulgadas';
  
  unidadMedidaList : string[] = ['Metros','Pulgadas','Pies'];
  
  convertir(){

    switch(this.tengo){
      case 'Metros':
      if(this.quiero == this.tengo)
        this.total = this.cantidad;
      if(this.quiero == 'Pulgadas')
        this.total = this.cantidad * 39.3701;
          if(this.quiero == 'Pies')
        this.total = this.cantidad * 3.28084;
      break;
          case 'Pulgadas':
      if(this.quiero == this.tengo)
        this.total = this.cantidad;
      if(this.quiero == 'Metros')
        this.total = this.cantidad * 0.0254;
          if(this.quiero == 'Pies')
        this.total = this.cantidad * 0.0833333;
      break;
          case 'Pies':
      if(this.quiero == this.tengo)
        this.total = this.cantidad;
      if(this.quiero == 'Metros')
        this.total = this.cantidad * 0.3048;
          if(this.quiero == 'Pulgadas')
        this.total = this.cantidad * 12;
      break;
    }

  }
  constructor() { }

  ngOnInit(): void {
  }

}
