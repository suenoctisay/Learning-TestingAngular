import { Component } from '@angular/core';

//Model
import { Investments } from '../../model/investments';

//Interface
import { ListInvestmentsService } from './../../services/list-investments.service';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent {
  public investments!: Array<Investments>;


  constructor(private listInvestmentsService: ListInvestmentsService){}

  ngOnInit(): void{
    this.listInvestmentsService.list().subscribe( (res) => (this.investments = res));
  }
}
