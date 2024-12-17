import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold pb-5">🤔</h1>
      <Link href="/client" className="text-lg text-blue-500 hover:underline">
        Client
      </Link>
      <Link href="/server" className="text-lg text-blue-500 hover:underline">
        Server
      </Link>
    </div>
  );
}
