import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function ProtectedRoute() {
  const session = await getServerSession();

  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }

  return (
    <div>
      This is a protected route.
      <br />
      You will only see this if you are authenticated.
      <strong>Sensitive data: </strong>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim placeat
        voluptates sed, magnam illum, esse nobis commodi iure architecto quaerat
        laborum aspernatur illo quae unde vel mollitia repellendus perferendis
        iusto.
      </p>
    </div>
  );
}
