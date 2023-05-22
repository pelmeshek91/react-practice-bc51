import { UserItem } from './UserItem';
import PropTypes from 'react';

export const UsersList = ({ users }) => {
  return users.map(users => {
    return (
      <ul>
        <UserItem key={users.id} {...users} />
      </ul>
    );
  });
};
UsersList.prototype = {
  users: PropTypes.arrayOf(),
};
