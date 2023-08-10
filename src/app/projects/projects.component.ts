// projects.component.ts
import { Component, OnInit } from '@angular/core';

interface Project {
  genre: string;
  title: string;
  imageUrl: string;
  description: string;
  titleOne: string;
  partOne: string;
  titleTwo: string;
  partTwo: string;
  videoId: string;
  imageOnePath: string;
  imageTwoPath: string;
  imageThreePath: string;
  hasVideo: boolean;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
    genre: 'Driving Game',
      title: 'Freeway Drive',
      imageUrl: 'assets/pictures/freewaydrive/FreewayDrive.png',
      description: "Freeway Drive is an exhilarating endless driving game where players take control of a constantly moving car on a busy freeway." + 
      " The car gradually gains speed as the game progresses, challenging players' reflexes and decision-making." +
      " The speedometer at the bottom left corner displays the car's current speed." + 
      " The objective is to avoid colliding with randomly generated cars on the freeway for as long as possible." + 
      " To navigate through the traffic, players can swipe left or right to change lanes.",
      titleOne: "Features",
      partOne: "Endless driving gameplay, offering a challenging and exciting experience.." + 
      "_Gradually increasing car speed, testing your reflexes and ability to navigate through traffic." + 
      "_Realistic freeway environment with randomly generated cars and smooth controls." +
      "_Dynamic lane-changing mechanics to avoid collisions and maneuver through traffic." +
      "_Pick up handling powerups to enhance your ability to change lanes quickly." +
      "_Collect ghost powerups to temporarily phase through other cars and avoid collisions." +
      "_Earn money pickups on the freeway and spend them on customizing your car's color." +
      "_Watch rewarded ad videos for a second chance if you crash during the game." +
      "_Strive for the highest score and compete with yourself to beat your previous records." +
      "_Keep track of your score, high score, and total money.",
      titleTwo: "How to Play",
      partTwo: "Swipe left or right to change lanes and avoid collisions with other cars." +
      "_Watch out for randomly generated cars changing lanes, indicated by their blinkers." +
      "_Collect handling powerups to reduce lane-changing time, aiding in avoiding collisions." +
      "_Pick up ghost powerups to temporarily become transparent and move through other cars to avoid collisions." +
      "_Customize your car's color using one of the six available color options, each costing 100$." +
      "_If you crash, you can watch a rewarded ad video to continue the game from where you left off." +
      "_Reach the highest score possible by surviving as long as you can, combining top speed and survival time.",
      videoId: "https://www.youtube.com/embed/u6CHQkcB8Vs",
      imageOnePath: "assets/pictures/freewaydrive/play.gif",
      imageTwoPath: "assets/pictures/freewaydrive/shop.gif", 
      imageThreePath: "assets/pictures/freewaydrive/crash.gif",
      hasVideo: true
    },
    {
      genre: 'Runner Game',
      title: 'Gun Run',
      imageUrl: 'assets/pictures/gunrun/GunRun.png',
      description: "Gun Run is a thrilling runner-style game where players control a moving gun on a dynamic platform." +
      " The objective is to shoot at different obstacles and collect ammo to advance through the levels." +
      " The game features a unique ammo system and rewards players with perks for their shooting skills." +
      " In addition, players can collect money to purchase permanent perks and upgrade their guns.",
      titleOne: "Features",
      partOne: "Players control a gun that moves horizontally on a moving platform." + 
      "_Two types of obstacles exist on the platform: Ammo and Walls." + 
      "_Ammo: Shoot at ammo to collect bullets, and when the chamber is full, move to the ammo wall to unload the collected ammo." +
      "_Ammo Wall: A wall that displays collected ammo and rewards players with EXP points when fully loaded." +
      "_Walls: Objects on the platform that reward players with random perks: FireRate, FireRange, and GunEXP." +
      "_Perk Points: Accumulate perk points by shooting at walls. These points increase the effect of the perk received." +
      "_End of Platform: Reach the end of the platform to encounter rows of barrels with money on top. Shoot and collect as much money as possible." +
      "_Gun Crash: If the gun collides with a high health barrel row, proceed to the next level.",
      titleTwo: "How to Play",
      partTwo: "Control the moving gun by swerving horizontally on the platform to avoid obstacles and collect ammo." +
      "_Shoot at Ammo to increase the bullets in the chamber. Once the chamber is full, proceed to the Ammo Wall to get your EXP points." +
      "_Shoot at Walls to accumulate perk points. The more you shoot, the stronger the perks you receive." +
      "_Reach the end of the platform to collect money from barrels. Shoot and collect as much money as possible." +
      "_Use the collected money at the end of each level to purchase permanent perks, upgrade guns, and improve gameplay abilities." +
      "_Watch rewarded ads to earn extra ingame currency for faster progress." +
      "_The game has an endless gameplay loop with increasing platform length and random obstacle generation.",
      videoId: "https://www.youtube.com/embed/jaOEYir18Jk",
      imageOnePath: "assets/pictures/gunrun/description.gif",
      imageTwoPath: "assets/pictures/gunrun/play.gif", 
      imageThreePath: "assets/pictures/gunrun/perks.png",
      hasVideo: true
    },
    {
      genre: 'RPG Game',
      title: "Druid's Tale",
      imageUrl: 'assets/pictures/druidstale/DruidsTale.png',
      description: "Druid's Tale is a 3D RPG platformer game where you embark on an exciting adventure as a powerful druid with the ability to shape-shift into a tiger and a bear." +
      "Each animal form offers unique abilities, strengths, and weaknesses, providing a diverse and engaging gameplay experience." +
      "Explore a beautifully decorated floating forest while facing challenging enemies. " + 
      "Overcome a variety of platform types, including moving platforms, falling platforms, and more, adding an extra layer of challenge to your journey.",
      titleOne: "Features",
      partOne: "Shape shift into a tiger and a bear, each with distinct abilities" +
      "_Tiger: Agile and fast, perfect for traversing tricky platforms and executing swift attacks." +
      "_Bear: Strong and sturdy, capable of dealing heavy damage and withstanding powerful blows." +
      "-Beautifully crafted floating forest environment." +
      "_Challenging enemies and boss battles that require you to master your animal forms and exploit their unique strengths." +
      "_Exciting platforming challenges, including intricate jumps and precise timing",
      titleTwo: "How to Play",
      partTwo: "Movement: W, A, S, D" +
      "_Jump: Spacebar" +
      "_Shape-shift: Q and E" +
      "_Special Abilies: 1 and 2" + 
      "_Human Special Ability One: Wrath. Damaging AoE spell that deals 30 damage, costs 70 mana and has cooldown of 7 seconds" +
      "_Human Special Ability Two: Regeneration. Healing over time spell that heals 50 damage, costs 50 mana and has cooldown of 9 seconds" +
      "_Tiger Special Ability One: Shred. Damaging over time spell that deals 15 damage, costs 20 energy and has cooldown of 2 seconds" +
      "_Tiger Special Ability Two: Ferocious Bite. Damaging spell that deals 30 damage, costs 30 energy and has cooldown of 4 seconds" +
      "_Bear Special Ability One: Swipe. Damaging spell that deals 15 damage, costs 20 rage and has cooldown of 2 seconds" +
      "_Bear Special Ability Two: Growl. Crowd Control spell that fears enemies for 5 seconds, costs 100 rage and has cooldown of 10 seconds",
      videoId: "https://www.youtube.com/embed/pJBIi-IJEdI",
      imageOnePath: "assets/pictures/druidstale/human.png",
      imageTwoPath: "assets/pictures/druidstale/enemy.png", 
      imageThreePath: "assets/pictures/druidstale/tiger.png",
      hasVideo: true
    },
    {
      genre: 'Golf Game',
      title: 'Putt Time',
      imageUrl: 'assets/pictures/putttime/putttime.png',
      description: "Putt Time is a 3D singleplayer golf game heavily inspired by Discord's Putt Party." +
      " This game tests your precision and skill in four different courses, each with its own unique layout and obstacles.",
      titleOne: "Features",
      partOne: "Shooting the Ball: To shoot the ball, aim using the mouse and drag it to set the power of your shot. " +
      "The longer you drag the mouse, the more power your shot will have. Pay attention to the direction, as it rotates faster with more power." +
      "_Obstacles: Each course is filled with various obstacles that will put your skills to the test." +
      "From moving or rotating platforms, you'll need to carefully time your shots and make calculations to overcome these challenges." + 
      "_Jump Mechanic: On certain holes, you'll encounter special platforms that can launch your ball into the air." + 
      "Utilize the jump mechanic by shooting towards the jump pads with the correct amount of power to pass the gaps in the courses." +
      "_Score: Your score is determined by the number of shots it takes you to complete each hole." +
      "Strive for a low score and aim to get a hole-in-one whenever possible.",
      titleTwo: "How to Play",
      partTwo: "Shoot the ball by clicking on the ball and dragging it." +
      "_Try to avoid obstacles when going towards the hole" + 
      "_Try to hit the hole in as less strokes as possible",
      videoId: "https://www.youtube.com/embed/7xJhA1cR8V0",
      imageOnePath: "assets/pictures/putttime/obstacle2.gif",
      imageTwoPath: "assets/pictures/putttime/jump.gif", 
      imageThreePath: "assets/pictures/putttime/aim.gif",
      hasVideo: false
    },
    {
      genre: 'Shooter Game',
      title: 'ZomCube',
      imageUrl: 'assets/pictures/zomcube/zomcube.png',
      description: "ZomCube is a first-person shooter game set in a small town infested with hordes of cube zombies." +
      " Your mission is to survive the zombie attacks, score enough points in the challenge area, and defeat the powerful boss." +
      " Arm yourself with various weapons, find ammunition and healthkits, and try to survive.",
      titleOne: "Features",
      partOne: "Fun first-person shooter action against relentless waves of zombies." +
      "_Explore a detailed and immersive small town environment, filled with abandoned buildings, and atmospheric lighting." +
      "_Weapons: Pistol, automatic rifle, and shotgun, each with unique strengths and weaknesses." +
      "_Magazines: Provides ammunition for your current weapon." +
      "_Healthkits: Restores your health." +
      "_Challenge area: Engage in a difficult fight against continuously spawning zombies." +
      " Collect for power-ups that provide temporary boosts in damage, speed, and health." +
      "_Boss battle: Defeat the formidable boss with two unique abilities - a powerful dash attack and poisonous slime balls." +
      " Avoid the poison before it stacks too high." +
      "_Progressive difficulty: Each time you defeat the boss, the game becomes harder." +
      " Zombies gain more health and deal more damage, while the boss becomes faster and gains more health." +
      "_Action bar and UI: The action bar at the bottom allows you to switch between weapons and healthkits quickly." +
      "_The UI displays your health and current ammo, keeping you informed and prepared for battle.",
      titleTwo: "How to Play",
      partTwo: "Explore the town and find your weapon of choice" +
      "_Find magazines and health packs to increase your chance of success." +
      "_Visit the enclosed challenge area in which you will face with wave of zombies until you win" + 
      "_In order to leave the challenge area victorious, you must score more than a 100 points." +
      "_Do not forget to pick power-ups in the challenge area to help your fight against the zombies" + 
      "_Go over to the boss area and face of with the Huge Poisonous Zombie!" + 
      "_Start the game again, but this time the zombies are much more deadly!",
      videoId: "https://www.youtube.com/embed/7xJhA1cR8V0",
      imageOnePath: "assets/pictures/zomcube/ge.png",
      imageTwoPath: "assets/pictures/zomcube/chl.png", 
      imageThreePath: "assets/pictures/zomcube/boss.png",
      hasVideo: false
    },
    {
      genre: 'Arcade Game',
      title: 'DINO',
      imageUrl: 'assets/pictures/DINO/DINO.png',
      description: "This is the Dino game from Google Chrome I developed using the C language." + 
      " The player controls a cute T-Rex dinosaur character, and the objective is to survive for as long as possible by jumping over cacti and dodging obstacles." +
      " As the game progresses, the speed gradually increases, making it more challenging and exciting.",
      titleOne: "Features",
      partOne: "Endless runner gameplay, offering a challenging and addictive experience." +
      "_Increasing difficulty over time, testing the player's reflexes and timing." +
      "_Pixel art-style graphics, giving the game a retro and nostalgic feel." +
      "_Light-hearted and fun gameplay suitable for quick entertainment during short breaks or downtime.",
      titleTwo: "How to Play",
      partTwo: 'To start the game, press the "Enter".' +
      '_The T-Rex dinosaur will start running automatically.' +
      '_To make the T-Rex jump, press the "Spacebar" key.' +
      '_The player must jump over cacti and other obstacles to avoid colliding with them.' +
      '_The game continues until the player collides with an obstacle, at which point the game ends.' +
      "_The player's score is displayed on the game over screen, indicating how far the T-Rex ran before colliding.",
      videoId: "https://www.youtube.com/embed/7xJhA1cR8V0",
      imageOnePath: "assets/pictures/DINO/cactus2.png",
      imageTwoPath: "assets/pictures/DINO/dino.gif", 
      imageThreePath: "assets/pictures/DINO/dino4.png",
      hasVideo: false
    },
    {
      genre: 'Blockchain',
      title: 'Decentralized Student Information System',
      imageUrl: 'assets/pictures/dsis/dsis.png',
      description: "The Decentralized Student Information System (DSIS) is a blockchain-based application for student information management." +
      " By leveraging the power of decentralized technology, DSIS ensures transparent and secure storage of student data, " +
      "while providing functionalities such as enrollment, term management, course evaluation, and attendance tracking." + 
      "\n DSIS consists of three main components: a server, a desktop application for administrators and staff, and a mobile application for students.",
      titleOne: "Components",
      partOne: "Server provides functionalities such as enrollment, term management, course evaluation, and attendance tracking." +
      " Built using Node.js, the server component acts as the bridge between the blockchain network and client applications, enabling seamless interactions with the decentralized student information system." +
      "_The desktop application provides a user-friendly interface for administrators and staff members to efficiently manage student information." +
      " Student information that will be written on the blockchain is sent through this application." +
      "_The mobile application is designed specifically for students, allowing them to access their personal information securely from their mobile devices." +
      " It offers features like grades, attendance tracking, and other relevant information.",
      titleTwo: "Students can: ",
      partTwo: 'Access a list of courses they are enrolled in and view detailed information about each course, including course name, instructor, credits, and evaluation.' +
      '_Check their grades and attendance records for each course, providing them with real-time updates on their academic performance.' +
      "_Log in and register using their email and password through Firebase's email/password authentication. This provides a secure and reliable authentication mechanism for accessing the application.",
      videoId: "https://www.youtube.com/embed/7xJhA1cR8V0",
      imageOnePath: "assets/pictures/dsis/home_screen.png",
      imageTwoPath: "assets/pictures/dsis/login_screen.png", 
      imageThreePath: "assets/pictures/dsis/grades.png",
      hasVideo: false
    },
    {
      genre: '2D Platformer Game',
      title: 'Dungeon Escape',
      imageUrl: 'assets/pictures/dungeonescape/dungeonescape.png',
      description: "This is the 2D platformer mobile game I developed following the Udemy Course" + 
      " The player must fight with different monsters and collect gems that can be spent on power-ups",
      titleOne: "Features",
      partOne: "Enjoy a classic 2D platformer gameplay with smooth controls." +
      "_Encounter three types of enemies, each with distinct behaviors and attack patterns." +
      "_Experience challenging and engaging combat with enemies to test your skills." +
      "_Collect gems to increase your score and earn currency for upgrades.",
      titleTwo: "How to Play",
      partTwo: 'Use the arrow keys (left and right) to move the knight horizontally.' +
      '_Press the "Spacebar" to make the knight jump.' +
      '_Use the mouse button to attack enemies with the sword.' +
      "_The player must defeat enemies and navigate through the dungeon's obstacles to progress." +
      "_The player's objective is to find the exit and escape the dungeon while defeating enemies along the way.",
      videoId: "https://www.youtube.com/embed/7xJhA1cR8V0",
      imageOnePath: "assets/pictures/dungeonescape/main.png",
      imageTwoPath: "assets/pictures/dungeonescape/shop.png", 
      imageThreePath: "assets/pictures/dungeonescape/spider.png",
      hasVideo: false
    },
    {
      genre: 'Arcade Game',
      title: 'Space Shooter',
      imageUrl: 'assets/pictures/spaceshooter/spaceshooter.png',
      description: "Star Shooter is a 2D arcade-like game where players control a spaceship in space, battling enemy ships while collecting power-ups.", 
      titleOne: "Features",
      partOne: "Avoid enemy ships while destroying them with lasers." +
      "_Collect power-ups for temporary advantages: speed boost, triple shot, and a protective barrier." +
      "_Engaging sound effects and music." +
      "_Increase your score by eliminating enemy ships (10 points per enemy).",
      titleTwo: "How to Play",
      partTwo: 'WASD controls for spaceship movement and spacebar to shoot lasers.',
      videoId: "https://www.youtube.com/embed/7xJhA1cR8V0",
      imageOnePath: "assets/pictures/spaceshooter/shield.png",
      imageTwoPath: "assets/pictures/spaceshooter/gameplay.gif", 
      imageThreePath: "assets/pictures/spaceshooter/main.png",
      hasVideo: false
    },

    // Add more projects as needed
  ];

  constructor() {}

  ngOnInit(): void {}
}
