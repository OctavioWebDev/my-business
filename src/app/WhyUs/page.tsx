import Link from "next/link";
import Image from "next/image";
import { FaCalendarAlt as CalendarIcon, FaClock as ClockIcon } from 'react-icons/fa';

export default function WhyUs() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-transparent to-emerald-950">
      <main className="flex-1 container px-4 md:px-6 py-12 grid md:grid-cols-[3fr_1fr] gap-12">
        <article className="prose max-w-none">
          <div className="space-y-2 not-prose">
            <h1 className="text-4xl text-yellow-700 font-extrabold tracking-tight lg:text-5xl">Why Choose Us?</h1>
            <div className="flex items-center gap-4">
              <div>
                <Image src="/assets/images/myHeadshot.png" alt="Author" width={40} height={40} className="rounded-full" />
              </div>
              <div>
                <span className="font-medium">Octavio Sanchez</span>
                <span className="mx-2">•</span>
                <time dateTime="2024-05-31">May 31, 2024</time>
              </div>
            </div>
          </div>
          <p className="text-white">
            When it comes to building and maintaining websites, there are many paths to success. Whether you are using a custom stack or a CMS like WordPress or Shopify, each approach has its strengths and unique advantages. Here’s a look at why our custom solutions stand out and how our skills can complement existing CMS platforms.
          </p>
          <figure>
            <Image
              src="/assets/images/maik-jonietz-_yMciiStJyY-unsplash.jpg"
              alt="Cover image"
              width={1250}
              height={340}
              className="aspect-video overflow-hidden rounded-lg object-cover"
            />
            <figcaption className="text-center">Picture by: Maik Jonietz on Unsplash</figcaption>
          </figure>

          <h2 className="font-extrabold text-2xl text-white">
            Custom Solutions vs. CMS Platforms
          </h2>
          <p className="text-white">
            Custom solutions, using technologies like Next.js, React, Tailwind CSS, MongoDB, and Express, provide unparalleled flexibility and performance. Here are the key differences:
          </p>

          <h3 className="font-extrabold text-xl text-white">Flexibility and Customization</h3>
          <p className="text-white">
            Custom solutions allow for tailored features and functionalities specific to your business needs. Unlike CMS platforms, which can be limited by plugins and templates, custom development enables full control over the website's look, feel, and behavior.
          </p>

          <h3 className="font-extrabold text-xl text-white">Performance</h3>
          <p className="text-white">
            Utilizing Next.js and React, we build highly optimized websites with fast load times and smooth interactions. This can significantly improve user experience and SEO rankings compared to some CMS platforms, which may be bogged down by unnecessary bloat.
          </p>

          <h3 className="font-extrabold text-xl text-white">Scalability</h3>
          <p className="text-white">
            With custom solutions, your website can grow alongside your business without being constrained by the limitations of a CMS. Whether it’s adding new features, integrating with third-party services, or handling increased traffic, custom-built sites offer superior scalability.
          </p>

          <h3 className="font-extrabold text-xl text-white">Security</h3>
          <p className="text-white">
            Security is paramount. Custom solutions can be more secure as they are not as widely targeted by attackers as popular CMS platforms. Additionally, we can implement specific security measures tailored to your site’s needs.
          </p>

          <h2 className="font-extrabold text-2xl text-white">Leveraging Our Skills with Existing CMS Websites</h2>
          <p className="text-white">
            If you already have a website built on a CMS like WordPress or Shopify, our expertise can still add significant value:
          </p>

          <h3 className="font-extrabold text-xl text-white">Enhancements and Customizations</h3>
          <p className="text-white">
            We can build custom plugins or themes for WordPress, or apps for Shopify, to extend the functionality of your existing site beyond its standard capabilities.
          </p>

          <h3 className="font-extrabold text-xl text-white">Performance Optimization</h3>
          <p className="text-white">
            By optimizing your CMS setup, we can improve load times, enhance user experience, and boost your SEO rankings. This includes optimizing images, implementing caching strategies, and minimizing the use of heavy plugins.
          </p>

          <h3 className="font-extrabold text-xl text-white">Security Improvements</h3>
          <p className="text-white">
            We can enhance the security of your CMS-based website by implementing best practices, regular updates, and custom security solutions to protect against common threats.
          </p>

          <h3 className="font-extrabold text-xl text-white">Seamless Integrations</h3>
          <p className="text-white">
            Our skills allow us to integrate your CMS with other tools and platforms seamlessly. Whether it’s a CRM, email marketing service, or e-commerce platform, we ensure everything works together harmoniously.
          </p>

          <blockquote className="text-yellow-700">
            Choosing the right approach for your website can make a world of difference.
          </blockquote>
          <p className="text-white">
            Whether you prefer a custom-built solution for its flexibility and performance or a CMS for its ease of use and quick setup, our expertise ensures you get the best of both worlds. We are committed to delivering high-quality, scalable, and secure websites that meet your unique business needs. Contact us today to learn more about how we can help elevate your online presence.
          </p>
        </article>
        <div className="space-y-8">
          {/* <div>
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <div className="grid gap-2">
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                Technology
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                Lifestyle
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                Travel
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                Business
              </Link>
            </div>
          </div> */}
          <div>
            <h2 className="text-xl font-bold mb-4">Recent Posts</h2>
            <div className="grid gap-4">
              <Link href="/Design" className="flex items-center gap-4 hover:bg-yellow-700 dark:hover:bg-gray-800 rounded-lg p-3 transition-colors" prefetch={false}>
                <Image
                  src="/assets/images/andrew-neel-cckf4TsHAuw-unsplash.jpg"
                  alt="Recent Post"
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-lg font-medium">Why A Good Websit Matters</h3>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                    <CalendarIcon className="w-4 h-4" />
                    <span>May 31, 2024</span>
                  </div>
                </div>
              </Link>
              <Link href="/Maintenance" className="flex items-center gap-4 hover:bg-yellow-700 dark:hover:bg-gray-800 rounded-lg p-3 transition-colors" prefetch={false}>
                <Image
                  src="/assets/images/vitolda-klein-lAqSzwr5eQc-unsplash.jpg"
                  alt="Recent Post"
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-lg font-medium">The Importance of Web Maintenance</h3>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                    <CalendarIcon className="w-4 h-4" />
                    <span>May 31, 2024</span>
                  </div>
                </div>
              </Link>
              <Link href="/Marketing" className="flex items-center gap-4 hover:bg-yellow-700 dark:hover:bg-gray-800 rounded-lg p-3 transition-colors" prefetch={false}>
                <Image
                  src="/assets/images/nasa-Q1p7bh3SHj8-unsplash (1).jpg"
                  alt="Recent Post"
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-lg font-medium">The Art of Marketing</h3>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                    <CalendarIcon className="w-4 h-4" />
                    <span>May 31, 2024</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/DataBaseCreationMaintenance"
                className="flex items-center gap-4 hover:bg-yellow-700 dark:hover:bg-gray-800 rounded-lg p-3 transition-colors"
                prefetch={false}
              >
                <Image
                  src="/assets/images/matthieu-beaumont-iYnpYeyu57k-unsplash.jpg"
                  alt="Recent blog post"
                  width={80}
                  height={80}
                  className="rounded-lg w-20 h-20 object-cover"
                />
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold">Understanding Databases and Their Maintenance</h4>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                    <CalendarIcon className="w-4 h-4" />
                    <span>May 31, 2024</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/API"
                className="flex items-center gap-4 hover:bg-yellow-700 dark:hover:bg-gray-800 rounded-lg p-3 transition-colors"
                prefetch={false}
              >
                <Image
                  src="/assets/images/gabriel-heinzer-g5jpH62pwes-unsplash.jpg"
                  alt="Recent blog post"
                  width={80}
                  height={80}
                  className="rounded-lg w-20 h-20 object-cover"
                />
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold">Understanding APIs and Their Importance</h4>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                    <CalendarIcon className="w-4 h-4" />
                    <span>May 31, 2024</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/WebDevDeploy"
                className="flex items-center gap-4 hover:bg-yellow-700 dark:hover:bg-gray-800 rounded-lg p-3 transition-colors"
                prefetch={false}
              >
                <Image
                  src="/assets/images/annie-spratt-QckxruozjRg-unsplash.jpg"
                  alt="Recent blog post"
                  width={80}
                  height={80}
                  className="rounded-lg w-20 h-20 object-cover"
                />
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold">The Essence of Web Development and the Power of a Strong Development Team</h4>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                    <CalendarIcon className="w-4 h-4" />
                    <span>May 31, 2024</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

