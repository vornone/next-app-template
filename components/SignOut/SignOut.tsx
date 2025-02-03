'use client';


import React from "react";
import { Button } from "@mantine/core";
import { auth0 } from "@/lib/auth0";

function SignOut() {
    const handleLogOut = () => {
        window.location.href = '/auth/logout';
      }
  return <Button onClick={handleLogOut}>Sign Out</Button>;
}

export default SignOut;
