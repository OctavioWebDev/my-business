import ArticleLayout, { type ArticleMeta } from "@/components/blog/ArticleLayout";
import ContactForm from "@/components/ContactForm";

const meta: ArticleMeta = {
  title: "Contact Us",
  date: "2023-05-01",
  dateLabel: "May 1, 2023",
  image: "/assets/images/kelly-sikkema-gcHFXsdcmJE-unsplash.jpg",
  imageAlt: "Customer Service",
  imageCredit: "Picture by: Kelly Sikkems on Unsplash",
};

export default function ContactPage() {
  return (
    <ArticleLayout
      meta={meta}
      columns="md:grid-cols-[2fr_1fr]"
      aside={<ContactForm title="Contact Form" variant="page" />}
      intro={
        <>
          At Quest Web Tech, we are dedicated to providing exceptional customer service. Our commitment to helping small businesses achieve their goals is at the core of everything we do. Whether you have a question, need support, or want to discuss a new project, we are here to assist you every step of the way.
        </>
      }
    >
      <h2 className="font-extrabold text-white text-2xl">Our Commitment</h2>
      <p className="text-white">
        We understand the challenges small businesses face and are dedicated to offering tailored solutions that drive success. Our team is passionate about technology and innovation, and we strive to deliver the highest quality of service to ensure your business thrives in the digital landscape.
      </p>
      <h2 className="font-extrabold text-white text-2xl">Get in Touch</h2>
      <p className="text-white">
        We look forward to hearing from you. Please fill out the contact form below, and one of our team members will get back to you shortly.
      </p>
    </ArticleLayout>
  );
}
