import { UserItem } from '../user/UserItem';
import PropTypes from 'prop-types';

export const UsersList = ({ users, onDelete, changeStat }) => {
  return (
    <ul>
      {users.map(user => (
        <UserItem
          key={user.id}
          {...user}
          onDelete={onDelete}
          changeJob={changeStat}
        />
      ))}
    </ul>
  );
};
UsersList.prototype = {
  users: PropTypes.arrayOf(),
};
