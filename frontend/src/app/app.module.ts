// Global modules from angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { NgProgressModule } from 'ngx-progressbar';




// Global guards. AuthGualrd only here. Other are in layout.module.ts
import { AuthGuard } from './shared';
// Global services
import { CookieService } from 'ngx-cookie-service';
import {
    AuthService,
    GlobaldataService,
    UserService,
    ProfileImageService,
    LogoutService

     } from './shared';

// Global components
import { AppComponent } from './app.component';
import { AppHttpInterceptor } from './shared/interceptors/app-http-interceptor';
import {
    ConfirmDialogModule,
    AlertModule,
    LoaderModule
     } from './shared';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-5/master/dist/assets/i18n/', '.json');
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        HttpModule,

        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule,
        NgProgressModule,
        ConfirmDialogModule,
        AlertModule,
        LoaderModule

    ],
    declarations: [AppComponent],
    providers: [
        AuthGuard,
        AuthService,
        CookieService,
        GlobaldataService,
        UserService,
        ProfileImageService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AppHttpInterceptor,
            multi: true
        },
        LogoutService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
