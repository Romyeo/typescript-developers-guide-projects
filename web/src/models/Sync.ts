import axios, { AxiosPromise } from 'axios';

interface HasId {
  id?: number;
}

export class Sync<T extends HasId> {
  constructor(public url: string) {}

  fetch = (id: number): AxiosPromise => {
    return axios.get(`${this.url}/${id}`);
  };

  save = (data: T): AxiosPromise => {
    const { id } = data;
    const method = id ? axios.put : axios.post;
    const url = `${this.url}/${id || ''}`;
    return method(url, data);
  };
}
