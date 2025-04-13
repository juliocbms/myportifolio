import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-forms-contact',
  imports: [CommonModule,
    ReactiveFormsModule],
  templateUrl: './forms-contact.component.html',
  styleUrl: './forms-contact.component.scss'
})
export class FormsContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
    emailjs.init('hnpIlH5tbJTh_L2Zu');
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const templateParams = {
        from_name: this.contactForm.value.name,
        from_email: this.contactForm.value.email,
        message: this.contactForm.value.message
      };

      emailjs.send('service_7vlxm5n', 'template_q025w39', templateParams, 'hnpIlH5tbJTh_L2Zu')
        .then((result: EmailJSResponseStatus) => {
          console.log('Email enviado com sucesso!', result.text);
          this.contactForm.reset();
        }, (error) => {
          console.error('Erro ao enviar email:', error.text);
        });
    }}

}
