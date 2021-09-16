import { Component, OnInit } from '@angular/core';
import {Label, PluginServiceGlobalRegistrationAndOptions, SingleDataSet} from 'ng2-charts';
import {ChartType} from 'chart.js';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-graduating-students',
  templateUrl: './graduating-students.component.html',
  styleUrls: ['./graduating-students.component.css']
})
export class GraduatingStudentsComponent implements OnInit {

  options: any = {
    legend: { position: 'right' }
  }

  public doughnutChartLabels: Label[] = ['Biosciences and Bioengineering', 'Chemical Engineering', 'Chemical Science and Technology',
    'Civil Engineering', 'Computer Science and Engineering', 'Design', 'Electrical and Electronics Engineering',
    'Electronics and Communication Engineering', 'Engineering Physics', 'Mathematics and Computing', 'Mechanical Engineering'];
  public demoDoughnutChartData: SingleDataSet = [43, 66, 44, 81, 98, 44, 53, 90, 44, 63, 94];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartPlugins: PluginServiceGlobalRegistrationAndOptions[] = [{
    beforeDraw(chart: Chart) {
      const ctx = chart.ctx;
      const txt = 'B.Tech / B.Des';

      // Get options from the center object in options
      const sidePadding = 70;
      const sidePaddingCalculated = (sidePadding / 100) * (chart['innerRadius'] * 2)

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
      const centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);

      // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
      const stringWidth = ctx.measureText(txt).width;
      const elementWidth = (chart['innerRadius'] * 2) - sidePaddingCalculated;

      // Find out how much the font can grow in width.
      const widthRatio = elementWidth / stringWidth;
      const newFontSize = Math.floor(30 * widthRatio);
      const elementHeight = (chart['innerRadius'] * 2);

      // Pick a new font size so it will not be larger than the height of label.
      const fontSizeToUse = Math.min(newFontSize, elementHeight);

      ctx.font = fontSizeToUse + 'px Arial';

      // Draw text in center
      ctx.fillText(txt, centerX, centerY);
    }
  }];

  public PGdoughnutChartLabels: Label[] = ['Biosciences and Bioengineering', 'Chemical Engineering', 'Civil Engineering',
    'Computer Science and Engineering', 'Data Science', 'Design', 'Electrical and Electronics Engineering',
    'E-Mobility', 'Energy', 'Food Science and Technology', 'Mechanical Engineering', 'Rural Technology'];
  public PGdemoDoughnutChartData: SingleDataSet = [51, 60, 123, 66, 20, 31, 90, 10, 15, 4, 122, 11];
  public PGdoughnutChartType: ChartType = 'doughnut';
  public PGdoughnutChartPlugins: PluginServiceGlobalRegistrationAndOptions[] = [{
    beforeDraw(chart: Chart) {
      const ctx = chart.ctx;
      const txt = 'M.Tech / M.Des / MS(R)';

      // Get options from the center object in options
      const sidePadding = 60;
      const sidePaddingCalculated = (sidePadding / 100) * (chart['innerRadius'] * 2)

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
      const centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);

      // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
      const stringWidth = ctx.measureText(txt).width;
      const elementWidth = (chart['innerRadius'] * 2) - sidePaddingCalculated;

      // Find out how much the font can grow in width.
      const widthRatio = elementWidth / stringWidth;
      const newFontSize = Math.floor(30 * widthRatio);
      const elementHeight = (chart['innerRadius'] * 2);

      // Pick a new font size so it will not be larger than the height of label.
      const fontSizeToUse = Math.min(newFontSize, elementHeight);

      ctx.font = fontSizeToUse + 'px Arial';

      // Draw text in center
      ctx.fillText(txt, centerX, centerY);
    }
  }];

  public PGdoughnutChartLabels2: Label[] = ['Chemistry', 'Mathematics and Computing', 'Physics', 'Development Studies'];
  public PGdemoDoughnutChartData2: SingleDataSet = [59, 57, 56, 54];
  public PGdoughnutChartType2: ChartType = 'doughnut';
  public PGdoughnutChartPlugins2: PluginServiceGlobalRegistrationAndOptions[] = [{
    beforeDraw(chart: Chart) {
      const ctx = chart.ctx;
      const txt = 'M.Sc / M.A';

      // Get options from the center object in options
      const sidePadding = 80;
      const sidePaddingCalculated = (sidePadding / 100) * (chart['innerRadius'] * 2)

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
      const centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);

      // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
      const stringWidth = ctx.measureText(txt).width;
      const elementWidth = (chart['innerRadius'] * 2) - sidePaddingCalculated;

      // Find out how much the font can grow in width.
      const widthRatio = elementWidth / stringWidth;
      const newFontSize = Math.floor(30 * widthRatio);
      const elementHeight = (chart['innerRadius'] * 2);

      // Pick a new font size so it will not be larger than the height of label.
      const fontSizeToUse = Math.min(newFontSize, elementHeight);

      ctx.font = fontSizeToUse + 'px Arial';

      // Draw text in center
      ctx.fillText(txt, centerX, centerY);
    }
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
