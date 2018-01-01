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
        picture: 'https://goo.gl/t6d9qG',
        cardPicture: 'http://lorempixel.com/250/330/sports/',
      },
      {
        id: 2,
        name: 'Vegeta',
        race: 'Sayajin',
        status: 'online',
        picture: 'https://goo.gl/24iTj6',
        cardPicture: 'http://lorempixel.com/250/330/transport/',
      },
      {
        id: 3,
        name: 'Son Gohan',
        race: 'Sayajin',
        status: 'busy',
        picture: 'https://goo.gl/E88N6p',
        cardPicture: 'http://lorempixel.com/250/330/nightlife/',
      },
      {
        id: 4,
        name: 'Piccolo',
        race: 'Namekuseijin',
        status: 'idle',
        picture: 'https://goo.gl/U5wdHb',
        cardPicture: 'http://lorempixel.com/250/330/food/',
      },
      {
        id: 5,
        name: 'Kuririn',
        race: 'Terráqueo',
        status: 'offline',
        picture: 'https://goo.gl/aevBNQ',
        cardPicture: 'http://lorempixel.com/250/330/animals/',
      },
      {
        id: 6,
        name: 'Bulma',
        race: 'Terráqueo',
        status: 'offline',
        picture: 'https://goo.gl/GmHPFi',
        cardPicture: 'http://lorempixel.com/250/330/abstract/',
      },
    ];
    const messages = [
      { id: 1, notification: 'New contact via Facebook', date: '30 min ago' },
      { id: 2, notification: 'New contact via Google', date: '1 hours ago' },
      { id: 3, notification: 'System update!', date: '1 hour and 45 min ago' },
      { id: 4, notification: 'Bug report', date: '6 hours ago' },
      { id: 5, notification: 'Disc space warning!', date: '6 hours ago' },
    ];

    return { itens, users, messages };
  }
}
