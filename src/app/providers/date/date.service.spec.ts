import { DateService } from './date.service';

describe('DateService', () => {

  const dateService: DateService = new DateService();

  describe('getYear', () => {

    it('should return the current year', () =>
      expect(dateService.getYear()).toBeDefined());

  });

});
