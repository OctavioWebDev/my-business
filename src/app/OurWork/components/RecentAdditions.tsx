import Link from "next/link"
import Image from "next/image"

const recentWorks = [
  {
    id: 1,
    href: "https://jsstorefrontend.vercel.app/",
    imageSrc: "/assets/portfolioimages/Screen Shot 2024-05-18 at 5.22.32 PM.png",
    alt: "Jacob Supply Project Image",
    title: "Jacob Supply Project",
    addedTime: "Added 1 week ago"
  },
  {
    id: 2,
    href: "#",
    imageSrc: "/assets/portfolioimages/Screen Shot 2024-05-18 at 5.54.57 PM.png",
    alt: "Scotty B's LEDs Project Image",
    title: "Scotty B's LEDs Project",
    addedTime: "Added 2 weeks ago"
  },
  {
    id: 3,
    href: "https://mazzaspizza.vercel.app/",
    imageSrc: "/assets/portfolioimages/Screen Shot 2024-09-10 at 7.49.00 PM.png",
    alt: "Mazza's Pizza Project Image",
    title: "Mazza's Pizza Project",
    addedTime: "Added 3 weeks ago"
  }
]

export default function RecentAdditions() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Recent Additions</h2>
      <div className="grid gap-4">
        {recentWorks.map((work) => (
          <Link key={work.id} href={work.href} className="flex items-center gap-4" prefetch={false}>
            <Image
              src={work.imageSrc}
              alt={work.alt}
              width={80}
              height={80}
              className="rounded-lg object-cover"
            />
            <div>
              <h3 className="text-lg font-medium">{work.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{work.addedTime}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
