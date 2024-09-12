import Link from "next/link"
import Image from "next/image"

const projectsData = [
  {
    id: 1,
    href: "https://jsstorefrontend.vercel.app/",
    imageSrc: "/assets/portfolioimages/Screen Shot 2024-05-18 at 5.22.32 PM.png",
    imageAlt: "Jacob Supply Project Image",
    title: "Jacob Supply Project",
    description: "A website for a local construction supply resale store"
  },
  {
    id: 2,
    href: "https://www.iwctoledo.com/",
    imageSrc: "/assets/portfolioimages/Screen Shot 2024-05-18 at 5.25.30 PM.png",
    imageAlt: "Integrety Wall and Ceiling Project Image",
    title: "Integrety Wall and Ceiling Project",
    description: "A website for a local comercial drywall company"
  },
  {
    id: 3,
    href: "https://ligt-my-logo.vercel.app/",
    imageSrc: "/assets/portfolioimages/Screen Shot 2024-05-18 at 5.54.57 PM.png",
    imageAlt: "Scotty B's LEDs Project Image",
    title: "Scotty B's LEDs Project",
    description: "A website for a local LED lighting and sign company"
  },
  {
    id: 4,
    href: "https://nextgenprop.vercel.app/",
    imageSrc: "/assets/portfolioimages/Screen Shot 2024-09-02 at 8.14.44 AM.png",
    imageAlt: "Next Generation Properties Project Image",
    title: "Next Generation Properties Project",
    description: "a wibsite for a local comercial construction company"
  },
  {
    id: 5,
    href: "https://dominguezprop.vercel.app/",
    imageSrc: "/assets/portfolioimages/Screen Shot 2024-09-03 at 10.47.31 AM.png",
    imageAlt: "Dominguez Properties Project Image",
    title: "Dominguez Properties Project",
    description: "A website for a local comercial and residential management company"
  },
  {
    id: 6,
    href: "https://www.chirhostrength.com/",
    imageSrc: "/assets/portfolioimages/Screen Shot 2024-09-10 at 7.48.28 PM.png",
    imageAlt: "Chi-Rho Power and Strength Project Image",
    title: "Chi-Rho Power and Strength Project",
    description: "A website for a local gym and personal training company"
  },
  {
    id: 7,
    href: "https://mazzaspizza.vercel.app/",
    imageSrc: "/assets/portfolioimages/Screen Shot 2024-09-10 at 7.49.00 PM.png",
    imageAlt: "Mazza's Pizza Project Image",
    title: "Mazza's Pizza Project",
    description: "A website for a local pizza restaurant"
  }
  // Add more projects as needed
]

export default function PortfolioTile() {
  return (
    <>
      {projectsData.map((project) => (
        <Link
          key={project.id}
          href={project.href}
          className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
          prefetch={false}
        >
          <Image
            src={project.imageSrc}
            alt={project.imageAlt}
            width={600}
            height={400}
            className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300 ease-in-out"
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