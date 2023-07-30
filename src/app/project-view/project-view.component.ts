// project-view.component.ts
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; // Import MatDialogRef
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent{

  constructor(public dialogRef: MatDialogRef<ProjectViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private sanitizer: DomSanitizer
  ) { }

  get projectTitle(): string {
    return this.data.projectTitle;
  }

  get projectDescription(): string {
    return this.data.projectDescription;
  }

  get youtubeVideoUrl(): string {
    return this.data.youtubeVideoUrl;
  }

  get featuresList(): string[] {
    return this.data.featuresList.split('-');
  }

  get howToPlayList(): string[] {
    return this.data.howToPlayList.split('-');
  }

  get youtubeVideoId(): string {
    return this.data.youtubeVideoUrl;
  }

  get safeYoutubeVideoUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeVideoId);
  }
}
