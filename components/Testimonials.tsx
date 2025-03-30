import Image from 'next/image'

const testimonials = [
  {
    name: "VERONICA",
    text: "Insanely satisfied! I received incredibly high-quality service. The salon pleased me, I really recommend it!",
    image: "/images/veronica.jpg"
  },
  {
    name: "ALINA",
    text: "The salon is very nice, the staff is very pleasant. I recommend this salon, excellent service.",
    image: "/images/alina.jpg"
  }
]

const Testimonials = () => {
  return (
    <section className="bg-beige py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-serif text-greenish mb-8">Our customers</h2>
      <div className="flex overflow-x-auto gap-6">
        {testimonials.map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg min-w-[300px] shadow-md flex-shrink-0">
            <Image src={item.image} alt={item.name} width={60} height={60} className="rounded-full mb-4" />
            <h3 className="font-bold mb-2">{item.name}</h3>
            <p className="text-sm text-gray-700">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
