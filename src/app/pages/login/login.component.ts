import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { FakeLoadingService } from '../../shared/services/fake-loading.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, OnDestroy{

  username = new FormControl('');
  password = new FormControl('');

  loadingSubscription?: Subscription;
  loadingObservation?: Observable<boolean>;

  loading: boolean = false;
 
  constructor(private router:Router, private loadingService: FakeLoadingService){

  }

  ngOnInit(): void {
    
  }

  async login() {
    this.loading=true;
    
    this.loadingObservation = this.loadingService.loadingWithObservable(this.username.value as string, this.password.value as string)
    this.loadingSubscription = this.loadingObservation
      .subscribe(
        {
          next: (data: boolean) => {
            console.log(data);
          }, error: (error) => {
            console.error(error);
            this.loading=false
          }, complete: () => {
            console.log('finally');
          }
        }
      );
  }

  ngOnDestroy(): void {
    this.loadingSubscription?.unsubscribe();
  }
}
