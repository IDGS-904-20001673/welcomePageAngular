import { Routes } from '@angular/router';
//components
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CategoriesComponent } from './components/admin/categories/categories.component';


export const routes: Routes = [
  {path: '', redirectTo: 'login',pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'categories', component: CategoriesComponent},


];
