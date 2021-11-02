import { reverseStringEnum } from './enums';

enum TestEnum {
  TEST = 'testEnumValue'
}

describe('Enums', () => {

  describe('reverseStringEnum', () => {

    it('should reverse the value of an enum into it\'s key', () =>
      expect(reverseStringEnum(TestEnum, TestEnum.TEST)).toEqual('TEST'));

  });

});
