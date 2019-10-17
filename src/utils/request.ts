// This is a good base class for any request library. If another library is used, just swap out the
// parts to make it work
import axios, { Method, AxiosRequestConfig, AxiosInstance, CancelTokenSource } from 'axios';

type Params = { [k: string]: any };

export interface IRequest {
  get<T>(url: string, params?: Params): Promise<T>;
  post<T>(url: string, params: Params): Promise<T>;
  patch<T>(url: string, params: Params): Promise<T>;
  put<T>(url: string, params: Params): Promise<T>;
  delete<T>(url: string): Promise<T>;
  cancel(url: string): void;
}

export class Request implements IRequest {
  private static cancelable = axios.CancelToken;

  private cancelTokens: Map<string, CancelTokenSource> = new Map();

  public constructor(private transport: AxiosInstance) {}

  private convertParamsToQuery(params: Params): string {
    return `?${new URLSearchParams(params).toString()}`;
  }

  private async baseRequest<T>(method: Method, urlPath: string, params?: Params): Promise<T> {
    let url = urlPath;

    const requestConfig: AxiosRequestConfig = {
      method,
    };

    if (method.toLowerCase() === 'get' && params) {
      url = `${url}${this.convertParamsToQuery(params)}`;
    } else {
      requestConfig.data = params;
    }

    requestConfig.url = url;
    const cancelTokenSource = Request.cancelable.source();
    // Create a cancel token
    this.cancelTokens.set(url, cancelTokenSource);
    requestConfig.cancelToken = cancelTokenSource.token;

    try {
      const { data } = await this.transport(requestConfig);
      return data;
    } catch (e) {
      // Axios throws if we do not receive a 2XX
      return e.response;
    }
  }

  public get<T>(url: string, params?: Params): Promise<T> {
    return this.baseRequest<T>('get', url, params);
  }

  public post<T>(url: string, params: Params): Promise<T> {
    return this.baseRequest<T>('post', url, params);
  }

  public patch<T>(url: string, params: Params): Promise<T> {
    return this.baseRequest<T>('patch', url, params);
  }

  public put<T>(url: string, params: Params): Promise<T> {
    return this.baseRequest<T>('put', url, params);
  }

  public delete<T>(url: string): Promise<T> {
    return this.baseRequest<T>('delete', url);
  }

  public cancel(url: string): void {
    const cancelToken = this.cancelTokens.get(url);
    if (cancelToken) {
      cancelToken.cancel(`The request to ${url} was cancelled.`);
      // We want to delete the tokens that are stored so the
      this.cancelTokens.delete(url);
    }
  }
}
