import { UserItem } from '../user/UserItem';
import PropTypes from 'prop-types';

export const UsersList = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <UserItem key={user.id} {...user} />
      ))}
    </ul>
  );
};
UsersList.prototype = {
  users: PropTypes.arrayOf(),
};
