import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { UserEntity } from '../../shared/entity/user.entity';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  @Output() google = new EventEmitter();

  returnUrl: string;
  userEntity = {} as UserEntity;
  error: string;

  formGroup =  this._formBuilder.group({
    userName: new FormControl('', [
      Validators.required,
      Validators.maxLength(30)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(40)
    ])
  });

  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';

    this._route.queryParams.subscribe(params => {
      const error = params['Error'];
      if (error) {
        this.error = atob(error);
      }
    });
  }

  logar() {

  }
}
