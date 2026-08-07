import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#111111] text-white py-24 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">

        <p className="uppercase tracking-[5px] text-orange-500 text-sm">
          Contact
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Let's Work Together
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Whether you're looking for professional photography,
          expedition documentation, commercial projects,
          or fine art prints, I'd love to hear from you.
        </p>

        <div className="mt-12 space-y-6">

          <div className="flex justify-center items-center gap-3">
            <Phone className="text-orange-500" size={22} />
            <span>
              +91 70646 72597 | +91 78945 47110
            </span>
          </div>

          <div className="flex justify-center items-center gap-3">
            <Mail className="text-orange-500" size={22} />
            <a
              href="mailto:debiprasaddas21@gmail.com"
              className="hover:text-orange-500 transition"
            >
              debiprasaddas21@gmail.com
            </a>
          </div>

        </div>

        <div className="flex justify-center gap-8 mt-12">

          <a
            href="https://www.facebook.com/share/194sJe9cVZ/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            <Facebook size={30} />
          </a>

          <a
            href="https://www.instagram.com/debiprasad_21?igsh=MW15eHowN29tZWNybQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            <Instagram size={30} />
          </a>

          <a
            href="https://www.linkedin.com/in/debiprasadgeology"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            <Linkedin size={30} />
          </a>

        </div>

      </div>
    </section>
  );
}