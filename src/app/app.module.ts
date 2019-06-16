import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AppComponent } from './app.component';
// the browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { NguiAutoCompleteModule } from '@ngui/auto-complete';
// noinspection TypeScriptCheckImport
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { ArrayDirective } from './array.directive';
import { AppRoutingModule } from './/app-routing.module';

// import { AutocompleteDirectiveDirective } from './autocomplete-list/autocomplete-directive.directive';
import { NewcompComponent } from './newcomp/newcomp.component';
import { NewcompDirective } from './newcomp/newcomp.directive';



@NgModule({
  declarations: [
    AppComponent,
    ArrayDirective,
    NewcompDirective,
   
    // AutocompleteDirectiveDirective,
    NewcompComponent,

    
  ],
  imports: [

    BrowserModule, HttpModule, FormsModule, Ng2AutoCompleteModule, AppRoutingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  // compile and launch the module

}
platformBrowserDynamic().bootstrapModule(AppModule);