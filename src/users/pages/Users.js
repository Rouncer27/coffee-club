import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: 1,
      name: "Trevor",
      image: "http://placehold.jp/150x150.png",
      places: 10,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
