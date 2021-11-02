import SpyObj = jasmine.SpyObj;
import createSpyObj = jasmine.createSpyObj;
import { FooterComponent } from './footer.component';
import { DateService } from '../../../providers/date/date.service';

describe('FooterComponent', () => {

  const testYear = '2021';

  const mockTheDateService = (): SpyObj<DateService> =>
    createSpyObj('DateService', ['year']);

  let mockDateService: SpyObj<DateService>;

  let footerComponent: FooterComponent;

  beforeEach(() => {
    mockDateService = mockTheDateService();
    mockDateService.getYear.and.returnValue(testYear);

    footerComponent = new FooterComponent(mockDateService);
  });

  describe('year', () => {

    it('should retrieve the year from the date service', () =>
      expect(footerComponent.year).toEqual(testYear));

  });

});
