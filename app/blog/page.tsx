import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
        <p className="text-neutral-400 w-[100px] tabular-nums">
          2021-09-XX
        </p>
        <p className="text-neutral-100 tracking-tight">
          Coming soon!
        </p>
      </div>
      {/* <BlogPosts /> */}
    </section>
  )
}
