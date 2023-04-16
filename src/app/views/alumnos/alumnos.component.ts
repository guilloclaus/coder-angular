import { Component } from '@angular/core';
import { FormsModule ,ReactiveFormsModule , AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
} )

export class AlumnosComponent {

  emailControl = new FormControl('',[Validators.required,Validators.email,]);
  documentoControl = new FormControl('',[Validators.required,Validators.minLength(7),Validators.maxLength(10)]);
  ciudadControl = new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]);
  calleControl = new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]);
  numeroControl = new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(5)]);

  registerForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {

    this.registerForm = this.formBuilder.group({
      nombre: ['', [ Validators.required, Validators.minLength(3)] ],
      apellido: ['', [ Validators.required, Validators.minLength(3)] ],
      documento: this.documentoControl,
      tipoDocumento: ['', [ Validators.required] ],
      email: this.emailControl,
      localizacion: this.formBuilder.group({
        ciudad: this.ciudadControl,
        calle:this.calleControl,
        numero: this.numeroControl,
        piso: [''],
        provincia: [''],
        cp: [''],
      }),
    });
  }

  get nombreControl(): AbstractControl | null {
    return this.registerForm.get('nombre');
  }
  get apellidoControl(): AbstractControl | null {
    return this.registerForm.get('apellido');
  }
  get nombreControlIsInvalid(): boolean {
    return !!((this.nombreControl?.invalid) && this.nombreControl.touched);
  }
  get apellidoControlIsInvalid(): boolean {
    return !!((this.apellidoControl?.invalid) && this.apellidoControl.touched);
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    } else {
      alert('El formulario no es valido');
    }
  }

}
