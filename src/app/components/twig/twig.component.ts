import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'twig',
  templateUrl: './twig.component.html',
  styleUrls: ['./twig.component.scss']
})
export class TwigComponent implements OnInit {
  activeLeaf = null;

  constructor() { }

  ngOnInit() {
  }

  activate(no: number) {
    this.activeLeaf = no;
  }

  isActive(no: number) {
    return no === this.activeLeaf;
  }

}
