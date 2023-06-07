import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  private saldo: number = 0;

saldoVer: number= 0; 
 
  constructor() {

   }
  
  
public depositar(quantia:number){
  this.saldo = this.saldo + quantia; 

}
public sacar(quantia:number){
  this.saldo = this.saldo - quantia;
}

get  Saldo():number {
  return this.saldo; 
  
}
  // Crie aqui um método para depositar um valor na conta



  // Crie aqui um método para sacar um valor da conta
}
