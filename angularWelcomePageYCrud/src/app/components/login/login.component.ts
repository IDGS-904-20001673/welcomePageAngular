import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: []
})

export class LoginComponent {
  form: FormGroup;
  error : string | null = null;


  constructor( private http: HttpClient, private route : Router) {
    this.form = new FormGroup({
      user: new FormControl(),
      password: new FormControl(),
    })

    if (sessionStorage.getItem('error')) {
      this.error = sessionStorage.getItem('error');
      sessionStorage.removeItem('error');
    }
  }

  async onSubmit() {
    this.http.post(environment.api + 'login/authenticate',this.form.value).subscribe((res:any)=>{
      if (res.success) {
        sessionStorage.setItem('token', res.data.token);
        this.route.navigateByUrl("/categories");
      }else{
        sessionStorage.setItem('error', 'Inicio de sesion incorrecto, intenta nuevamente');
        window.location.reload();
      }
    })
  }

}


