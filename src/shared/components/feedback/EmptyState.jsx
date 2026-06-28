export default function EmptyState({title = "No data found",description = "There is nothing to display here yet.",action,}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="rounded-full bg-slate-100 p-4">
        <span className="text-2xl">
          📭
        </span>
      </div>

      <h2 className="mt-4 text-xl font-semibold text-slate-900">
        {title}
      </h2>

      <p className="mt-2 max-w-md text-sm text-slate-500">
        {description}
      </p>

      {action && (
        <div className="mt-6">
          {action}
        </div>
      )}
    </div>
  );
}