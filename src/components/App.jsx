import { UsersList } from './usersList/UsersList';
import users from '../users.json';
import { Section } from './section/Section';
import { Component } from 'react';

export class App extends Component {
  state = {
    users,
  };
  userDelete = id => {
    this.setState(prevState => {
      return { users: prevState.users.filter(user => user.id !== id) };
    });
  };
  changeStatus = usersId => {
    this.setState(prevState => {
      return {
        users: prevState.users.map(user => {
          return user.id === usersId ? { ...user, hasJob: !user.hasJob } : user;
        }),
      };
    });
  };

  render() {
    const { users } = this.state;
    return (
      <Section title={'UserList'}>
        <UsersList
          users={users}
          onDelete={this.userDelete}
          changeStat={this.changeStatus}
        />
      </Section>
    );
  }
}
