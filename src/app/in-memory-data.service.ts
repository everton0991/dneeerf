import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const itens = [
      { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
      { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
      { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
      { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
      { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
      { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
      { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
      { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
      { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
      { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
      { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
      { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
      { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
    ];
    const users = [
      {
        id: 1,
        name: 'Son Goku',
        race: 'Sayajin',
        status: 'online',
        picture: 'http://sm.ign.com/ign_br/screenshot/default/goku_an6e.jpg',
        cardPicture: 'https://vignette.wikia.nocookie.net/dbz-dokkanbattle/images/8/84/Deadly_Awakening_Super_Saiyan_Goku.png/revision/latest?cb=20160829123519',
      },
      {
        id: 2,
        name: 'Vegeta',
        race: 'Sayajin',
        status: 'online',
        picture: 'http://static.tvtropes.org/pmwiki/pub/images/vegetavwx2014_928.jpg',
        cardPicture: 'https://vignette.wikia.nocookie.net/dbz-dokkanbattle/images/7/7c/IMG_20170410_080542.jpg/revision/latest?cb=20170410050640',
      },
      {
        id: 3,
        name: 'Son Gohan',
        race: 'Sayajin',
        status: 'busy',
        picture: 'https://vignette.wikia.nocookie.net/dragonball/images/7/72/GohanIBC01.png/revision/latest/scale-to-width-down/180?cb=20100711183237',
        cardPicture: 'https://vignette.wikia.nocookie.net/dbz-dokkanbattle/images/0/06/Card_1001390_bg.png/revision/latest?cb=20160831124214',
      },
      {
        id: 4,
        name: 'Piccolo',
        race: 'Namekuseijin',
        status: 'idle',
        picture: 'https://myanimelist.cdn-dena.com/images/characters/8/45628.jpg',
        cardPicture: 'https://vignette4.wikia.nocookie.net/dbz-dokkanbattle/images/c/c6/Brainstormed_Combat_Tactics_Piccolo.png/revision/latest?cb=20161124223205',
      },
      {
        id: 5,        
        name: 'Kuririn',
        race: 'Terráqueo',
        status: 'offline',
        picture: 'https://pm1.narvii.com/6147/f14acb6149ed3a72ff16d2b8260ad24b107d893c_hq.jpg',
        cardPicture: 'https://myanimelist.cdn-dena.com/images/characters/16/316662.jpg',
      },
    ];

    return {itens, users};
  }
}
