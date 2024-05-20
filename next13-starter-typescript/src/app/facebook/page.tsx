"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";
const page = () => {
  const router = useRouter();
  const handleBtn = () => {
    router.push("/");
  };
  return (
    <div>
      facebook page
      <div>
        <Button variant="success">Primary</Button>{" "}
        <button onClick={handleBtn}>back</button>
      </div>
    </div>
  );
};

export default page;
