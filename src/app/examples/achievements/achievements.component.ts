import { Component, OnInit } from '@angular/core';

export interface Achievement {
  club_name: string;
  competition: string;
  event: string;
  position: string;
  border: string;
}

const ACHIEVEMENT_DATA: Achievement[] = [
  {club_name: 'Aeromodelling Club',             competition: 'Inter-IIT 2021',                                      event: 'DRDO DGRE Obstacle avoid drone',              position: '2nd',                border: 'false'},
  {club_name: '',                               competition: 'Inter-IIT 2019',                                      event: 'DRDO SASE',                                   position: '2nd',                border: 'true'},
  {club_name: 'Astronomy Club',                 competition: 'Inter-IIT 2021',                                      event: 'ISRO\'s web based visualisation',             position: '2nd',                border: 'true'},
  {club_name: 'Coding Club',                    competition: 'Inter-IIT 2021',                                      event: 'ISRO\'s web based visualisation',             position: '2nd',                border: 'false'},
  {club_name: '',                               competition: 'Inter-IIT 2021',                                      event: 'Saptang Lab\'s Network Security hackathon',   position: '1st',                border: 'false'},
  {club_name: '',                               competition: 'Smart India Hackathon',                               event: '',                                            position: '2 teams in finals',  border: 'true'},
  {club_name: 'Consulting and Analytics Club',  competition: 'Creative Shock',                                      event: '',                                            position: '33rd',               border: 'false'},
  {club_name: '',                               competition: 'IIM-A\'s Armageddon Consulting Strategy Competition', event: '',                                            position: '60th',               border: 'true'},
  {club_name: 'Finance and Economics Club',     competition: 'PM Live IIM-A',                                       event: '',                                            position: 'Finalists',          border: 'false'},
  {club_name: '',                               competition: 'MICA Impetus',                                        event: '',                                            position: 'Finalists',          border: 'true'},
  {club_name: 'IITG.ai',                        competition: 'Amazon ML Challenge',                                 event: '',                                            position: '2nd',                border: 'false'},
  {club_name: '',                               competition: 'Inter-IIT 2021',                                      event: 'Bridgei2i\'s Autonomous headline generator',  position: '1st',                border: 'false'},
  {club_name: '',                               competition: 'Inter-IIT 2021',                                      event: 'Bosch\'s Traffic sign recognition',           position: '2nd',                border: 'true'},
  {club_name: 'Robotics Club',                  competition: 'Inter-IIT 2021',                                      event: 'RuTAG-NE\'s Agrobot',                         position: '1st',                border: 'false'},
  {club_name: '',                               competition: 'International Rover Design Challenge',                event: '',                                            position: '16th',               border: 'false'},
  {club_name: '',                               competition: 'Inter-IIT 2019',                                      event: 'DIC\'s Terrace farming Bot',                  position: '2nd',                border: 'true'},
  {club_name: 'E-Cell',                         competition: 'Inter-IIT 2019',                                      event: 'Ashoka Tech for change',                      position: '1st',                border: 'true'},
  {club_name: 'Automobile Club',                competition: 'FSEV concept Challenge 2021',                         event: '',                                            position: '19th',               border: 'true'},
];

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  displayedColumns: string[] = ['club_name', 'competition', 'event', 'position'];
  dataSource = ACHIEVEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
