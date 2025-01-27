const Companies = () => {
  return (
    <div className="container mx-auto">
      <div className="font-sans ">
        <section className="bg-white py-12 px-4 mt-8">
          <h2 className="text-center text-xl font-semibold text-gray-500">
            Join 4,000+ companies already growing
          </h2>
          <div className="flex sm:flex-wrap flex-nowrap justify-center items-center gap-4 overflow-x-auto mb-16 ">
            <img
              src="assets/m1.png"
              alt="Dealers Matrix"
              className="h-12 sm:h-20 w-auto md:h-45 md:w-50 flex-shrink-0 "
            />
            <img
              src="assets/m2.png"
              alt="JSW One"
              className="h-12 sm:h-20 w-auto  md:h-45 md:w-50 flex-shrink-0"
            />
            <img
              src="assets/m3.png"
              alt="AuxoQAI"
              className="h-12 sm:h-20 w-auto md:h-45 md:w-50 flex-shrink-0"
            />
            <img
              src="assets/m4.png"
              alt="Lifesight"
              className="h-12 sm:h-20 w-auto  md:h-45 md:w-50 flex-shrink-0"
            />
            <img
              src="assets/m5.png"
              alt="Axis Bank"
              className="h-10 sm:h-16 w-auto flex-shrink-0 "
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Companies;
