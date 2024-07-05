// project-tile.component.ts
import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ProjectViewComponent } from '../project-view/project-view.component';

@Component({
  selector: 'app-project-tile',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.css']
})
export class ProjectTileComponent {
  safeURL!: SafeResourceUrl;
  @Input() projectName!: string;
  @Input() repositoryURL!: string;
  @Input() projectDescription!: string;
  @Input() projectFeatures!: string[];
  @Input() projectUsage!: string[];
  @Input() videoURL!: string;
  @Input() tags!: string[];
  @Input() titleTwo!: string;
  constructor(private dialog: MatDialog,  private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
  }

  openProjectView(): void {
    console.log("Called")
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      projectName: this.projectName,
      repositoryURL: this.repositoryURL,
      projectDescription: this.projectDescription,
      videoUrl: this.safeURL,
      projectFeatures: this.projectFeatures,
      projectUsage: this.projectUsage,
      titleTwo: this.titleTwo
    };
    dialogConfig.panelClass = 'custom-container';
    dialogConfig.backdropClass = 'custom-modal';
    const dialogRef = this.dialog.open(ProjectViewComponent, dialogConfig);
  }

  coreTag(tag: string): string {
    if (tag == "ASP.NET Core"){
      return  "ASP";
    }
    if (tag == "C#") {
      return "C_";
    }
    return tag;
  }

  getImagePath(index: number): string {
    let lowerCaseProjectName = this.projectName.toLowerCase().replaceAll(" ", "")
    let imagePath = "assets/images/" + lowerCaseProjectName + "/" + index + ".png"
    return imagePath
  }

  hasVideo(): boolean {
    return this.videoURL.length != 0
  }

  getThumbnailDescription(description: string): string {
    let firstSentence = description.split(".").at(0)!
    return firstSentence + ".";
  }
}
