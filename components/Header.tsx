export default function Header() {
  return (
    <header className="flex flex-col gap-2 border-b border-neutral-900 pb-4 md:flex-row md:items-end md:justify-between">
      <div>

        <h1 className="font-deadlock neon-text mt-1 text-4xl font-black tracking-wide md:text-5xl">
          30-0 Draft
        </h1>
      </div>

      <p className="max-w-xl text-sm text-neutral-400">
        Draft abilities from random Deadlock heroes and try to go 30-0!
      </p>
    </header>
  );
}