const Hero = () => {
  return (
    <div className="font-sans relative overflow-hidden">
    
      <svg
        className="absolute top-0 right-0 transform translate-x-70 -translate-y-40" 
        width="600"
        height="600"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: 30 }).map((_, i) => (
          <circle
            key={i}
            cx="300"
            cy="300"
            r={200 + i * 10}
            stroke="rgba(202, 112, 235, 0.99)" 
            strokeWidth="0.5"
          />
        ))}
      </svg>

   
      <svg
        className="absolute bottom-0 left-0 transform -translate-x-90 translate-y-150" 
        width="800"
        height="800"
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: 30 }).map((_, i) => (
          <circle
            key={i}
            cx="400"
            cy="400"
            r={300 + i * 10}
            stroke="rgba(226, 9, 246, 0.2)" /* Adjust purple color with opacity */
            strokeWidth="0.5"
          />
        ))}
      </svg>

      
      <header className="py-16 px-8 md:px-20 text-center relative z-10">
        
        <div className="text-sm border border-gray-200 md:inline-block px-4 py-[2px] rounded-full mb-4  text-center md:text-left">
  <span className="rounded-full bg-black text-white px-7 py-2  md:inline-block ">
    Be our partner
  </span>
  <span className="text-gray-700 block md:inline-block mt-2 md:mt-0 ml-4 text-lg ">
    Check out to invest in our success →
  </span>
</div>

        <h1 className="text-3xl md:text-7xl font-bold text-gray-900 leading-tight">
          High-performing remote teams. <br /> The future of work.
        </h1>
        <p className="mt-16 text-gray-500 max-w-3xl mx-auto text-lg">
          Powerful, self-serve team engagement tools and analytics. Supercharge
          your managers & keep employees engaged from anywhere.
        </p>
        <div className="mt-6 text-lg text-gray-500">
          <span className="font-medium text-yellow-500">★★★★★</span> 4.5 (from
          200+ reviews)
        </div>
        <div className="mt-6 flex justify-center gap-4">
          <button className="px-6 py-2 border rounded-md text-black-600 border-gray-600 hover:bg-blue-50">
            Contact Us →
          </button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Join Us →
          </button>
        </div>
      </header>
    </div>
  );
};

export default Hero;
