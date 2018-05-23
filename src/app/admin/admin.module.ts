import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../model/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: "auth", component: AuthComponent },
      { path: "main", component: AdminComponent, canActivate: [AuthGuard] },
      { path: "**", redirectTo: "auth"}
    ])
  ],
  declarations: [AuthComponent, AdminComponent],
  providers: [AuthGuard]
})
export class AdminModule { }
