---
title: Angular tutorial
description: blog description
published: true
---

# Angular tutorial
```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'blog',
  loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
}, {
  path: '',
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
```
