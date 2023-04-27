import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { InvestmentsComponent } from './investments.component';

describe('InvestmentsComponent', () => {
  let component: InvestmentsComponent;
  let fixture: ComponentFixture<InvestmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentsComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) should list investments', () => {
    let investments = component.investments;

    expect(investments.length).toBe(4);
    expect(investments[0].name).toContain('Bradesco');
    expect(investments[3].name).toContain('Inter');
  });

  it('(I) should list investments', () => {
    let investments = fixture.debugElement.nativeElement.querySelectorAll('.list-items');

    expect(investments.length).toBe(4);
    expect(investments[0].textContent.trim()).toEqual('Bradesco | 100');
    expect(investments[3].textContent.trim()).toEqual('Inter | 100');
  });
});
