import { getSession } from "@auth0/nextjs-auth0";

export default async function ServerUserInfo() {
  const session = await getSession();
  const user = session?.user;

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
