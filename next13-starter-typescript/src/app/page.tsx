"use client";
import Link from "next/link";
import style from "@/style/app.module.css";
import TableList from "@/components/Table";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const res = async () => {
      const response = await fetch("http://localhost:8000/blogs");
      return await response.json();
    };
    res();
  }, []);

  return (
    <main>
      <ul>
        <li className={style["red"]}>
          <Link href="/facebook">FaceBook</Link>
        </li>
        <li>
          <Link href="/youtube">Youtube</Link>
        </li>
        <li>
          <Link href="/tiktok">Tiktok</Link>
        </li>
      </ul>
      <TableList />
    </main>
  );
}
