import { Model } from './Model';
import { Attributes } from './Attributes';
import { Event } from './Event';
import { Sync } from './Sync';
import { Collection } from './Collection';

const ROOT_URL = 'http://localhost:3000/users';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User extends Model<UserProps> {
  static build(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Event(),
      new Sync<UserProps>(ROOT_URL)
    );
  }

  static buildCollection(): Collection<User, UserProps> {
    return new Collection(
      (json: UserProps) => User.build(json),
      'http://localhost:3000/users'
    );
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}
