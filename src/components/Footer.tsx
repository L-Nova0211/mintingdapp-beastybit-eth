export default function Footer() {
  return (
    <footer className="w-full text-center border-t-[1px] border-gray-500 py-10">
      <div className="text-white">
        Join our{" "}
        <a
          className="text-red-700 hover:text-blue-700 duration-300 hover:underline cursor-pointer"
          href="https://twitter.com/beasty_bits"
          target="_blank"
          rel="referrer"
        >
          Twitter
        </a>{" "}
        &{" "}
        <a
          className="text-red-700 hover:text-blue-700 duration-300 hover:underline cursor-pointer"
          href="https://discord.gg/5AhU6N7spB"
          target="_blank"
          rel="referrer"
        >
          Discord{" "}
        </a>
        to stay up to date.
      </div>
    </footer>
  );
}
