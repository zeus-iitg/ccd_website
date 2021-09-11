import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
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

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        MatExpansionModule,
        RouterModule,
        MatTableModule,
        ChartsModule,
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
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
        GraduatingStudentsComponent
    ]
})
export class ExamplesModule { }
