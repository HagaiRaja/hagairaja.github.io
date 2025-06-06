import Link from 'next/link'

const navItems = {
  '/blog': {
    name: 'Blog',
  },
  '/project': {
    name: 'Projects',
  },
}

export function Navbar() {
  return (
    <nav
      className="relative top-0 p-4 lg:p-8 flex items-center justify-center bg-slate-800"
    >
      <div className="flex flex-row justify-between w-full max-w-5xl">
        <Link href="/" className="flex items-center">
          <img src="/assets/logo.webp" alt="Logo" className="h-10 w-10" />
          <span className="text-2xl font-semibold ml-2 hidden md:inline">Hagai Raja Sinulingga</span>
        </Link>
        <div className="flex flex-row space-x-0 pr-10">
            <Link
            href={"https://docs.google.com/document/d/1PAnb7E2UbHvO4xNhsdhI4HNgPG7Wxp8RpyCimj7Tvdk"}
            className="transition-all hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
            target="_blank"
            rel="noopener noreferrer"
            >
            CV
            </Link>

            <Link
            href={"https://tested-death-7a3.notion.site/Welcome-to-Hagai-s-Portfolio-52252508e9704107ac233b8ac6e30011"}
            className="transition-all hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
            target="_blank"
            rel="noopener noreferrer"
            >
            Portfolio
            </Link>

          {/* {Object.entries(navItems).map(([path, { name }]) => {
          return (
            <Link
            key={path}
            href={path}
            className="transition-al hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
            >
            {name}
            </Link>
          )
          })} */}
        </div>
      </div>
    </nav>
  )
}
