import { observable, computed, decorate } from 'mobx';

import { UserStore } from '../user';

export type UserArgs = Omit<User, 'store' | 'fullName'>;

// Class models can be really smart and hold some logic. If you find too much logic is in the model
// that logic should probably be moved to the model's store.
//
// Pros:
//  - Smart (can hold logic)
//  - Many instances
//
// Cons:
//  - More LOC, especially when there are a lot of properties
export class User {
  @observable public firstName?: string = '';

  @observable public lastName?: string = '';

  // Decorators are just functions that wrap other functions/methods/classes and add functionality
  // Here is the same thing without a decorator
  //
  // public email?: string = observable('');
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

// Decorate API
export default decorate(User, {
  firstName: observable,
  lastName: observable,
  email: observable,
  fullName: computed
})

// When using objects, all getters are automatically converted to computed properties.
// Pros:
//  - Simple
//  - Concise
//
// Cons:
//  - Only one instance (factory function?)
const UserObjectModel = observable({
  firstName: '',
  lastName: '',
  email: '',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
});
