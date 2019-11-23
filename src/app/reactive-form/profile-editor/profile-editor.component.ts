import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  @Output() formData: EventEmitter = new EventEmitter();

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.formData.emit(this.profileForm.value);
    console.warn(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  setProfile() {
    this.profileForm.setValue({
      firstName: 'Anuj',
      lastName: 'Singh',
      address: {
        street: '123 Drew',
        city: '',
        state: '',
        zip: ''
      }
    });
  }

}
