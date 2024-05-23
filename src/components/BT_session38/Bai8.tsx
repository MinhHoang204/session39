import React, { useMemo, memo } from 'react';

interface User {
  id: number;
  userName: string;
  email: string;
  address: string;
}

interface UserListProps {
  users: User[];
}

const UserItem: React.FC<User> = memo(({ id, userName, email, address }) => {
  return (
    <div key={id}>
      <h3>{userName}</h3>
      <p>Email: {email}</p>
      <p>Address: {address}</p>
    </div>
  );
});

const Bai8: React.FC<UserListProps> = ({ users }) => {
  const userList = useMemo(() => {
    return users.map(user => (
      <UserItem
        key={user.id}
        id={user.id}
        userName={user.userName}
        email={user.email}
        address={user.address}
      />
    ));
  }, [users]);

  return (
    <div>
      <h2>User List</h2>
      {userList}
    </div>
  );
};

export default Bai8;