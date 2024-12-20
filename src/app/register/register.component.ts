import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
   selector: 'app-register',
   templateUrl: './register.component.html',
   styleUrls: ['./register.component.css']
})
export class RegisterComponent {
   registerForm: FormGroup;

   constructor(private fb: FormBuilder) {
       this.registerForm = this.fb.group({
           email: ['', [Validators.required, Validators.email]],
           password: ['', [Validators.required]],
           confirmPassword: ['', [Validators.required]]
       });
   }

   onSubmit() {
       if (this.registerForm.valid) {
           if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
               console.error('Les mots de passe ne correspondent pas');
               return;
           }
           console.log('Inscription:', this.registerForm.value);
           // Logique d'inscription ici
       }
   }
}
