import { Section } from 'components/section/Section';
import { Button, NativeText, Title } from './User.styled';

export const UserItem = ({
  id,
  name,
  email,
  avatarUrl,
  address: { street, city },
  onDelete,
  changeJob,
  hasJob,
}) => {
  const isEndedBiz = email.endsWith('biz');
  return (
    <Section>
      <li>
        <Title>
          Name: <NativeText isEndedBiz={isEndedBiz}>{name}</NativeText>
        </Title>
        <p>email: {email}</p>
        <img src={avatarUrl} alt={name} />
        <p>
          address: {street}, {city}
        </p>
        <Title>Has Job : {`${hasJob}`}</Title>
      </li>
      <Button onClick={() => onDelete(id)}>DELETE</Button>
      <Button onClick={() => changeJob(id)}>CHANGE</Button>
    </Section>
  );
};
