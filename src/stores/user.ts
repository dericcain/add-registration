import { computed, observable, action } from 'mobx';

import { RootStore } from './';
import { User, UserArgs } from './model/user';
import { UserService } from 'Services/user';

export interface RegisterArgs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export class UserStore {
  @observable public user?: User;

  public constructor(private rootStore: RootStore, private userService: UserService) {}

  @computed public get isAuthenticated() {
    return !!this.user;
  }

  @action
  public createUser = (user: UserArgs) => {
    this.user = new User(this, user);
  };

  public register = async ({
    firstName,
    lastName,
    email,
    password,
  }: RegisterArgs): Promise<void> => {
    try {
      const token = await this.userService.register(email, password);
      this.createUser({ firstName, lastName, email });
      await this.rootStore.uiStore.navigate('/');
    } catch (error) {
      // TODO: Create a UI store
      throw new Error(error);
    }
  };
}
