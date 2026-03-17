export default function ProgressBar({ completed, total, level }: { completed: number, total: number, level: string }) {
  const progress = total === 0 ? 0 : (completed / total) * 100;
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
      <div 
        className="h-full bg-blue-500 transition-all duration-500" 
        style={{ width: `${progress}%` }} 
      />
    </div>
  );
}
