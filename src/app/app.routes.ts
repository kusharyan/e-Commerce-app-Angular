import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BagComponent } from './bag/bag.component';
import { AccountComponent } from './account/account.component';

export const routes: Routes = [
  {path: '', redirectTo: 'Home', pathMatch:'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'Bag', component: BagComponent},
  {path: 'Account', component: AccountComponent}
];
