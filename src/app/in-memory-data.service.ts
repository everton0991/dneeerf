import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const itens = [
      { id: 1, position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { id: 2, position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { id: 3, position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { id: 4, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { id: 5, position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
      { id: 6, position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
      { id: 7, position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
      { id: 8, position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
      { id: 9, position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
      { id: 10, position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
      { id: 11, position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
      { id: 12, position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
      { id: 13, position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
      { id: 14, position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { id: 15, position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { id: 16, position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { id: 17, position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
      { id: 18, position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
      { id: 19, position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
      { id: 20, position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
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
