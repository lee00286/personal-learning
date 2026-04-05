import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-md text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Select the rendering strategy you want to test.
          </h1>

          <div className="flex flex-col gap-4 text-base font-medium">
            <a
              href="/csr"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground py-2 px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc"
            >
              Client Side Rendering (CSR)
            </a>
            <a
              href="/ssr"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground py-2 px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            >
              Server Side Rendering (SSR)
            </a>
            <a
              href="/ssg"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground py-2 px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            >
              Static Site Generation (SSG)
            </a>
            <a
              href="/isr"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground py-2 px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            >
              Incremental Static Regeneration (ISR)
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
