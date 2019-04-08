import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
    this.allTasks();
    
  }
  allTasks(){
    return this._http.get('/tasks');
  }
  getTask(id){
    console.log('got stuffs')
    return this._http.get('/tasks/'+id);
  }
  makeTask(task){
    return this._http.post('/tasks', task);
   }
  updateTask(id,task){
    return this._http.patch('/tasks/'+id,task);
  }
  deleteTask(id){
    console.log('got stuffs')
    return this._http.delete('/tasks/' +id);
  }
}

