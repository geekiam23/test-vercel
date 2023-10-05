import { getSession } from "@auth0/nextjs-auth0";
import Image from "next/image";

export default async function ServerUserInfo() {
  const session = await getSession();
  const user = session?.user;

  return (
    <div>
      {user && (
        <>
          {user.picture && <Image src={user.picture} alt={user.name} />}
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </>
      )}
      {!user && <>Not logged in</>}
    </div>
  );
}
