import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DealerService } from '../services/dealer.service';
import { Dealer } from '../models/dealer';

@Component({
  selector: 'app-dealer-table',
  templateUrl: './dealer-table.component.html',
  styleUrls: ['./dealer-table.component.css']
})
export class DealerTableComponent implements OnInit {
  dealers: Dealer[] = [];

  constructor(private dealerService: DealerService, private router: Router) { }

  ngOnInit(): void {
    this.getDealers();
  }

  getDealers(): void {
    this.dealerService.getDealers().subscribe(dealers =>
    this.dealers = dealers);
    console.log(6789,this.dealers)
  }

  editDealer(id: number): void {
    this.router.navigate([`/edit-dealer/${id}`]);
  }

  deleteDealer(id: number | undefined): void {
    if (id === undefined) {
      return;
    }
    this.dealerService.deleteDealer(id).subscribe(() => this.getDealers());
  }
}
