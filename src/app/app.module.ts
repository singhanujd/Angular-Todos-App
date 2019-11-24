import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { NameEditorComponent } from './reactive-form/name-editor/name-editor.component';
import { ProfileEditorComponent } from './reactive-form/profile-editor/profile-editor.component';
import { ProfileEditorFormBuilderComponent } from './reactive-form/profile-editor-form-builder/profile-editor-form-builder.component';
import { HeroFormTemplateComponent } from './template-driven-form/hero-form-template/hero-form-template.component';
import { HeroFormReactiveComponent } from './reactive-form/hero-form-reactive/hero-form-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    ProfileEditorFormBuilderComponent,
    HeroFormTemplateComponent,
    HeroFormReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
