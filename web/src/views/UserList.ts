import { User, UserProps } from '../models/User';
import { List } from './List';

import { UserShow } from './UserShow';

export class UserList extends List<User, UserProps> {
  renderItem(itemParent: Element, model: User): void {
    new UserShow(itemParent, model).render();
  }
}
