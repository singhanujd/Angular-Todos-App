import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { NameEditorComponent } from './reactive-form/name-editor/name-editor.component';
import { ProfileEditorComponent } from './reactive-form/profile-editor/profile-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    NameEditorComponent,
    ProfileEditorComponent
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
