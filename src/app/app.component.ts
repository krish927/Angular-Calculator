import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';
  display = '0';
  firstOperand: any = null;
  operator:any = null;
  waitForSecondNumber: boolean = false;

  getNumber(number: any){
    if(this.waitForSecondNumber){
      this.display = number;
      this.waitForSecondNumber = false;
    }
    else{     
      this.display ==='0'? this.display = number: this.display += number;
    }
  }

  getDecimal(){
    if(!this.display.includes('.')){
      this.display += '.';
      }
  }

  doCalculations(op: any, secondOp: any){
    switch (op) {
      case '+':
        return this.firstOperand += secondOp;
      case '-':
        return this.firstOperand -= secondOp;
      case 'x':
        return this.firstOperand *= secondOp;
      case '÷':
        return this.firstOperand /= secondOp;
      case '=':
        return this.firstOperand = secondOp;
    }
  }

  getOperation(operation: string){
      console.log(operation)
      if (this.firstOperand === null){
        this.firstOperand = Number(this.display);
      }
      else if(this.operator){
        const result=this. doCalculations(this.operator, Number(this.display))
        this.display= String(result);
        this.firstOperand=result;
      }
      this.operator = operation;
      this.waitForSecondNumber= true;
      console.log(this.firstOperand);
  }



  clear(){
    this.display = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }

}
