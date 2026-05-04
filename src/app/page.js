export default function MainPage() {
  return (
    <div className="flex items-center justify-center h-full w-full">
      Nothing here, return to any surah. For example:{" "}
      <Link href="/1" className="text-primary-500">
        <button className="bg-primary text-white px-4 py-2 rounded-full ml-2">
          Surah 1
        </button>
      </Link>
    </div>
  );
}
