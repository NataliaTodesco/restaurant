import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: FormGroup;
  habilitar: boolean = true;

  constructor(
    private fb: FormBuilder,
    private service: LoginService,
    private route: Router
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  Login() {
    this.habilitar = false;
    this.service
      .ObtenerToken(this.form.value.email, this.form.value.password)
      .subscribe((data) => {
        localStorage.setItem('user', JSON.stringify(data));
        this.route.navigate(['/']);
      }, error => {
        Swal.fire(
          'Datos Invalidos',
          'Compruebe los datos ingresados e intentelo de nuevo',
          'error'
        );
      });

    this.habilitar = true;
  }
}
