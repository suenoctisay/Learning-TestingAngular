import { Component } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.css']
})
export class BankingComponent {
  private savings: number = 300;
  private account: number = 200;

  get getSavings(): number{
    return this.savings;
  }

  get getAccount(): number{
    return this.account;
  }

  public setWithdraw(value:string): number | undefined{
    const withdraw = Number(value);

    if(isNaN(withdraw) || this.savings < withdraw){
      return;
    }

    this.savings -= withdraw;
    return (this.account += withdraw);
  }

  public setDeposit(value:string): number | undefined{
    const deposit = Number(value);

    if(isNaN(deposit) || this.account < deposit){
      return;
    }

    this.account -= deposit;
    return (this.savings += deposit);
  }
}
