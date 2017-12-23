import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoaderService } from '@app/shared/loader/loader.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.loaderService.showLoader();
  }

  ngAfterContentInit() {
    this.loaderService.hideLoader();
  }

  users = [
    {
      'name': 'Son Goku',
      'race': 'Sayajin',
      'picture': 'http://sm.ign.com/ign_br/screenshot/default/goku_an6e.jpg',
      'cardPicture': 'https://vignette.wikia.nocookie.net/dbz-dokkanbattle/images/8/84/Deadly_Awakening_Super_Saiyan_Goku.png/revision/latest?cb=20160829123519',
    },
    {
      'name': 'Vegeta',
      'race': 'Sayajin',
      'picture': 'http://static.tvtropes.org/pmwiki/pub/images/vegetavwx2014_928.jpg',
      'cardPicture': 'https://vignette.wikia.nocookie.net/dbz-dokkanbattle/images/7/7c/IMG_20170410_080542.jpg/revision/latest?cb=20170410050640',
    },
    {
      'name': 'Son Gohan',
      'race': 'Sayajin',
      'picture': 'https://vignette.wikia.nocookie.net/dragonball/images/7/72/GohanIBC01.png/revision/latest/scale-to-width-down/180?cb=20100711183237',
      'cardPicture': 'https://vignette.wikia.nocookie.net/dbz-dokkanbattle/images/0/06/Card_1001390_bg.png/revision/latest?cb=20160831124214',
    },
    {
      'name': 'Piccolo',
      'race': 'Namekuseijin',
      'picture': 'https://myanimelist.cdn-dena.com/images/characters/8/45628.jpg',
      'cardPicture': 'https://vignette4.wikia.nocookie.net/dbz-dokkanbattle/images/c/c6/Brainstormed_Combat_Tactics_Piccolo.png/revision/latest?cb=20161124223205',
    },
    {
      'name': 'Kuririn',
      'race': 'Terráqueo',
      'picture': 'https://pm1.narvii.com/6147/f14acb6149ed3a72ff16d2b8260ad24b107d893c_hq.jpg',
      'cardPicture': 'https://myanimelist.cdn-dena.com/images/characters/16/316662.jpg',
    },
  ];
}
