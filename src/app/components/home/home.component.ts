import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tasks?: any;
  tasksNumber?: number;
  currentTask!: any;

  constructor(private http: HttpClient, public service: DataService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  taskTrackBy(index: number, task: any) {
    return task.id;
  }

  getTasks() {
    this.service.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task: any) => task.id !== id);
  }

  taskForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    status: new FormControl(null, Validators.required),
  });

  get taskData() {
    return this.taskForm.controls;
  }

  get_and_save_data() {
    console.log('Task Name: ', this.taskForm.controls['name'].value);
    console.log(
      'Task Description: ',
      this.taskForm.controls['description'].value
    );
    console.log('Status: ', this.taskForm.controls['status'].value);

    this.tasksNumber = this.tasks.length;
    const newTask = {
      id: this.tasks.length + 1,
      name: this.taskForm.controls['name'].value,
      description: this.taskForm.controls['description'].value,
      status: this.taskForm.controls['status'].value,
    };

    this.tasks.push(newTask);
    console.log(this.tasks);
  }

  getTaskData(id: number ) {
    this.currentTask = this.tasks.filter((task: any) => task.id === id);
    console.log('current tasks: ', this.currentTask);

    
    this.taskForm.controls['name'].setValue(this.currentTask[0].name);
    this.taskForm.controls['description'].setValue(this.currentTask[0].description);
    this.taskForm.controls['status'].setValue(this.currentTask[0].status);
  }

  get_and_update_data() {
    console.log('Task Name: ', this.taskForm.controls['name'].value);
    console.log(
      'Task Description: ',
      this.taskForm.controls['description'].value
    );
    console.log('Status: ', this.taskForm.controls['status'].value);

    const tasksID = this.tasks.length;
    const newTask = {
      id: this.tasks.length + 1,
      name: this.taskForm.controls['name'].value,
      description: this.taskForm.controls['description'].value,
      status: this.taskForm.controls['status'].value,
    };

    this.tasks.push(newTask);
    console.log(this.tasks);
  }
}
