import Link from "next/link"
import Image from "next/image"
import { projects } from "@/data/projects"

export default function RecentAdditions() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Recent Additions</h2>
      <div className="grid gap-4">
        {projects.slice(0, 3).map((work) => (
          <Link key={work.href} href={work.href} className="flex items-center gap-4" prefetch={false}>
            <Image
              src={work.image}
              alt={work.imageAlt}
              width={80}
              height={80}
              className="rounded-lg object-cover object-left-top w-20 h-20 shrink-0"
            />
            <div>
              <h3 className="text-lg font-medium">{work.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{work.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
