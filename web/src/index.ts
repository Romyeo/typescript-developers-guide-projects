import { Collection } from './models/Collection';
import { UserProps, User } from './models/User';
import { UserList } from './views/UserList';

const users = new Collection(
  'http://localhost:3000/users',
  (json: UserProps) => {
    return User.build(json);
  }
);

users.on('success', () => {
  const root = document.getElementById('root');
  if (!root) throw new Error('Root not found');
  new UserList(root, users).render();
});

users.fetch();
