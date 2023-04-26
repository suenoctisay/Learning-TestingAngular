import { ListInvestmentsService } from './../../services/list-investments.service';
import { Component } from '@angular/core';

import { Investments } from '../../model/investments';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent {
  public investments: Array<Investments> = [
    {
      name: "Bradesco",
      value: 100
    },
    {
      name: "BB",
      value: 100
    },
    {
      name: "Nubank",
      value: 100
    },
    {
      name: "Inter",
      value: 100
    },
  ];

  constructor(private listInvestmentsService: ListInvestmentsService){}

  ngOnInit(): void{
    this.listInvestmentsService.list().subscribe( res => console.log(res));
  }
}
