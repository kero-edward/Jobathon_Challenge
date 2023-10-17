import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tasks?: any;

  constructor(private http: HttpClient, public service: DataService) {
    service.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  ngOnInit(): void {}

  taskTrackBy(index: number, task: any) {
    return task.id;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task: any) => task.id !== id);
  }
}
