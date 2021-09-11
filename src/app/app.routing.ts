import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import {CoordinatorsComponent} from './examples/coordinators/coordinators.component';
import {OfficeComponent} from './examples/office/office.component';
import {HocccdComponent} from './examples/hocccd/hocccd.component';
import {FacultyComponent} from './examples/faculty/faculty.component';
import {ProcessComponent} from './examples/process/process.component';
import {FaqComponent} from './examples/faq/faq.component';
import {PlacementPoliciesComponent} from './examples/placement-policies/placement-policies.component';
import {InternshipPoliciesComponent} from './examples/internship-policies/internship-policies.component';
import {ReachingIitgComponent} from './examples/reaching-iitg/reaching-iitg.component';
import {HotelsAndCabsComponent} from './examples/hotels-and-cabs/hotels-and-cabs.component';
import {AcademicsComponent} from './examples/academics/academics.component';
import {GraduatingStudentsComponent} from './examples/graduating-students/graduating-students.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',                 component: ComponentsComponent },
    { path: 'user-profile',         component: ProfileComponent },
    { path: 'signup',               component: SignupComponent },
    { path: 'landing',              component: LandingComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'coordinators',         component: CoordinatorsComponent },
    { path: 'office',               component: OfficeComponent },
    { path: 'hocccd',               component: HocccdComponent },
    { path: 'faculty',              component: FacultyComponent },
    { path: 'process',              component: ProcessComponent },
    { path: 'faqs',                 component: FaqComponent },
    { path: 'placement_policies',   component: PlacementPoliciesComponent },
    { path: 'internship_policies',  component: InternshipPoliciesComponent },
    { path: 'reaching_iitg',        component: ReachingIitgComponent },
    { path: 'hotels_and_cabs',      component: HotelsAndCabsComponent },
    { path: 'academics',            component: AcademicsComponent },
    { path: 'graduating_students',  component: GraduatingStudentsComponent },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
