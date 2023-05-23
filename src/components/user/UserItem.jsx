import { Section } from 'components/section/Section';
import { NativeText, Title } from './User.styled';

export const UserItem = ({
  name,
  email,
  avatarUrl,
  address: { street, city },
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
      </li>
    </Section>
  );
};
