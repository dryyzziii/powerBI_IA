import { Routes } from '@angular/router';
import { ModelComponent } from './ModelBuild/model.component';
import { ViewComponent } from './Viewer/view.component';
import { BuilderComponent } from './Builder/builder.component';
import { BaseComponent } from './shared/base.component';

export const routes: Routes = [
    {
        path: '',  // Route par défaut
        redirectTo: 'base',  // Redirige vers /base
        pathMatch: 'full'  // S'assure que la route vide redirige exactement
      },
      {
        path: 'base',  // Route de base
        component: BaseComponent,  // Composant pour la route /base
        children: [  // Routes enfants sous /base
          {
            path: 'model',
            component: ModelComponent
          },
          {
            path: 'view',
            component: ViewComponent
          },
          {
            path: 'builder',
            component: BuilderComponent
          }
        ]
      },
      {
        path: '**',  // Gestion des routes non trouvées
        redirectTo: 'base'  // Redirige vers /base pour toute route inconnue
      }
];
