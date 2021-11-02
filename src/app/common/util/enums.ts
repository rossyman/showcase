/**
 * Useful utility function to reverse a string enum
 * so that we can use the key as a value.
 *
 * @param enumObj The enum we wish to reverse the value of
 * @param value The value that we wish to find the key of
 */
export const reverseStringEnum = <T, K extends keyof T>(enumObj: T, value: T[K]): K =>
  Object.keys(enumObj).find(key => enumObj[key as keyof typeof enumObj] === value) as K;
