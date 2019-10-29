import { computed, action, observable } from 'mobx';
import { NavigateFn } from '@reach/router';

export class UiStore {
  @observable public isLoading = false;

  public errors = observable.array<string>([]);

  @computed public get mostRecentErrorMessage() {
    return this.errors[0];
  }

  @action
  public setErrors(errors: string[]) {
    this.errors.replace(errors);
  }

  public constructor(public navigate: NavigateFn) {}
}
