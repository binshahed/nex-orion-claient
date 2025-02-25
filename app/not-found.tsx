import Link from "next/link";

const NotFound = () => {
  return (
    <main className="h-[80vh] w-full flex flex-col justify-center items-center bg-backgroundBlue">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-red px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button className="mt-5">
        <a className="relative inline-block text-sm font-medium text-white group active:text-orange-500 focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-red group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-red border border-current">
            <Link href="/">Home</Link>
          </span>
        </a>
      </button>
    </main>
  );
};

export default NotFound;
