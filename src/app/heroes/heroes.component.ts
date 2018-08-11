import { HEROES } from './mock-heroes';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  @ViewChild("one") one: ElementRef

  heroes = HEROES

  hero: Hero = {
    id: 1,
    name: "windshtorm"
  }
  
  constructor() { }

  ngOnInit() {
    // console.log(this.one.nativeElement.textContent)
    
  }

}
