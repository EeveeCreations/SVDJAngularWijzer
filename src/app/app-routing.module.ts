import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, RouterPreloader, Routes} from '@angular/router';
const routes: Routes = [
  {path: '', redirectTo: '/subsidiewijzer', pathMatch: 'full'},
  {path: 'subsidiewijzer', loadChildren: () =>
      import('./subsidiewijzer/subsidie-wijzer.module')
        .then(m => m.SubsidieWijzerModule)},
  {path: 'admin', loadChildren: () =>
      import('./admin/admin.module')
        .then(m => m.AdminModule)},
  // {path:'not-found', component:ErrorPageComponent, data:{message: 'Page not found'}},
  {path: '**', redirectTo: '/subsidiewijzer'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes,{
      preloadingStrategy: PreloadAllModules
      }

    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
