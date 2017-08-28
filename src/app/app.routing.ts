import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from "./app.component";
import {LoginComponent} from "./Login/app.login.component";
import {MainComponent} from "./Main/app.main.component";

const appRoutes: Routes = <Routes>[
    {path: 'login', component: LoginComponent},
    {path: 'main', component: MainComponent},
    {path: '', component: LoginComponent},
];


export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
