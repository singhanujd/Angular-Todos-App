import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { TemplateDrivenFormComponent } from './template-driven-form.component';

describe('TemplateDrivenFormComponent', () => {
  let component: TemplateDrivenFormComponent;
  let fixture: ComponentFixture<TemplateDrivenFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should update the favorite color in the component', fakeAsync(() => {
    const input = fixture.nativeElement.querySelector('input');
    const event = new Event('input');
  
    input.value = 'Red';
    input.dispatchEvent(event);
  
    fixture.detectChanges();
  
    expect(component.favoriteColor).toEqual('Red');
  }));

  it('should update the favorite color on the input field', fakeAsync(() => {
    component.favoriteColor = 'Blue';
  
    fixture.detectChanges();
  
    tick();
  
    const input = fixture.nativeElement.querySelector('input');
  
    expect(input.value).toBe('Blue');
  }));


});
