import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MemberListComponent} from './members/member-list/member-list.component';
import {MessagesComponent} from './messages/messages.component';
import {ListsComponent} from './lists/lists.component';
import {AuthGuard} from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailsResolver } from './_resolvers/member-details.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes';

export const appRoutes: Routes = [ 
{path: '', component: HomeComponent},
{
    path:'',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children:
    [
        {path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver}},
        {path: 'members/edit', component: MemberEditComponent, resolve: {user: MemberEditResolver}, canDeactivate: [PreventUnsavedChanges]},
        {path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailsResolver}},  
        {path: 'messages', component: MessagesComponent},
        {path: 'lists', component: ListsComponent}
    ]

},

{path: '**', redirectTo: '', pathMatch: 'full'}
];