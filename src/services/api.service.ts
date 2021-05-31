import { books } from './../mocks/books';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      books
    };
  }
}
