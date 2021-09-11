import { Component, OnInit } from '@angular/core';
import {Label, SingleDataSet} from 'ng2-charts';
import {ChartType} from 'chart.js';

@Component({
  selector: 'app-graduating-students',
  templateUrl: './graduating-students.component.html',
  styleUrls: ['./graduating-students.component.css']
})
export class GraduatingStudentsComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['Biosciences and Bioengineering', 'Chemical Engineering', 'Chemical Science and Technology',
    'Civil Engineering', 'Computer Science and Engineering', 'Design', 'Electrical and Electronics Engineering',
    'Electronics and Communication Engineering', 'Engineering Physics', 'Mathematics and Computing', 'Mechanical Engineering'];
  public demoDoughnutChartData: SingleDataSet = [43, 66, 44, 81, 98, 44, 53, 90, 44, 63, 94];
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}
