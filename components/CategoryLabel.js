import Link from "next/link";

export default function CategoryLabel({ children }) {
  const colorKey = {
    JavaScript: "yellow",
    CSS: "blue",
    Python: "green",
    PHP: "purple",
    Ruby: "red",
    "Object Oriented Programming": "lime",
    "Design Principles & Patterns": "teal",
  };

  return (
    <div
      className={`px-2 py-1 bg-category-${colorKey[children]} text-gray-100 font-bold rounded mb-1`}
    >
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  );
}
