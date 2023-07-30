// projects.component.ts
import { Component, OnInit } from '@angular/core';

interface Project {
  genre: string;
  title: string;
  imageUrl: string;
  description: string;
  features: string;
  howToPlay: string;
  videoId: string; // Add the videoId property
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      genre: 'Runner',
      title: 'Gun Run',
      imageUrl: 'path/to/project1-image.jpg',
      description: 'Description of the Gun Run project.',
      features: 'Feature 1-Feature 2-Feature 3',
      howToPlay: 'Step 1-Step 2-Step 3',
      videoId: "https://www.youtube.com/embed/7xJhA1cR8V0", // Replace 'tZBZVwGnXmI' with the actual YouTube video ID
    },
    {
     genre: 'RPG',
      title: "Druid's Tale",
      imageUrl: 'path/to/project1-image.jpg',
      description: 'Description of the Gun Run project.',
      features: 'Feature 1-Feature 2-Feature 3',
      howToPlay: 'Step 1-Step 2-Step 3',
      videoId: "https://www.youtube.com/embed/7xJhA1cR8V0", // Replace 'tZBZVwGnXmI' with the actual YouTube video ID
    },
    {
      genre: 'RPG',
       title: "Druid's Tale",
       imageUrl: 'path/to/project1-image.jpg',
       description: 'Description of the Gun Run project.',
       features: 'Feature 1-Feature 2-Feature 3',
       howToPlay: 'Step 1-Step 2-Step 3',
       videoId: "https://www.youtube.com/embed/7xJhA1cR8V0", // Replace 'tZBZVwGnXmI' with the actual YouTube video ID
     },
     {
      genre: 'RPG',
       title: "Druid's Tale",
       imageUrl: 'path/to/project1-image.jpg',
       description: 'Description of the Gun Run project.',
       features: 'Feature 1-Feature 2-Feature 3',
       howToPlay: 'Step 1-Step 2-Step 3',
       videoId: "https://www.youtube.com/embed/7xJhA1cR8V0", // Replace 'tZBZVwGnXmI' with the actual YouTube video ID
     },
    // Add more projects as needed
  ];

  constructor() {}

  ngOnInit(): void {}
}
