import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})
export class LoginComponent {
   loginForm: FormGroup;

   constructor(private fb: FormBuilder) {
       this.loginForm = this.fb.group({
           email: ['', [Validators.required, Validators.email]],
           password: ['', [Validators.required]]
       });
   }

   onSubmit() {
       if (this.loginForm.valid) {
           console.log('Login:', this.loginForm.value);
           // Logique de connexion ici
       }
   }
}
