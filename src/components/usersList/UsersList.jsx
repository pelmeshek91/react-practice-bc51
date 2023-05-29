import PropTypes from 'prop-types';
import { UserItem } from '../user/UserItem';

export const UsersList = ({
  users,
  userDelete,
  changeStat,
  showUserDetails,
}) => {
  return (
    <ul>
      {users.map(user => (
        <UserItem
          key={user.id}
          userDelete={userDelete}
          changeJob={changeStat}
          showUserDetails={showUserDetails}
          {...user}
        />
      ))}
    </ul>
  );
};
UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
      ]),
    }).isRequired
  ).isRequired,
  userDelete: PropTypes.func.isRequired,
  changeStat: PropTypes.func.isRequired,
  showUserDetails: PropTypes.func.isRequired,
};
