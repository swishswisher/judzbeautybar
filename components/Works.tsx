import Image from 'next/image'

const Works = () => {
  const images = [
    "/images/work1.jpg",
    "/images/work2.jpg",
    "/images/work3.jpg",
    "/images/work4.jpg"
  ]

  return (
    <section id="gallery" className="bg-beige py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-serif text-greenish mb-8">Our works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {images.map((img, idx) => (
          <div key={idx} className="relative overflow-hidden rounded-lg">
            <Image src={img} alt={`Work ${idx + 1}`} width={500} height={500} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button className="border-2 border-orange-300 px-6 py-2 rounded-tl-full text-orange-600 font-semibold">
          See more
        </button>
      </div>
    </section>
  )
}

export default Works
