import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="border-b bg-white dark:bg-gray-900 dark:border-gray-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
          CleanNext
        </Link>
        <div className="flex gap-4">
          <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            Home
          </Link>
          <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};
