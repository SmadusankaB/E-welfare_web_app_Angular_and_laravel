import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ScrollDispatchModule} from '@angular/cdk/scrolling';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
    imports: [
        MatExpansionModule,
        MatCardModule,
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        MatToolbarModule,
        MatIconModule,
        MatGridListModule,
        MatSelectModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        ScrollDispatchModule,
        MatTabsModule,
        MatRadioModule

    ],
    exports: [
        MatExpansionModule,
        MatCardModule,
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        MatToolbarModule,
        MatIconModule,
        MatGridListModule,
        MatSelectModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        ScrollDispatchModule,
        MatTabsModule,
        MatRadioModule


    ]
})

export class  MaterialModule {
}
