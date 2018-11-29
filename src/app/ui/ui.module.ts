import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutMusicViewComponent } from './layout-music-view/layout-music-view.component';
import { MusicControlsComponent } from './music-controls/music-controls.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent,
    LayoutComponent,
    LayoutMusicViewComponent,
    MusicControlsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutComponent,
    LayoutMusicViewComponent,
  ]
})
export class UiModule { }
