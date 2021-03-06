import Link from "next/link";

export default function CategoryList({ categories }) {
  return (
    <div className="w-full px-10 py-6 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl bg-black text-white p-3 rounded">
        Blog Categories
      </h3>
      <ul className="divide-y divide-gray-300">
        {categories.map((category, index) => (
          <Link
            key={index}
            href={`/blog/category/${category.toLowerCase()}`}
            passHref
          >
            <li className="p-4 cursor-pointer hover:bg-gray-100">{category}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
