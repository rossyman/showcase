/**
 * Represents an unauthenticated user; Where
 * the system hasn't defined the principal.
 */
type UnauthenticatedUser = null;

/**
 * Represents an authenticated user; The
 * system has defined the principal and
 * the application can access this data.
 */
interface AuthenticatedUser {
  id: string;
  firstName: string;
  lastName: string;
  type: string;
  image: string;
}

/**
 * Represents a union of both an Authenticated
 * and Unauthenticated user. Use the helper
 * type-guard `isAuthenticatedUser` to
 * discriminate between the two states.
 */
export type User = UnauthenticatedUser | AuthenticatedUser;

export const isAuthenticatedUser = (user: User): user is AuthenticatedUser => user !== null;
