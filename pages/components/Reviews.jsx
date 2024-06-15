import ReviewField from "./ReviewField";

const testimonials = [
  [
    [
      {
        body: "Professional and quick service - recommend to everyone",
        author: {
          name: "John",
          handle: "john",
        },
      },
      // More testimonials...
    ],
  ],
  [
    [
      {
        body: "Had some structural work done by their boilermaker and it was done perfectly",
        author: {
          name: "Mike",
          handle: "mike",
        },
      },
      // More testimonials...
    ],
    [
      {
        body: "Great value work and amazing people to work with.",
        author: {
          name: "Brendan",
          handle: "brendan",
        },
      },
      // More testimonials...
    ],
  ],
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Review() {
  return (
    <div
      id="reviews"
      className="relative isolate bg-gray-100 pb-32 pt-24 sm:pt-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            See what our valuable customers have to say about us!
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-1 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-3">
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? "xl:row-span-2"
                      : "xl:row-start-1",
                    "space-y-8"
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.handle}
                      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                    >
                      <blockquote className="text-gray-900">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <div>
                          <div className="font-semibold">
                            {testimonial.author.name}
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
        <ReviewField />
      </div>
    </div>
  );
}
