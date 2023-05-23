import { UsersList } from './usersList/UsersList';
import users from '../users.json';
import { Section } from './section/Section';

export const App = () => {
  return (
    <Section title={'UserList'}>
      <UsersList users={users} />
    </Section>
  );
};
