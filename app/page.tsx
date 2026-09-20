import Image from "next/image";
import Icon from "./icon.svg";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center">
        <header className="flex flex-col items-center justify-center">
          <Image
            src={Icon}
            unoptimized
            alt="CrossFit Leek Logo"
            className="size-16 lg:size-24"
          />
          <h1 className="flex flex-wrap font-header text-3xl lg:text-5xl font-extrabold tracking-wide uppercase">
            <p className="flex items-center">
              C<span className="text-2xl lg:text-4xl">ross</span>f
              <span className="text-2xl lg:text-4xl">it</span>
            </p>
            <p className="ml-2 text-primary">Leek</p>
          </h1>
          <h2 className="uppercase font-extralight lg:text-lg">
            Move like a human
          </h2>
        </header>
      </main>
    </div>
  );
}
