import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path:"parentInputDecorator",
        loadComponent: () => import("../app/ngOnChanges/parent-component/parent-component").then(m=>m.ParentComponent),
        title:'parentComponent'
    },
    {
        path:"parentOutputDecorator",
        loadComponent:() => import('./OutputDecorators/parent-op/parent-op').then(m => m.ParentOp),
        title:'parentComponent'
    },
    {
        path:"parentTRV",
        loadComponent:() => import('./templateReferenceVariable/parent-trv/parent-trv').then(m => m.ParentTrv),
        title:'parentComponent'
    },
    {
        path:"parentVc",
        loadComponent:() => import('./veiwChild/parent-vc/parent-vc').then(m => m.ParentVc),
        title:'parentComponent'
    }
];
