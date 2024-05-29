import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DealerService } from '../services/dealer.service';
import { Dealer } from '../models/dealer';

@Component({
  selector: 'app-dealer-form',
  templateUrl: './dealer-form.component.html',
  styleUrls: ['./dealer-form.component.css']
})
export class DealerFormComponent implements OnInit {
  dealerForm: FormGroup;
  isEditMode = false;
  dealerId!: number;

  constructor(
    private fb: FormBuilder,
    private dealerService: DealerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.dealerForm = this.fb.group({
      name: ['',],
      company_name: [''],
      mobile_no: ['', [ Validators.pattern(/^[0-9]{10}$/)]],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.dealerId = +params['id'];
        this.dealerService.getDealer(this.dealerId).subscribe(dealer => this.dealerForm.patchValue(dealer));
      }
    });
  }

  onSubmit(): void {
    if (this.dealerForm.invalid) {
      return;
    }
  
    const dealer: Dealer = this.dealerForm.value;
    
    if (this.isEditMode) {
      if (this.dealerId) {
        dealer.id = this.dealerId;
        this.dealerService.updateDealer(dealer).subscribe(() => this.router.navigate(['/dealers']));
      } else {
      }
    } else {
      this.dealerService.addDealer(dealer).subscribe(() => this.router.navigate(['/dealers']));
    }
  }
  
}
