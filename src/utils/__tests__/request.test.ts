import axios from 'axios';
import { Request } from '../request';

jest.mock('axios');

describe('Request', () => {
  const user = {
    firstName: 'jon',
    lastName: 'doe',
    email: 'jon@email.com',
  };

  it.each`
    method      | url           | params                       | expected
    ${'get'}    | ${'/users/1'} | ${undefined}                 | ${user}
    ${'get'}    | ${'/users/1'} | ${{ foo: 'bar', baz: true }} | ${user}
    ${'post'}   | ${'/users/1'} | ${{ id: 1 }}                 | ${user}
    ${'patch'}  | ${'/users/1'} | ${{ firstName: 'test' }}     | ${user}
    ${'put'}    | ${'/users/1'} | ${{ lastName: 'dummy' }}     | ${user}
    ${'delete'} | ${'/users/1'} | ${{ undefined }}             | ${''}
  `('can make a "$method" request', async ({ method, url, params, expected }) => {
    // TS does not like this because it thinks we are directly accessing Axios when
    // we are only accessing the mock of Axios
    // @ts-ignore
    axios.mockImplementation(() =>
      Promise.resolve({
        data: expected,
      }),
    );

    const request = new Request(axios);
    // TS does not like accessing a class like this but we know that it is valid
    // @ts-ignore
    const res = await request[method](url, params);
    expect(res).toEqual(expected);
  });
});
