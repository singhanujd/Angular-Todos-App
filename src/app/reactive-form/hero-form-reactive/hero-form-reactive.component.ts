import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { forbiddenNameValidator } from 'src/app/shared/forbidden-name.directive';
import { identityRevealedValidator } from 'src/app/shared/identity-revealed.directive';

@Component({
  selector: 'app-hero-form-reactive',
  templateUrl: './hero-form-reactive.component.html',
  styleUrls: ['./hero-form-reactive.component.css']
})
export class HeroFormReactiveComponent implements OnInit {
   heroForm = new FormGroup({
    'name': new FormControl(),
    'alterEgo': new FormControl(),
    'power': new FormControl()
  },{validators : identityRevealedValidator });
  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

  hero = new Hero(18, 'Dr IQ',this.powers[0],'Chuck Overstreet');

  submitted = false;

  constructor() { }

  ngOnInit() {
    this.heroForm = new FormGroup({
      'name' : new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i)
      ]),
      'alterEgo' : new FormControl(this.hero.alterEgo),
      'power' : new FormControl(this.hero.power, Validators.required)
    });
  }

  onSubmit(){
    this.submitted = true;
  }
   

  newHero() {
    this.hero = new Hero(42, '', '');
  }

  get name(){
    return this.heroForm.get('name');
  }

  get power(){
    return this.heroForm.get('power');
  }

}
