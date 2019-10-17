import { IRequest } from 'Utils/request';

// This class handles all of the things that all services would need
export abstract class Service {
  // It is okay to use inference here and not type each property
  protected abstract path = '/';

  public constructor(protected request: IRequest) {}
}
