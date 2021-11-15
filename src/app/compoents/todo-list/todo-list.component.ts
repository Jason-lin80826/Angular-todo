import { Component, OnInit } from '@angular/core';

interface TodoThing { text: string ;done: boolean }
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }
  public todo:string = '';
  public todos:Array<TodoThing>= [];
  addTodo() {
    if (!this.todo.trim()) { return; }    
    this.todos.push({    
      text: this.todo,  
      done: false       
    });
    this.todo = '';    
  }
  toggleCompletion(item:TodoThing): void {
    this.todos.forEach((thing: TodoThing) => {
      if(thing !== item) return
      thing.done = !thing.done
    });
  }
  removeTodo(item:TodoThing): void {
    this.todos.splice(this.todos.indexOf(item), 1);
  }
}
