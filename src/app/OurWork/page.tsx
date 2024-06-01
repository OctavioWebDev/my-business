/**
 * v0 by Vercel.
 * @see https://v0.dev/t/72Ehax0j8Nh
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function OurWork() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container px-4 md:px-6 py-12 grid md:grid-cols-[2fr_1fr] gap-12">
        <div className="grid grid-cols-2 gap-4">
          <Link
            href="#"
            className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
            prefetch={false}
          >
            <img
              src="/placeholder.svg"
              alt="Work 1"
              width={600}
              height={400}
              className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent group-hover:from-gray-900/60 transition-colors duration-300 ease-in-out" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-lg font-semibold mb-1">Work 1</h3>
              <p className="text-sm">Description of Work 1</p>
            </div>
          </Link>
          <Link
            href="#"
            className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
            prefetch={false}
          >
            <img
              src="/placeholder.svg"
              alt="Work 2"
              width={600}
              height={400}
              className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent group-hover:from-gray-900/60 transition-colors duration-300 ease-in-out" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-lg font-semibold mb-1">Work 2</h3>
              <p className="text-sm">Description of Work 2</p>
            </div>
          </Link>
          <Link
            href="#"
            className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
            prefetch={false}
          >
            <img
              src="/placeholder.svg"
              alt="Work 3"
              width={600}
              height={400}
              className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent group-hover:from-gray-900/60 transition-colors duration-300 ease-in-out" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-lg font-semibold mb-1">Work 3</h3>
              <p className="text-sm">Description of Work 3</p>
            </div>
          </Link>
          <Link
            href="#"
            className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
            prefetch={false}
          >
            <img
              src="/placeholder.svg"
              alt="Work 4"
              width={600}
              height={400}
              className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent group-hover:from-gray-900/60 transition-colors duration-300 ease-in-out" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-lg font-semibold mb-1">Work 4</h3>
              <p className="text-sm">Description of Work 4</p>
            </div>
          </Link>
          <Link
            href="#"
            className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
            prefetch={false}
          >
            <img
              src="/placeholder.svg"
              alt="Work 5"
              width={600}
              height={400}
              className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent group-hover:from-gray-900/60 transition-colors duration-300 ease-in-out" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-lg font-semibold mb-1">Work 5</h3>
              <p className="text-sm">Description of Work 5</p>
            </div>
          </Link>
          <Link
            href="#"
            className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
            prefetch={false}
          >
            <img
              src="/placeholder.svg"
              alt="Work 6"
              width={600}
              height={400}
              className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent group-hover:from-gray-900/60 transition-colors duration-300 ease-in-out" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-lg font-semibold mb-1">Work 6</h3>
              <p className="text-sm">Description of Work 6</p>
            </div>
          </Link>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold mb-4">About the Gallery</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Welcome to our gallery, where we showcase the best of our creative work. From stunning photography to
              captivating illustrations, our collection reflects our passion for visual storytelling. Explore the tiles
              below to learn more about each piece and the inspiration behind it.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Recent Additions</h2>
            <div className="grid gap-4">
              <Link href="#" className="flex items-center gap-4" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  alt="Recent Work"
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-lg font-medium">New Illustration</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Added 1 week ago</p>
                </div>
              </Link>
              <Link href="#" className="flex items-center gap-4" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  alt="Recent Work"
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-lg font-medium">Landscape Photography</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Added 2 weeks ago</p>
                </div>
              </Link>
              <Link href="#" className="flex items-center gap-4" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  alt="Recent Work"
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-lg font-medium">Abstract Painting</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Added 3 weeks ago</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
