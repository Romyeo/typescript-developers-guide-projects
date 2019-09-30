import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  events(): { [key: string]: () => void } {
    return {
      'click:#set-name': this.onSetNameClick,
      'click:#set-age': this.onSetAgeClick,
      'click:#save-user': this.onSaveUserClick
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');

    if (!input) return;

    const name = input.value;
    this.model.set({ name });
  };

  onSaveUserClick = (): void => {
    this.model.save();
  };

  template(): string {
    return `
      <div>
        <input placeholder="${this.model.get('name')}" />
        <button id="set-name">Change name</button>
        <button id="set-age">Set random age</button>
        <button id="save-user">Save user</button>
      </div>
    `;
  }
}
