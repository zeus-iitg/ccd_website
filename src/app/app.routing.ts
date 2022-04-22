import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
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
import {LifeAtIitgComponent} from './examples/life-at-iitg/life-at-iitg.component';
import {AboutIitgComponent} from './examples/about-iitg/about-iitg.component';
import {ResearchComponent} from './examples/research/research.component';
import {AchievementsComponent} from './examples/achievements/achievements.component';
import {FacilitiesComponent} from './examples/facilities/facilities.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',                 component: ComponentsComponent },
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
    { path: 'life_at_iitg',         component: LifeAtIitgComponent },
    { path: 'about',                component: AboutIitgComponent },
    { path: 'research',             component: ResearchComponent },
    { path: 'achievements',         component: AchievementsComponent },
    { path: 'facilities',           component: FacilitiesComponent },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
