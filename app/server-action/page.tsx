"use client";

import { useState } from "react";
import { userInfoAction } from "./actions";

export default function WhoAmIButton() {
  const [name, setName] = useState<string>();
  return (
    <div>
      <button
        className="underline"
        onClick={async () => {
          setName(await userInfoAction());
        }}
      >
        Click to get User Info
      </button>
      {name && <div>You are {name}</div>}
    </div>
  );
}
