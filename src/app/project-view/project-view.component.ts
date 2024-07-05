import { Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})

export class ProjectViewComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log("called from project")
  }

  getImagePath(index: number): string {
    let lowerCaseProjectName = this.data.projectName.toLowerCase().replaceAll(" ", "")
    let imagePath = "assets/images/" + lowerCaseProjectName + "/" + index + ".png"
    return imagePath
  }
}


