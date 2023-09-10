"use server";
import { getServerSession } from "next-auth";

export const userInfoAction = async () => {
  const session = await getServerSession();
  return session?.user?.name || "Not Logged In";
};
