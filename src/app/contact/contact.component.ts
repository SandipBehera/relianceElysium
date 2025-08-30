import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, UntypedFormBuilder, Validators } from '@angular/forms';
import { User } from '../user';
import { LeadServiceService } from '../lead-service.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  isMobile = window.innerWidth <= 768;

contactForm: UntypedFormBuilder | any;
  loading = false;
@Input() user:User={name:'',email:'',phone:'', projectName:'RelianceElysium'};
constructor(private formbuilder: UntypedFormBuilder,private leadsServ: LeadServiceService) {
  this.contactForm = this.formbuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      projectName: ['RelianceElysium' ]
    })
}

  submitted = false;



  invalid(ctrl: string) {
    const c = this.contactForm.get(ctrl);
    return !!c && (c.invalid && (c.touched || this.submitted));
  }
  hasError(ctrl: string, err: string) {
    const c = this.contactForm.get(ctrl);
    return !!c && c.hasError(err) && (c.touched || this.submitted);
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      console.log('Form is invalid', this.contactForm);
      this.contactForm.markAllAsTouched();
      return;
    }
    const data = {...this.contactForm.value,
      website_name:'https://relianceelysium.com/'
    };
    // TODO: send data to your API
    this.leadsServ.formSubmit(data).subscribe(
        response => {
          console.log('Form submitted successfully:', response);
          this.contactForm.reset();
          this.loading = false; // Hide spinner
          location.replace('/thankyou');
        },
        error => {
          console.error('Form submission failed:', error);
          alert('Something went wrong. Please try again.');
          this.loading = false; // Hide spinner
        }
      );
    // success UX here…
  }

  // (Optional) Prefill on init
  ngOnInit() {
    const saved = localStorage.getItem('contactPrefill');
    if (saved) this.contactForm.patchValue(JSON.parse(saved));
  }
}
