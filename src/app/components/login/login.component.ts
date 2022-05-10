import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  faLock=faLock;
  var1:string='';

  loginForm =new FormGroup({
    
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

  }
}
