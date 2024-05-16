import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../../nav/nav.component';
import { environment } from '../../../../environments/environment.development';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [NavComponent, ReactiveFormsModule, HttpClientModule,CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})

export class CategoriesComponent {
  frmCategory: FormGroup;
  headers: HttpHeaders;
  categories: any;
  error: string | null = null;
  success: string | null = null;
  categorySelected: any;


  constructor(private http: HttpClient) {


      this.frmCategory = new FormGroup({
        name: new FormControl(),
      })


    this.headers = new HttpHeaders().set('Authorization', sessionStorage.getItem('token') + "");


    if (sessionStorage.getItem('success')) {
      this.success = sessionStorage.getItem('success');
      sessionStorage.removeItem('success');
    } else if (sessionStorage.getItem('error')) {
      this.error = sessionStorage.getItem('error');
      sessionStorage.removeItem('error');
    } else {

    }

  }

  async getAllCategories() {

    this.http.get(environment.api + 'categories/getAll', { headers: this.headers }).subscribe((res: any) => {
      if (res.success) {
        this.categories = res.data;
      } else {
        sessionStorage.setItem('error', 'Inicio de sesion incorrecto, intenta nuevamente');
        window.location.reload();
      }
    });
  }

  async insertCategories() {
    this.http.post(environment.api + 'categories/insert', this.frmCategory.value, { headers: this.headers }).subscribe((res: any) => {
      if (res.success) {
        sessionStorage.setItem('success', 'Se guardo correctamente');
        window.location.reload();
      } else {
        sessionStorage.setItem('error', 'No se guardo, intenta nuevamente');
        window.location.reload();
      }
    });
  }

  getCategory(categoryGet: any) {
    this.categorySelected = categoryGet;

  }

  async updateCategories() {
    this.http.put(environment.api + 'categories/update/'+this.categorySelected.idCategory, this.frmCategory.value, { headers: this.headers }).subscribe((res: any) => {
      if (res.success) {
        sessionStorage.setItem('success', 'Se actualizo correctamente');
        window.location.reload();
      } else {
        sessionStorage.setItem('error', 'No se actualizó, intenta nuevamente');
        window.location.reload();
      }
    });
  }


  async deleteCategory(category : any){
    this.http.delete(environment.api + 'categories/delete/'+category.idCategory, { headers: this.headers }).subscribe((res: any) => {
      if (res.success) {
        sessionStorage.setItem('success', 'Se Elimino correctamente');
        window.location.reload();
      } else {
        sessionStorage.setItem('error', 'No se elimino, intenta nuevamente');
        window.location.reload();
      }
    });
  }

  ngOnInit(): void {
    this.onPageLoad();
  }

  onPageLoad(): void {
    this.getAllCategories();
  }




}


