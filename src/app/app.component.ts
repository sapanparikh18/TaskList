import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title:string= 'Tasks';
   tasks:Array<string> = [];
   task:string='';
   doneTasks:Array<string>=[];
   addTask(){
      this.tasks.push(this.task);
      this.task = '';
   }

   remove(index:number){
     let removed = this.tasks.splice(index,1);
     this.doneTasks.push(removed[0]);
   }
}
