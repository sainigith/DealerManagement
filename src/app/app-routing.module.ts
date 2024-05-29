import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealerTableComponent } from './dealer-table/dealer-table.component';
import { DealerFormComponent } from './dealer-form/dealer-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/dealers', pathMatch: 'full' },
  { path: 'dealers', component: DealerTableComponent },
  { path: 'add-dealer', component: DealerFormComponent },
  { path: 'edit-dealer/:id', component: DealerFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
