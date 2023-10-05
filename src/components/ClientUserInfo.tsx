"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function ClientUserInfo() {
  const { user, error, isLoading } = useUser();

  console.log("user", user);
  console.log("error", error);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      {user && (
        <>
          {user.picture && (
            <Image
              width={20}
              height={20}
              src={user.picture}
              alt={user.name ? user.name : "profile pic"}
            />
          )}
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </>
      )}
      {!user && <>Not logged in</>}
    </div>
  );
}
