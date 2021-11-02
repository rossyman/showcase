import { User } from '../interfaces/user';

/**
 * For showcase purposes only, we'll use a
 * mock user to ensure those viewing the
 * application can access all the functionality.
 */
export const mockUser = (): User => ({
  id: '24b61e54-4411-447d-93cb-b97b4e29023d',
  firstName: 'John',
  lastName: 'Doe',
  type: 'Heart Patient',
  image: 'assets/user-image.png',
});
