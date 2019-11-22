import { Component, Directive, Input, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todos';

  @ViewChild("todoInput",{static: false}) todoInput : ElementRef;

  todos = [
    {title : "Read Angular", description : "from angular docs"},
    {title : "Drink water", description : "after every 1 hour"},
    {title : "Eat Fruits", description : "Atleast once in a day"}
    ];

    inputTodoHandler(event : Event){
      let todo = this.todoInput.nativeElement.value;
      if(todo.length > 0)
      this.todos.push({title : todo, description : "Default one"});
    }
}
