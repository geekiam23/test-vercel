"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

export default function ClientUserInfo() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      {user && (
        <>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </>
      )}
      {!user && <>Not logged in</>}
    </div>
  );
}
