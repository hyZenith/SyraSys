import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex items-center justify-center bg-white px-4 text-center font-poppins">
      <div className="relative mb-6 w-full max-w-2xl">
        <Image
          src="/cat-404.png"
          alt="404 Cat Illustration"
          width={800}
          height={600}
          className="mx-auto h-auto w-full object-contain"
          priority
        />
      </div>

      <div className='flex-col'>
        <h1 className="mb-3 text-4xl font-bold tracking-tight text-[#161616] sm:text-5xl md:text-[3.5rem]">
          Oops!
        </h1>

        <p className="mx-auto mb-10 max-w-[28rem] text-base font-medium text-gray-500 sm:text-lg leading-relaxed">
          It seems our kitty has knocked this page off the table. Let&apos;s get you back to the homepage
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-xl bg-[#1a1a1a] px-8 py-4 text-[15px] font-semibold tracking-wide text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:shadow-xl active:scale-95"
        >
          Back to Home
        </Link>

      </div>
    </div>
  );
}
