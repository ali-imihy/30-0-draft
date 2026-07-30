import type { Tag } from "@/types/game";

type TagPillProps = {
  tag: Tag;
};

export default function TagPill({ tag }: TagPillProps) {
  return (
    <span className="rounded-full border border-neutral-700 bg-neutral-900 px-2.5 py-1 text-xs font-medium text-neutral-300">
      {formatTag(tag)}
    </span>
  );
}

function formatTag(tag: Tag) {
  return tag
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}