import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormSearchComponent } from './search/form-search/form-search.component';
import { OwnerComponent } from './owner/owner.component';
import { AppComponent } from './app.component';
import { FormOwnerComponent } from './form-owner/form-owner.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent
  // },
  {
    path: 'search',
    component: FormSearchComponent
  },
  {
    path: 'owners-add',
    component: FormOwnerComponent
  },
  {
    path: 'owner/:id',
    component: OwnerComponent
  },
  {
    path: 'owner',
    component: OwnerComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
