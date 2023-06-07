import { Component } from '@angular/core';
import { ContaService } from '../services/conta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
  quantia:number = 0; 
  
 
 saldoAtual:number = 0; 

  constructor(private service: ContaService){
 
    this.saldoAtual = service.Saldo;
  }

  //este método deve aumentar o saldo atual em um valor X
  depositar() {
   this.service.depositar(this.quantia);
   this.saldoAtual = this.service.Saldo;
  }

  //este método deve diminuir o saldo atual em um valor X
  sacar() {
    this.service.sacar(this.quantia); 
    this.saldoAtual =this.service.Saldo;
  
  }
}
