import { NavigateFn } from '@reach/router';
import { action, observable } from 'mobx';

export class UiStore {
  public errors = observable.array<string>([]);

  public constructor(public navigate: NavigateFn) {}

  @action
  public setErrors(errors: string[]) {
    this.errors.replace(errors);
  }
}
