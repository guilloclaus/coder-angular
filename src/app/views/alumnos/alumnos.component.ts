import { Component } from '@angular/core';
import { FormsModule ,ReactiveFormsModule , AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
} )

export class AlumnosComponent {


  emailControl = new FormControl(
    '',
    [
      Validators.required,
      Validators.email,
    ]
  );

  registerForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {

    this.registerForm = this.formBuilder.group({
      nombre: ['', [ Validators.required, Validators.minLength(3)] ],
      apellido: ['', [ Validators.required] ],
      email: this.emailControl,
      localizacion: this.formBuilder.group({
        ciudad: [''],
        direccion_1: [''],
        provincia: [''],
        cp: [''],
      }),
    });

    console.log(this.registerForm.get('nombre')?.value)
    console.log(this.emailControl.value);
  }

  get nombreControl(): AbstractControl | null {
    return this.registerForm.get('nombre');
  }


  get nombreControlIsInvalid(): boolean {
    return !!(this.nombreControl?.invalid && this.nombreControl.touched);
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    } else {
      alert('El formulario no es valido');
    }
  }

}
