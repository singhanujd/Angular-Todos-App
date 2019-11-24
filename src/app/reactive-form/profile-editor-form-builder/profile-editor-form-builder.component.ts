import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor-form-builder',
  templateUrl: './profile-editor-form-builder.component.html',
  styleUrls: ['./profile-editor-form-builder.component.css']
})
export class ProfileEditorFormBuilderComponent implements OnInit {

  profileForm = this.fb.group({
    firstName : ['', Validators.required],
    lastName : [''],
    address : this.fb.group({
      street : [''],
      city : [''],
      state : [''],
      zip : ['']
    }),
    aliases : this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(private fb : FormBuilder) { }

  get aliases(){
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias(){
    this.aliases.push(this.fb.control(''));
  }

  ngOnInit() {
  }

  onSubmit() {
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
