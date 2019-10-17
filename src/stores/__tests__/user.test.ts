import axios, { AxiosStatic } from 'axios';

import { RootStore } from 'Stores';
import { Request } from 'Utils/request';

interface AxiosMock extends AxiosStatic {
  mockImplementation: Function;
}

jest.mock('axios');

const mockedAxios = axios as AxiosMock;

const user = {
  firstName: 'John',
  lastName: 'Snow',
  email: 'jon.snow@gmail.com',
};

// This can be extracted into a common file so that all tests can share it. Then API calls are
// easy to mock and return whatever values the API would return.

mockedAxios.mockImplementation(() =>
  Promise.resolve({
    data: user,
  }),
);

describe('User Store', () => {
  const axiosInstance = axios.create({});
  const store = new RootStore(new Request(axiosInstance));

  it('should return false for authenticated user if there is no user', () => {
    expect(store.userStore.isAuthenticated).toBe(false);
  });

  it('should create a new user', () => {
    store.userStore.createUser(user);
    expect(store.userStore.user).not.toBeNull();
  });

  it('should return the users full name', () => {
    expect(store.userStore.user.fullName).toBe(`${user.firstName} ${user.lastName}`);
  });
});
