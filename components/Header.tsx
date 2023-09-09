"use client";

import { Session } from "next-auth";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Header = () => {
  const { data, status } = useSession();

  return (
    <header className="flex justify-between border-neutral-700 border p-4">
      <Profile data={data} status={status} />

      {status === "unauthenticated" && (
        <button onClick={() => signIn()}>Sign in</button>
      )}
      {status === "authenticated" && (
        <button onClick={() => signOut()}>Sign out</button>
      )}
      {status === "loading" && <button>Loading...</button>}
    </header>
  );
};

export default Header;

function Profile({
  status,
  data,
}: {
  status: "authenticated" | "loading" | "unauthenticated";
  data: Session | null;
}) {
  return (
    <div>
      {status === "authenticated" ? (
        <div className="flex gap-2 items-center">
          <Image
            src={data?.user?.image ?? ""}
            alt={data?.user?.name ?? ""}
            height={60}
            width={60}
            className="rounded-full"
          />
          <p>{data?.user?.name}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
