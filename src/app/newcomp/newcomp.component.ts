import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.css']
})
export class NewcompComponent implements OnInit {
  isValid:any;
  title: any='Auto Complete App';
  query:any;
  ngOnInit() {
    
  }
  searchedArray=[]
  values = [ { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
   ];
  
   everySecond(event) {  this.searchedArray=[]=event }
 
select(value,i,e)
{
  
  
  console.log(value,i,e)
}
 
}
