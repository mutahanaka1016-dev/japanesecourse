export default function LevelSelector({ levels, activeLevel, onSelect, completedByLevel }: any) {
  return (
    <div className="flex justify-center gap-2 flex-wrap">
      {levels.map((lvl: any) => (
        <button
          key={lvl.level}
          onClick={() => onSelect(lvl.level)}
          className={`px-4 py-2 rounded-full border ${
            activeLevel === lvl.level ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          {lvl.level}
        </button>
      ))}
    </div>
  );
}
