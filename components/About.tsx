import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="bg-beige py-16 px-6 max-w-7xl mx-auto">
      <div className="md:flex items-center gap-12">
        <div className="md:w-1/2 relative">
          <div className="rounded-bl-[120px] overflow-hidden">
            <Image
              src="/images/salon.jpg"
              alt="Hair styling"
              width={600}
              height={400}
              className="w-full object-cover"
            />
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <h2 className="text-3xl font-serif text-greenish mb-4">About us</h2>
          <p className="text-gray-700 mb-4">
            The main feature of our beauty salon is modern innovative efficient technologies and solid service principles.
          </p>
          <p className="text-gray-700 mb-4">
            We offer a full range of services from bridal makeup to manicures and pedicures. There are always promotions and discounts for our regular customers.
          </p>
          <p className="text-gray-700">
            Our highly professional staff is always ready to offer our customers a complete set of treatments. We will pick a suitable care just for you.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
