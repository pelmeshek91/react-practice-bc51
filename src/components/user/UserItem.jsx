import PropTypes from 'prop-types';
import { Section } from 'components/section/Section';
import { NativeText, Title, StyledBtn } from './UserItem.styled';

export const UserItem = ({
  id,
  name,
  username,
  email,
  avatarUrl,

  userDelete,
  changeJob,
  hasJob,
  showUserDetails,
}) => {
  const isEndedBiz = email.endsWith('biz');

  return (
    <Section>
      <li>
        <Title>
          Name: <NativeText isEndedBiz={isEndedBiz}>{name}</NativeText>
        </Title>
        <p>UserName: {username}</p>
        <p>email: {email}</p>
        <img src={avatarUrl} alt={name} />

        <Title>Has Job : {`${hasJob}`}</Title>
      </li>
      <StyledBtn onClick={() => userDelete(id)}>Delete</StyledBtn>
      <StyledBtn onClick={() => showUserDetails({ name, email, avatarUrl })}>
        Show details
      </StyledBtn>
      <StyledBtn onClick={() => changeJob(id)}>Change user status</StyledBtn>
    </Section>
  );
};

UserItem.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  userDelete: PropTypes.func.isRequired,
  changeJob: PropTypes.func.isRequired,
  showUserDetails: PropTypes.func.isRequired,
};
