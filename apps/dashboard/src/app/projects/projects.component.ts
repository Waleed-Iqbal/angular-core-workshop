import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'libs/core-data/src/lib/projects/projects.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  selectedProject;
  projects;

  // doing dependency injection here (projectsService will automatically become a member of the class)
  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit() {}

  selectProject(project) {
    this.selectedProject = project;
  }

  getProjects() {
    this.projects = this.projectsService.all();
  }

  cancel() {
    this.selectProject(null);
  }
}
