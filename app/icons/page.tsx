import React from "react";

export default function IconsPage() {
  const icons = Array.from({ length: 128 }, (_, i) => i + 1);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Icon Library</h1>

      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6">
        {icons.map((n) => (
          <div key={n} className="flex flex-col items-center">
            <i className={`ns-shape-${n} text-4xl`} aria-hidden />
            <span className="mt-2 text-xs text-gray-600">ns-shape-{n}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
