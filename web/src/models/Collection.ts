import axios, { AxiosResponse } from 'axios';
import { Event } from './Event';

export class Collection<T, K> {
  models: T[] = [];
  events: Event = new Event();

  constructor(private url: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.url).then((response: AxiosResponse) => {
      response.data.forEach((value: K) => {
        this.models.push(this.deserialize(value));
      });

      this.trigger('success');
    });
  }
}
