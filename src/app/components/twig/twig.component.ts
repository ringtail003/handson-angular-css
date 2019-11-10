import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'twig',
  templateUrl: './twig.component.html',
  styleUrls: ['./twig.component.scss'],
  encapsulation: ViewEncapsulation.None,
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
