"use client";

import { Session } from "next-auth";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ACTIVE_ROUTE = "py-1 px-2 text-white bg-cyan-700";
const INACTIVE_ROUTE =
  "py-1 px-2 text-cyan-500 hover:text-gray-300 hover:bg-cyan-700";

const Header = () => {
  const { data, status } = useSession();
  const pathname = usePathname();

  return (
    <header className="p-4">
      <div className="flex justify-between border-neutral-700 border w-full">
        <Profile data={data} status={status} />
        {status === "unauthenticated" && (
          <button onClick={() => signIn()}>Sign in</button>
        )}
        {status === "authenticated" && (
          <button onClick={() => signOut()}>Sign out</button>
        )}
        {status === "loading" && <button>Loading...</button>}
      </div>

      <ul className="w-9/12 mx-auto p-4">
        <Link href="/">
          <li className={pathname === "/" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
            Home
          </li>
        </Link>
        <Link href="/protected-data">
          <li
            className={
              pathname === "/protected-data" ? ACTIVE_ROUTE : INACTIVE_ROUTE
            }
          >
            See Sensitive Data
          </li>
        </Link>
        <Link href="/server-action">
          <li
            className={
              pathname === "/server-action" ? ACTIVE_ROUTE : INACTIVE_ROUTE
            }
          >
            Call Server Action
          </li>
        </Link>
        <Link href="/api-from-client">
          <li
            className={
              pathname === "/api-from-client" ? ACTIVE_ROUTE : INACTIVE_ROUTE
            }
          >
            Call API From Client
          </li>
        </Link>
        <Link href="/api-from-server">
          <li
            className={
              pathname === "/api-from-server" ? ACTIVE_ROUTE : INACTIVE_ROUTE
            }
          >
            Call API From Server
          </li>
        </Link>
      </ul>

      <hr className="my-4" />
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
