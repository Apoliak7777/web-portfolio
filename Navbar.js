import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-white text-lg font-bold">Portfolio</a>
        </Link>
        <div className="space-x-4">
          <Link href="/#home">
            <a className="text-gray-300 hover:text-white">Home</a>
          </Link>
          <Link href="/#about">
            <a className="text-gray-300 hover:text-white">About</a>
          </Link>
          <Link href="/#projects">
            <a className="text-gray-300 hover:text-white">Projects</a>
          </Link>
          <Link href="/#contact">
            <a className="text-gray-300 hover:text-white">Contact</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
