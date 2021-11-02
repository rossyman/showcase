import { DeltaComponent } from './delta.component';

describe('DeltaComponent', () => {

  const testPositiveDelta = 10;
  const testNegativeDelta = -10;

  let deltaComponent: DeltaComponent;

  beforeEach(() => {
    deltaComponent = new DeltaComponent();
  });

  describe('when the delta is positive', () => {

    beforeEach(() => {
      deltaComponent.delta = testPositiveDelta;
    });

    describe('iconType', () => {

      it('should return the appropriate icon type', () =>
        expect(deltaComponent.iconType).toEqual('up'));

    });

    describe('trendDescription', () => {

      it('should return the appropriate trend description', () =>
        expect(deltaComponent.trendDescription).toEqual('Higher'));

    });

    describe('absoluteDelta', () => {

      it('should return the appropriate absolute delta', () =>
        expect(deltaComponent.absoluteDelta).toEqual(10));

    });

  });

  describe('when the delta is negative', () => {

    beforeEach(() => {
      deltaComponent.delta = testNegativeDelta;
    });

    describe('iconType', () => {

      it('should return the appropriate icon type', () =>
        expect(deltaComponent.iconType).toEqual('down'));

    });

    describe('trendDescription', () => {

      it('should return the appropriate trend description', () =>
        expect(deltaComponent.trendDescription).toEqual('Lower'));

    });

    describe('absoluteDelta', () => {

      it('should return the appropriate absolute delta', () =>
        expect(deltaComponent.absoluteDelta).toEqual(10));

    });

  });

});
