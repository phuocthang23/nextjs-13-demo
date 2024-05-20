"use client";
import Link from "next/link";
import style from "@/style/app.module.css";
import TableList from "@/components/Table";

export default function Home() {
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
