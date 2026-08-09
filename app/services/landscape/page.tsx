import Image from "next/image";

const photographs = [
  {
    image: "/services/landscape/landscape-01.jpg",
    location: "YOUR LOCATION HERE",
    description: "YOUR DESCRIPTION HERE",
  },
  {
    image: "/services/landscape/landscape-02.jpg",
    location: "YOUR LOCATION HERE",
    description: "YOUR DESCRIPTION HERE",
  },
  {
    image: "/services/landscape/landscape-03.jpg",
    location: "YOUR LOCATION HERE",
    description: "YOUR DESCRIPTION HERE",
  },
  {
    image: "/services/landscape/landscape-04.jpg",
    location: "YOUR LOCATION HERE",
    description: "YOUR DESCRIPTION HERE",
  },
  {
    image: "/services/landscape/landscape-05.jpg",
    location: "YOUR LOCATION HERE",
    description: "YOUR DESCRIPTION HERE",
  },
  {
    image: "/services/landscape/landscape-06.jpg",
    location: "YOUR LOCATION HERE",
    description: "YOUR DESCRIPTION HERE",
  },
  {
    image: "/services/landscape/landscape-07.jpg",
    location: "YOUR LOCATION HERE",
    description: "YOUR DESCRIPTION HERE",
  },
  {
    image: "/services/landscape/landscape-08.jpg",
    location: "YOUR LOCATION HERE",
    description: "YOUR DESCRIPTION HERE",
  },
  {
    image: "/services/landscape/landscape-09.jpg",
    location: "YOUR LOCATION HERE",
    description: "YOUR DESCRIPTION HERE",
  },
  {
    image: "/services/landscape/landscape-10.jpg",
    location: "YOUR LOCATION HERE",
    description: "YOUR DESCRIPTION HERE",
  },
  {
    image: "/services/landscape/landscape-11.jpg",
    location: "YOUR LOCATION HERE",
    description: "YOUR DESCRIPTION HERE",
  },
  {
    image: "/services/landscape/landscape-12.jpg",
    location: "YOUR LOCATION HERE",
    description: "YOUR DESCRIPTION HERE",
  },
  {
    image: "/services/landscape/landscape-13.jpg",
    location: "YOUR LOCATION HERE",
    description: "YOUR DESCRIPTION HERE",
  },
  {
    image: "/services/landscape/landscape-14.jpg",
    location: "YOUR LOCATION HERE",
    description: "YOUR DESCRIPTION HERE",
  },
  {
    image: "/services/landscape/landscape-15.jpg",
    location: "YOUR LOCATION HERE",
    description: "YOUR DESCRIPTION HERE",
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