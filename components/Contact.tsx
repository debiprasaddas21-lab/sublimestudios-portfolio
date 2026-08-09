import { Phone, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black px-5 py-16 text-white sm:px-6 sm:py-20 md:px-10 lg:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-5xl text-center">

        {/* Eyebrow */}
        <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-orange-500 sm:text-sm sm:tracking-[5px]">
          Contact
        </p>


        {/* Heading */}
        <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
          Let's Work Together
        </h2>


        {/* Description */}
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
          Have a photography project, expedition, collaboration or simply want
          to connect? I'd love to hear from you.
        </p>


        {/* Contact Information */}
        <div className="mt-10 space-y-6 sm:mt-14 sm:space-y-5">

          {/* Phone */}
          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">

            <div className="flex items-center gap-2">
              <Phone
                className="text-orange-500"
                size={20}
              />

              <span className="text-sm text-gray-200 sm:text-base">
                Phone
              </span>
            </div>

            <span className="hidden text-gray-600 sm:inline">
              —
            </span>

            <div className="flex flex-col items-center text-sm text-gray-300 sm:flex-row sm:gap-1 sm:text-base">
              <a
                href="tel:+917064672597"
                className="transition hover:text-orange-500"
              >
                +91 70646 72597
              </a>

              <span className="hidden sm:inline text-gray-600">
                |
              </span>

              <a
                href="tel:+917894547110"
                className="transition hover:text-orange-500"
              >
                +91 78945 47110
              </a>
            </div>

          </div>


          {/* Email */}
          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">

            <div className="flex items-center gap-2">
              <Mail
                className="text-orange-500"
                size={20}
              />

              <span className="text-sm text-gray-200 sm:text-base">
                Email
              </span>
            </div>

            <span className="hidden text-gray-600 sm:inline">
              —
            </span>

            <a
              href="mailto:debiprasaddas21@gmail.com"
              className="text-sm text-gray-300 transition hover:text-orange-500 sm:text-base"
            >
              debiprasaddas21@gmail.com
            </a>

          </div>

        </div>


        {/* Social Media */}
        <div className="mt-10 flex justify-center gap-6 sm:mt-14 sm:gap-8">

          {/* WhatsApp */}
          <a
            href="https://wa.me/917064672597"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-300 transition duration-300 hover:border-green-500 hover:text-green-500 sm:h-11 sm:w-11"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={21} />
          </a>


          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/194sJe9cVZ/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-300 transition duration-300 hover:border-blue-500 hover:text-blue-500 sm:h-11 sm:w-11"
            aria-label="Facebook"
          >
            <FaFacebookF size={19} />
          </a>


          {/* Instagram */}
          <a
            href="https://www.instagram.com/debiprasad_21"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-300 transition duration-300 hover:border-pink-500 hover:text-pink-500 sm:h-11 sm:w-11"
            aria-label="Instagram"
          >
            <FaInstagram size={21} />
          </a>


          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/debiprasadgeology"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-300 transition duration-300 hover:border-blue-400 hover:text-blue-400 sm:h-11 sm:w-11"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={19} />
          </a>

        </div>

      </div>
    </section>
  );
}