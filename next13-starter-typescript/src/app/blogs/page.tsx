"use client";
import TableList from "@/components/Table";
import React from "react";
import useSWR from "swr";

const defauBlogPage = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";
  return (
    <div>
      <TableList blogs={[...data].reverse() ?? []} />
    </div>
  );
};

export default defauBlogPage;
