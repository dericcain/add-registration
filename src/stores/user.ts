import { computed, observable, action } from 'mobx';

import { RootStore } from './';
import { User, UserArgs } from './model/user';
import { UserService } from 'Services/user';

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
}
