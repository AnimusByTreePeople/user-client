import { json } from "react-router-dom";

export const getUserFromUID = async (uid) => {
  console.log(uid);
  const response = await fetch(
    `https://animus-production.up.railway.app/api/accounts/${uid}`
  );
  const user = await response.json();
  console.log(user);
  return user;
};
export const createUserFromUID = async (name, mobile, uid) => {
  const data = { name, mobile, UID: uid };
  console.log(data);
  const response = await fetch(
    `https://animus-production.up.railway.app/api/accounts/`,
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    }
  );
  const user = await response.json();
  console.log(user);
  return user;
};
export const getUsers = async () => {
  const response = await fetch(
    `https://animus-production.up.railway.app/api/accounts/`
  );
  const users = await response.json();
  return users;
};
