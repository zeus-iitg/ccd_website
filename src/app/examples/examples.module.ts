import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoordinatorsComponent } from './coordinators/coordinators.component';
import { OfficeComponent } from './office/office.component';
import { HocccdComponent } from './hocccd/hocccd.component';
import { FacultyComponent } from './faculty/faculty.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ProcessComponent } from './process/process.component';
import { FaqComponent } from './faq/faq.component';
import { PlacementPoliciesComponent } from './placement-policies/placement-policies.component';
import { InternshipPoliciesComponent } from './internship-policies/internship-policies.component';
import { ReachingIitgComponent } from './reaching-iitg/reaching-iitg.component';
import {RouterModule} from '@angular/router';
import { HotelsAndCabsComponent } from './hotels-and-cabs/hotels-and-cabs.component';
import {MatTableModule} from '@angular/material/table';
import { AcademicsComponent } from './academics/academics.component';
import { GraduatingStudentsComponent } from './graduating-students/graduating-students.component';
import {ChartsModule} from 'ng2-charts';
import { LifeAtIitgComponent } from './life-at-iitg/life-at-iitg.component';
import { AboutIitgComponent } from './about-iitg/about-iitg.component';
import { ResearchComponent } from './research/research.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        MatExpansionModule,
        RouterModule,
        MatTableModule,
        ChartsModule,
        MatGridListModule,
        MatCardModule,
    ],
    declarations: [
        CoordinatorsComponent,
        OfficeComponent,
        HocccdComponent,
        FacultyComponent,
        ProcessComponent,
        FaqComponent,
        PlacementPoliciesComponent,
        InternshipPoliciesComponent,
        ReachingIitgComponent,
        HotelsAndCabsComponent,
        AcademicsComponent,
        GraduatingStudentsComponent,
        LifeAtIitgComponent,
        AboutIitgComponent,
        ResearchComponent,
        AchievementsComponent,
        FacilitiesComponent,
    ]
})
export class ExamplesModule { }
