import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colorpick',
  templateUrl: './colorpick.component.html',
  styleUrls: ['./colorpick.component.css']
})
export class ColorpickComponent implements OnInit {
  color: string = 'black';
  constructor() { }

  ngOnInit(): void {
  }

}
