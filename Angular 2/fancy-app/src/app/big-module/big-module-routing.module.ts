import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BigFeatureComponentComponent } from './big-feature-component/big-feature-component.component';

const routes: Routes = [{ path: '', component: BigFeatureComponentComponent }];

// Se usar el forChild porque estamos en un módulo hijo
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BigModuleRoutingModule {}
