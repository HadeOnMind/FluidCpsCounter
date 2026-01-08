export default function ConfigArea() {
  return (
    <div className="w-[280px] bg-neutral-900 rounded-xl p-4 flex flex-col gap-6 shadow-lg">

      {["TIME CONFIG", "COLORS CONFIG", "AREA CONFIG"].map(title => (
        <div key={title} className="flex flex-col gap-2">
          <h2 className="text-sm font-semibold text-neutral-200 border-b border-neutral-700 pb-1">
            {title}
          </h2>

          <ul className="text-sm text-neutral-400 space-y-1">
            <li>Label</li>
            <li>Label</li>
            <li>Label</li>
            <li>Label</li>
          </ul>
        </div>
      ))}

      <button className="
        mt-2
        bg-emerald-600 hover:bg-emerald-500
        text-white
        py-2 rounded-lg
        text-sm font-medium
        transition
      ">
        Save config
      </button>
    </div>
  );
}
