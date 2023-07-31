// project-tile.component.ts
import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProjectViewComponent } from '../project-view/project-view.component';

@Component({
  selector: 'app-project-tile',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.css']
})
export class ProjectTileComponent {
  @Input() genre!: string;
  @Input() title!: string;
  @Input() imageUrl!: string;
  @Input() description!: string;
  @Input() features!: string;
  @Input() howToPlay!: string;
  @Input() videoId!: string;

  constructor(private dialog: MatDialog) {}

  openProjectView(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      projectTitle: this.title,
      projectDescription: this.description,
      youtubeVideoUrl: this.videoId,
      featuresList: this.features,
      howToPlayList: this.howToPlay,
    };
    dialogConfig.panelClass = 'custom-container';
    dialogConfig.backdropClass = 'custom-modal'; // Apply the blur effect

    const dialogRef = this.dialog.open(ProjectViewComponent, dialogConfig);
  }
}
