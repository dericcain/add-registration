import { Service } from '.';

export class UserService extends Service {
  protected path = '/users';

  public register = async (email: string, password: string): Promise<string> => {
    try {
      const response = await this.request.post<{ accessToken: string }>(this.path, {
        email,
        password,
      });
      return response.accessToken;
    } catch (error) {
      throw error;
    }
  };
}
