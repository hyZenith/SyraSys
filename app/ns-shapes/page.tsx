export default function NsShapesPage() {
  const shapes = Array.from({ length: 128 }, (_, index) => index + 1);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          NS Shape Icons
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-neutral-600 sm:text-base">
          Preview all available icon classes from <code>ns-shape-1</code> to <code>ns-shape-128</code>.
        </p>
      </header>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {shapes.map((shape) => (
          <article
            key={shape}
            className="group rounded-xl border border-neutral-200 bg-white p-4 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-md"
          >
            <i
              className={`ns-shape-${shape} text-4xl text-neutral-800 transition group-hover:text-emerald-600`}
              aria-hidden
            />
            <p className="mt-3 text-xs text-neutral-600">ns-shape-{shape}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
