"use client";
import Link from "next/link";
export default function Home() {
  //sử dụng swr để fetching data

  return (
    <main>
      <ul>
        <li>
          <Link href="/facebook">FaceBook</Link>
        </li>
        <li>
          <Link href="/youtube">Youtube</Link>
        </li>
        <li>
          <Link href="/tiktok">Tiktok</Link>
        </li>
      </ul>
    </main>
  );
}
