import { Routes } from '@angular/router';
import { MainmenuComponent } from './components/mainmenu/mainmenu.component';
import { CharacterCreatorComponent } from './components/character-creator/character-creator.component';
import { CharacterSelectorComponent } from './components/character-selector/character-selector.component';
import { OptionsComponent } from './components/options/options.component';

export const routes: Routes = [
    // {path:'mainmenu', component: MainmenuComponent, children: [
    //     {path:'character-creator', component: CharacterCreatorComponent},
    //     {path:'charactor-selector', component: CharacterSelectorComponent},
    //     {path:'options', component: OptionsComponent},
    // ]},
    {path:'mainmenu', component: MainmenuComponent},
    {path:'character-creator', component: CharacterCreatorComponent},
    {path:'charactor-selector', component: CharacterSelectorComponent},
    {path:'options', component: OptionsComponent},
    {path:'', redirectTo: 'mainmenu', pathMatch:'full'},
];
