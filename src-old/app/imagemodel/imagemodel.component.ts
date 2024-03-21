import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-imagemodel',
  templateUrl: './imagemodel.component.html',
  styleUrls: ['./imagemodel.component.scss'],
})
export class ImagemodelComponent implements OnInit {
  @Input() images: any;
  @Input() initialIndex: any;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: true,
    zoom: true,
  };
  constructor(private modalCtrl: ModalController) {}

  dissmissModal() {
    this.modalCtrl.dismiss();
  }
  ngOnInit() {
    this.slideOpts.initialSlide = this.initialIndex;
  }
}
