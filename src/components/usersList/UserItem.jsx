export const UserItem = ({
  name,
  email,
  avatarUrl,
  address: { street, city },
}) => {
  return (
    <li>
      <img src={avatarUrl} alt={name} />
      <p>Name: {name}</p>
      <p>email: {email}</p>
      <p>
        address: {street}, {city}
      </p>
    </li>
  );
};
