import { Component, OnInit, NgZone } from '@angular/core';
import { ConfirmdialogService } from './services/confirmdialog.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Observable } from 'rxjs/Observable';
import { ResolveEmit } from './interfaces/resolve-emit';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  animations: [
  trigger('dialog', [
    transition('void => *', [
      style({ transform: 'scale3d(.3, .3, .3)' }), 
      animate(100)
    ]),
    transition('* => void', [
      animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
    ])
  ])
]
})
export class ConfirmDialogComponent implements OnInit {
  modalStatus: boolean = false;
  title: string;
  body : string;
  backColor: string;
  color : string;
  incommingData$: any;

  constructor(
    private confDialogService: ConfirmdialogService,
    private _ngZone: NgZone) { }

  ngOnInit() {

  	this.confDialogService.confirmation$.subscribe(
      (data) => {
        this.incommingData$ = data.resolve$;
        this.title = data.title;
        this.body = data.message;
        this.backColor = data.backColor;
        this.color = data.color;
        this.modalStatus= true;
      }
      );

    
  }

  resolve(res: ResolveEmit){
    this.modalStatus = false;
     this._ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this._ngZone.run(() =>  {
         this.incommingData$.next(res);
        });
      }, 450);
    });

  }




}
