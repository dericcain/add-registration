import packageJson from '../../package.json';
import { UserStore } from './user';
import { UserService } from 'Services/user';
import { IRequest } from 'Utils/request';

export class RootStore {
  public userStore: UserStore;

  public constructor(request: IRequest) {
    // Glue everything together here so that when stores need to be tested, the dependencies can
    // be mocked very easily
    this.userStore = new UserStore(this, new UserService(request));
  }

  public get appVersion() {
    return packageJson.version;
  }
}
