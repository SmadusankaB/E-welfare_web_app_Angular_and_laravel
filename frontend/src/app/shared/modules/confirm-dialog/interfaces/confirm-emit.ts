import {TemplateRef} from '@angular/core';

export interface ConfirmEmit {
  /*close?: boolean;*/
  message: string;
  title: string;
  backColor: string;
  color: string ;
  resolve$: any;
  /*override?: ConfirmSettings;*/
}