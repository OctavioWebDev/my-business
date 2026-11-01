import PortfolioTile from "./components/PortfolioTile"
import RecentAdditions from "./components/RecentAdditions"
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata({
  title: "Our Work",
  description: "Websites and apps built by Quest Web Tech, including Chi-Rho Lifts, Chi-Rho Power and Strength and local construction companies.",
  path: "/OurWork",
});
export default function OurWork() {
  return (
    <div className="flex flex-col bg-gradient-to-b from-transparent to-emerald-950 min-h-screen">
      <main className="flex-1 container mx-auto px-4 md:px-6 py-12 grid md:grid-cols-[2fr_1fr] gap-12">
        <h1 className="sr-only">Our Work</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-start">
          <PortfolioTile />
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-yellow-700">Quest Web Tech</h2>
            <div className="text-gray-300 leading-relaxed">
              Quest Web Development Technologies is a cutting-edge web development company specializing in creating bespoke digital solutions for businesses of all sizes. Our expertise spans web design and development, API creation, database management, and ongoing maintenance services.
              <br /><br />
              We pride ourselves on delivering responsive, user-friendly, and visually appealing websites tailored to each client's unique needs. Our team of skilled professionals leverages the latest technologies and best practices to build high-performance, scalable, and secure web applications.
              <br /><br />
              From crafting intuitive user interfaces to implementing robust backend systems, we ensure every project we undertake reflects our commitment to excellence. Our services include:
              <ul className="list-disc list-inside mt-2 mb-2 text-yellow-700">
                <li>Custom Web Design and Development</li>
                <li>API Development and Integration</li>
                <li>Database Creation and Management</li>
                <li>Web Maintenance and Support</li>
                <li>Digital Marketing Strategies</li>
              </ul>
              At Quest Web Development Technologies, we're not just building websites; we're creating digital experiences that drive business growth and user engagement. Our portfolio showcases a range of successful projects across various industries, demonstrating our versatility and technical prowess.
              <br /><br />
              <strong className="text-yellow-700">Choose Quest Web Development Technologies for your next digital project and experience the perfect blend of creativity, functionality, and cutting-edge technology.</strong>
            </div>
          </div>
          <div>
            <div className="grid gap-4">
              <RecentAdditions />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
