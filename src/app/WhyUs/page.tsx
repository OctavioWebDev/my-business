import ArticleLayout, { type ArticleMeta } from "@/components/blog/ArticleLayout";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata({
  title: "Why Choose Us",
  description: "How custom-built sites compare with WordPress and Shopify, and how Quest Web Tech can build on either.",
  path: "/WhyUs",
});

const meta: ArticleMeta = {
  title: "Why Choose Us?",
  date: "2024-05-31",
  dateLabel: "May 31, 2024",
  image: "/assets/images/maik-jonietz-_yMciiStJyY-unsplash.jpg",
  imageAlt: "Cover image",
  imageCredit: "Picture by: Maik Jonietz on Unsplash",
};

export default function WhyUs() {
  return (
    <ArticleLayout
      meta={meta}
      intro={
        <>
          When it comes to building and maintaining websites, there are many paths to success. Whether you are using a custom stack or a CMS like WordPress or Shopify, each approach has its strengths and unique advantages. Here’s a look at why our custom solutions stand out and how our skills can complement existing CMS platforms.
        </>
      }
    >
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
    </ArticleLayout>
  );
}
