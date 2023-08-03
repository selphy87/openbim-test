import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewerContainerComponent } from './viewer-container/viewer-container.component';

const routes: Routes = [
 /*    {path: '', component: ViewerContainerComponent , pathMatch: 'full' }, */
    {path: '', component: ViewerContainerComponent , pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class ViewerRoutingModule {
}
