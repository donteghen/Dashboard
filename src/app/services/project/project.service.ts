import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from 'src/app/models/project';
import { projectData } from '../mock';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects : Project[] = projectData;
  constructor() { }
  getProjects() : Observable<Project[]>{
    return of(this.projects)
  }
}
