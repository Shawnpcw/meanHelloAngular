
import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Implement OnInit.
export class AppComponent implements OnInit {
  tasks: any;
  newTask = {
    title: "",
    description: ""
  }
  updateTask= {
    title: "",
    description: ""
  }
  currentTaskid: any;
  single: boolean = false
    constructor(private _httpService: HttpService){}
    // ngOnInit will run when the component is initialized, after the constructor method.
    ngOnInit(){
      this.getTasksFromService();
    }
    getTasksFromService(){
      let observable = this._httpService.allTasks();
        observable.subscribe(data => this.tasks = data);
        this.single = false
        
    }
    getTaskFromService(id){
      this.currentTaskid = id;
      let observable = this._httpService.getTask(id);
        observable.subscribe(data=>{
          this.tasks = [data];
          this.updateTask.title = data['title']
          this.updateTask.description = data['description']
        });
        this.single = true
      
    }
    removeTaskFromService(id){
      let observable = this._httpService.deleteTask(id);
        observable.subscribe(data=>this.tasks = [data]);
        this.getTasksFromService()
    }
    createTaskFromService(){
      let observable = this._httpService.makeTask(this.newTask);
      observable.subscribe();
      this.getTasksFromService()
      this.updateTask = {
        title: "",
        description: ""
      }
    }
    updateTaskFromService(){

      let observable = this._httpService.updateTask(this.currentTaskid,this.updateTask);
        observable.subscribe();
    
        this.getTasksFromService()
        this.updateTask = {
          title: "",
          description: ""
        }
    }
    
}