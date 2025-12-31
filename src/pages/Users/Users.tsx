import { useFetch } from "../../hooks/useFetch";
import type { User } from "../../types/common.types";
import { Loader } from "../../components/common/Loader";
import { UsersList } from "./UsersList";

export const Users = () => {
  const { data, loading, error } = useFetch<User[]>("/users");

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  return <UsersList users={data || []} />;
};
