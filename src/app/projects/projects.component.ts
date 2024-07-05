import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Project {
  projectName: string;
  repositoryURL: string;
  projectDescription: string;
  projectFeatures: string[];
  projectUsage: string[];
  videoURL: string;
  tags: string[];
  titleTwo: string;
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.http.get<Project[]>('assets/projects.json').subscribe(data => {
      this.projects = data;
    });
  }
}
