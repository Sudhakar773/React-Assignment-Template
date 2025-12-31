import type { User } from "../../types/common.types";

type Props = {
  users: User[];
};

export const UsersList = ({ users }: Props) => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
};
