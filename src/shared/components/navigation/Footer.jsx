export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-center px-6">

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Smartify. All rights reserved.
        </p>

      </div>
    </footer>
  );
}