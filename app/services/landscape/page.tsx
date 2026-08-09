import Image from "next/image";

const photographs = [
  {
    image: "/services/landscape/landscape-01.jpg",
    location: "Near Rani Duduma Waterfall, Odisha, India",
    description: "A beautiful stream ",
  },
  {
    image: "/services/landscape/landscape-02.jpg",
    location: "The Misty Mountains of Eastern Ghats, Odisha, India",
    description: "A breathtaking view of the misty mountains during sunrise",
  },
  {
    image: "/services/landscape/landscape-03.jpg",
    location: "The beauty of Rice Fields in Koraput, Odisha, India",
    description: "The lush green rice fields of Koraput, Odisha, India, captured during the golden hour",
  },
  {
    image: "/services/landscape/landscape-04.jpg",
    location: "Exploring The Bauxite Formations in Eastern Ghats, Odisha, India",
    description: "A stunning view of the Plateau",
  },
  {
    image: "/services/landscape/landscape-05.jpg",
    location: "The Golden Hour Captured while driving through Rayagada, Odisha, India",
    description: "The golden hour light casting long shadows across the landscape",
  },
  {
    image: "/services/landscape/landscape-06.jpg",
    location: "During a Graphite Expedition in Eastern Ghats, Odisha, India",
    description: "Trekking through the rugged terrain of the Eastern Ghats during a graphite expedition",
  },
  {
    image: "/services/landscape/landscape-07.jpg",
    location: "Ash Pond, NALCO, Damanjodi, Odisha, India",
    description: "A view of the ash pond at the NALCO plant",
  },
  {
    image: "/services/landscape/landscape-08.jpg",
    location: "NALCO Plant, Damanjodi, Odisha, India",
    description: "A view of the NALCO plant",
  },
  {
    image: "/services/landscape/landscape-09.jpg",
    location: "Deomali, Odisha, India",
    description: "A peaceful moment amidst the natural beauty of Deomali",
  },
  {
    image: "/services/landscape/landscape-10.jpg",
    location: "Sunrise over the Eastern Ghats, Odisha, India",
    description: "Misty mountains and valleys of the Eastern Ghats during sunrise",
  },
  {
    image: "/services/landscape/landscape-11.jpg",
    location: "A remote stream in the Jungles of Similipal, Odisha, India",
    description: "A serene stream flowing through the dense jungles of Similipal",
  },
  {
    image: "/services/landscape/landscape-12.jpg",
    location: "Relaxing a bit after a long day of Roaming in Deomali, Odisha, India",
    description: "A moment of rest and reflection after a long day of exploring the beautiful landscapes of Deomali",
  },
  {
    image: "/services/landscape/landscape-13.jpg",
    location: "The mesmerizing view while driving through my village, Odisha, India",
    description: "The road surrounded by greenery and scenic beauty",
  },
  {
    image: "/services/landscape/landscape-14.jpg",
    location: "The Himalayas, India",
    description: "View of the majestic Himalayas during sunrise, with snow-capped peaks and a clear blue sky",
  },
  {
    image: "/services/landscape/landscape-15.jpg",
    location: "Nainital, India",
    description: "The Lake Naini surrounded by hills and lush greenery, with a reflection of the sky on the water",
  },
];

export default function LandscapePage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO / INTRO */}
      <section className="px-6 md:px-12 lg:px-20 pt-24 pb-16">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">

          <div className="max-w-4xl">

            <p className="text-orange-500 tracking-[0.45em] text-sm font-medium">
              SUBLIME STUDIOS
            </p>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mt-6">
              Landscape
            </h1>

            <p className="text-gray-400 text-lg md:text-xl leading-9 max-w-4xl mt-8">
              Landscapes shaped by light, atmosphere, geography and perspective.
              A collection of places captured as they were experienced.
            </p>

          </div>

          {/* CATCHY PHRASE */}
          <div className="lg:text-right pb-2">

            <p className="text-gray-500 tracking-[0.35em] uppercase text-sm">
              A Growing Collection
            </p>

            <p className="text-gray-300 mt-2 text-lg">
              Places, light &amp; perspectives
            </p>

          </div>

        </div>
      </section>


      {/* PHOTO COLLECTION */}
      <section className="px-6 md:px-12 lg:px-20 pb-24">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {photographs.map((photo, index) => (

            <article
              key={photo.image}
              className="group"
            >

              {/* IMAGE */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-900">

                <Image
                  src={photo.image}
                  alt={photo.description}
                  fill
                  priority={index < 3}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* SUBTLE HOVER OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              </div>


              {/* PHOTO INFORMATION */}
              <div className="mt-4">

                {/* LOCATION — EDIT THIS IN THE CODE */}
                <h2 className="text-lg font-medium text-white">
                  {photo.location}
                </h2>

                {/* DESCRIPTION — EDIT THIS IN THE CODE */}
                <p className="text-gray-500 text-sm mt-1 leading-6">
                  {photo.description}
                </p>

              </div>

            </article>

          ))}

        </div>

      </section>

    </main>
  );
}