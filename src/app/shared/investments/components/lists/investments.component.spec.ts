import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { InvestmentsComponent } from './investments.component';
import { Investments } from '../../model/investments';
import { MOCK_LIST } from '../../services/list-investments.mock';
import { ListInvestmentsService } from '../../services/list-investments.service';
import { of } from 'rxjs';

describe('InvestmentsComponent', () => {
  let component: InvestmentsComponent;
  let fixture: ComponentFixture<InvestmentsComponent>;
  let service: ListInvestmentsService;

  const mockList: Array<Investments> = MOCK_LIST;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentsComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(()=> {
    fixture = TestBed.createComponent(InvestmentsComponent);
    service = TestBed.inject(ListInvestmentsService);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) should list investments', () => {
    spyOn(service, 'list').and.returnValue(of(mockList));

    component.ngOnInit();
    fixture.detectChanges();

    expect(service.list).toHaveBeenCalledWith();
    expect(component.investments.length).toBe(5);

    expect(component.investments[0].name).toEqual('Banco 1');
    expect(component.investments[0].value).toEqual(100);

    expect(component.investments[4].name).toEqual('Banco 5');
    expect(component.investments[4].value).toEqual(100);

    // let investments = component.investments;
    // expect(investments.length).toBe(4);
    // expect(investments[0].name).toContain('Bradesco');
    // expect(investments[3].name).toContain('Inter');
  });

  it('(I) should list investments', () => {
    spyOn(service, 'list').and.returnValue(of(mockList));

    component.ngOnInit();
    fixture.detectChanges();

    let investments = fixture.debugElement.nativeElement.querySelectorAll('.list-items');

    expect(investments.length).toBe(5);
    expect(investments[0].textContent.trim()).toEqual('Banco 1 | 100');
    expect(investments[4].textContent.trim()).toEqual('Banco 5 | 100');
  });
});
