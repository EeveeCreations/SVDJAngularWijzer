import { NgModule } from '@angular/core';
import {PreloadAllModules, PreloadingStrategy, RouterModule, RouterPreloader, Routes} from '@angular/router';
const routes: Routes = [
  {path: '', redirectTo: '/subsidiewijzer', pathMatch: 'full'},
  {path: 'subsidiewijzer', loadChildren: () =>
      import('./subsidiewijzer/subsidiewijzer.module')
        .then(m => m.SubsidiewijzerModule)},
  {path: 'admin', loadChildren: () =>
      import('./admin/admin.module')
        .then(m => m.AdminModule)},
  // {path:'not-found', component:ErrorPageComponent, data:{message: 'Page not found'}},
  {path: '**', redirectTo: '/subsidiewijzer'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes,
      {preloadingStrategy:
        PreloadAllModules
        // RouterPreloader
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
