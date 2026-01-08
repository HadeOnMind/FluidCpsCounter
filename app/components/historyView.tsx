export default function HistoryView() {
  const mockStats = [
    { label: "Result", cps: "9.8" },
    { label: "Result", cps: "9.8" },
    { label: "Result", cps: "9.8" },
    { label: "Result", cps: "9.8" },
  ];

  return (
    <div className="w-5/6 bg-neutral-900 rounded-xl p-4 shadow-lg">

      <h2 className="text-sm font-semibold text-neutral-200 mb-3">
        History
      </h2>

      <ul className="space-y-2">
        {mockStats.map((item, index) => (
          <li
            key={index}
            className="flex justify-between text-sm text-neutral-400"
          >
            <span>{item.label}</span>
            <span className="font-medium text-neutral-200">
              {item.cps}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
