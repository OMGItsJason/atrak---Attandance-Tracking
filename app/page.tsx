import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Link
          href="/instructor-registration"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Instructor Registration
        </Link>
      </main>
    </div>
  );
}
