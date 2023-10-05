"use client"; // Error components must be Client Components

import { Session, getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(
  async function Vendors({}) {
    const { user } = (await getSession()) as Session;

    return (
      <>
        <h2>Vendors</h2>
        <p>Vendor list goes here</p>
        <p>Hello {user.name}</p>
      </>
    );
  },
  { returnTo: "/vendors" }
);
