export default function ProgressBar() {
  return (
    <div aria-hidden="true" className="flex h-2 w-1/5 rounded-md border">
      <div className="animate-progress-bar bg-steel-blue h-1.5 w-full"></div>
    </div>
  );
}
