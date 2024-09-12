"use client";
 
import Link from "next/link";
import { getSession } from "@/utils/sessions";
import { useEffect } from "react";
 
export default function Home() {
    const logSession = async () => {
        const session = await getSession();
        console.log(session);
      };
     
      useEffect(() => {
        logSession();
      }, []);
  return (
    <>
      <h1>MON COMPTE</h1>
      <Link href="/mon-compte/profil">Mon profil</Link>
    </>
  );
}