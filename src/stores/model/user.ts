import { observable, computed } from 'mobx';

import { UserStore } from '../user';

export type UserArgs = Omit<User, 'store' | 'fullName'>;

export class User {
  @observable public firstName?: string = '';

  @observable public lastName?: string = '';

  @observable public email?: string = '';

  public constructor(private store: UserStore, { firstName, lastName, email }: UserArgs) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  @computed get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
