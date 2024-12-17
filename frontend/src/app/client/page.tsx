"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Page() {
  const [num, setNum] = useState<number | null>(null);

  const fetchNumber = async () => {
    const res = await fetch("http://localhost:8000/api/");
    const data = await res.json();
    setNum(data.num);
  };

  useEffect(() => {
    fetchNumber();
  }, []);

  return (
    <>
      <Link
        href="/"
        className="pl-5 pt-5 text-lg text-blue-500 hover:underline"
      >
        ← BACK
      </Link>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-6xl font-bold">Fetched via the client</h1>
        <p className="mt-3 text-2xl">Random number: {num}</p>
        <button
          className="mt-5 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={fetchNumber}
        >
          Fetch Again
        </button>
      </div>
    </>
  );
}
