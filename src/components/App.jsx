import { UsersList } from './usersList/UsersList';
import users from '../users.json';
export const App = () => {
  return (
    <>
      <UsersList users={users} />
    </>
  );
};
