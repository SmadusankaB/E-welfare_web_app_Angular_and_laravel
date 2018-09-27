import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatComponent } from './stat.component';
import { MaterialModule } from '../../../material.module';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    declarations: [StatComponent],
    exports: [StatComponent]
})
export class StatModule {}
