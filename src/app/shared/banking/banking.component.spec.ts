import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';
import { InvestmentsComponent } from '../investments/components/lists/investments.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingComponent , InvestmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) getSavings(): should have initial value of 300', () => {
    expect(component.getSavings).toEqual(300);
  });

  it('(U) getAccount(): should have initial value of 200', () => {
    expect(component.getAccount).toEqual(200);
  });

  it('(U) setWithdraw(): should transfer value from savings to account', () => {
    component.setWithdraw('300');
    expect(component.getSavings).toEqual(0);
    expect(component.getAccount).toEqual(500);
  });

  it('(U) setWithdraw(): should not transfer value from savings to account if = string || value > savings amount', () => {
    expect(component.setWithdraw('string')).not.toBeTruthy();
    expect(component.setWithdraw('1000')).not.toBeTruthy();

    expect(component.getSavings).toEqual(300);
    expect(component.getAccount).toEqual(200);
  });

  it('(U) setDeposit(): should transfer value from account to savings', () => {
    component.setDeposit('200');
    expect(component.getAccount).toEqual(0);
    expect(component.getSavings).toEqual(500);
  });

  it('(U) setDeposit(): should not transfer value from account to savings if = string || value > account amount', () => {
    expect(component.setDeposit('string')).not.toBeTruthy();
    expect(component.setDeposit('1000')).not.toBeTruthy();

    expect(component.getSavings).toEqual(300);
    expect(component.getAccount).toEqual(200);
  });

  // ========================================================================================================================= //

  it ('(I) setDeposit(): should transfer amount from account to savings', () => {
    let element = fixture.debugElement.nativeElement;

    element.querySelector('#input-deposit').value = '50';
    element.querySelector('#button-deposit').click();
    fixture.detectChanges();

    expect(element.querySelector('#get-savings').textContent).toEqual('350');
    expect(component.getAccount).toEqual(150);
  });

  it ('(I) setWithdraw(): should transfer amount from savings to account', () => {
    let element = fixture.debugElement.nativeElement;

    element.querySelector('#input-withdraw').value = '50';
    element.querySelector('#button-withdraw').click();
    fixture.detectChanges();

    expect(element.querySelector('#get-account').textContent).toEqual('250');
    expect(component.getSavings).toEqual(250);
  });
});
