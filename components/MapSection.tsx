const MapSection = () => {
    return (
      <section id="contact" className="bg-greenish text-white py-16 px-6">
        <h2 className="text-3xl font-serif mb-6">Our address</h2>
  
        <div className="w-full h-64 mb-6 rounded-[40px] overflow-hidden">
          <iframe
            src="https://www.google.com/maps?q=Odesa,+Shishkina,+60B&output=embed"
            className="w-full h-full"
            loading="lazy"
          ></iframe>
        </div>
  
        <div className="text-sm space-y-2 text-center md:text-left">
          <p>📍 <strong>Odesa, Shishkina, 60B</strong></p>
          <p>📧 <a href="mailto:judys.salon@example.com">judys.salon@example.com</a></p>
          <p>📞 <a href="tel:+380637231210">+380 (63) 723 12 10</a></p>
          <div className="flex justify-center md:justify-start gap-4 mt-4 text-white">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://snapchat.com" target="_blank" rel="noopener noreferrer">Snapchat</a>
          </div>
        </div>
      </section>
    )
  }
  
  export default MapSection
  