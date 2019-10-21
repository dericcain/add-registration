import { computed, action, observable } from 'mobx';
import { NavigateFn } from '@reach/router';

export class UiStore {
  @observable public isLoading = false;

  @observable public errors: String[] = [];

  @computed public get mostRecentErrorMessage() {
    return this.errors[0];
  }

  @action
  public setErrors(errors: String[]) {
    this.errors = errors;
  }

  public constructor(public navigate: NavigateFn) {}
}
