import { Component, signal, provideZonelessChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector : 'app-root',
  standalone : true, 
  template : `<h1>Hello world</h1>
  <button (click)="incs()">
  {{count()}}
  </button>
  `;
});

class appComponent {
  count = signal(0);
  flag : true;
  interval : any;
  
  incs(){
    this.flag = (this.flag == true) ? false : true;
    if(this.flag){
      this.interval = setInterval(()=>{
        this.count.set(this.count() + 1);
      }, 500);
    }else{
      clearInterval(this.interval);
    }
  }
}
bootstrapApplication(AppComponent, {
  providers : [provideZonelessChangeDection]
})
