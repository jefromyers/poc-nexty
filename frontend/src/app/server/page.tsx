import Link from "next/link";

export default async function Home() {
  console.log("Fetching on the server...");
  const res = await fetch("http://backend:8000/api/", { cache: "no-store" });
  const data = await res.json();

  return (
    <>
      <Link
        href="/"
        className="pl-5 pt-5 text-lg text-blue-500 hover:underline"
      >
        ← BACK
      </Link>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-6xl font-bold">Fetched via SSR</h1>
        <p className="mt-3 text-2xl">Random number: {data.num}</p>
      </div>
    </>
  );
}
