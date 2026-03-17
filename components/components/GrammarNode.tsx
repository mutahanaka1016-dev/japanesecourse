export default function GrammarNode({ category, onTogglePoint, completedPoints }: any) {
  return (
    <div className="mb-8 p-4 border rounded-lg bg-white shadow-sm">
      <h3 className="font-bold text-lg mb-2">{category.title}</h3>
      <ul className="space-y-2">
        {category.points.map((point: any) => (
          <li key={point.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={completedPoints.has(point.id)}
              onChange={() => onTogglePoint(point.id)}
            />
            <span className={completedPoints.has(point.id) ? "line-through text-gray-400" : ""}>
              {point.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
