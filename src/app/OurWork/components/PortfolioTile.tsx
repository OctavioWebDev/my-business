import Link from "next/link"
import Image from "next/image"
import { projects } from "@/data/projects"

export default function PortfolioTile() {
  return (
    <>
      {projects.map((project) => (
        <Link
          key={project.href}
          href={project.href}
          className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
          prefetch={false}
        >
          <Image
            src={project.image}
            alt={project.imageAlt}
            width={600}
            height={400}
            className="object-cover object-top w-full h-64 group-hover:scale-105 transition-transform duration-300 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/80 to-transparent group-hover:from-yellow-700/60 transition-colors duration-300 ease-in-out" />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
            <p className="text-sm">{project.description}</p>
          </div>
        </Link>
      ))}
    </>
  )
}
