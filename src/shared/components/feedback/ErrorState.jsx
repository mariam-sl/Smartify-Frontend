import Button from "@/shared/components/ui/Button";

export default function ErrorState({title = "Something went wrong",message = "An unexpected error occurred.",onRetry,
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="rounded-full bg-red-100 p-4">
        <span className="text-2xl">
          ⚠️
        </span>
      </div>

      <h2 className="mt-4 text-xl font-semibold text-slate-900">
        {title}
      </h2>

      <p className="mt-2 max-w-md text-sm text-slate-500">
        {message}
      </p>

      {onRetry && (
        <Button
          className="mt-6"
          onClick={onRetry}
        >
          Try Again
        </Button>
      )}
    </div>
  );
}