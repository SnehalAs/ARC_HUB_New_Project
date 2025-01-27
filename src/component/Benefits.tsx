
import { CheckCircle } from "lucide-react";

const Benefits = () => {
  const benefitsList = [
    {
      title: "On time delivery",
      description: "Clarity gives you the blocks & components you need to create a website.",
    },
    {
      title: "Dedicated Project Manager",
      description: "Clarity gives you the blocks & components you need to create a website.",
    },
    {
      title: "24×7 round the clock support",
      description: "Clarity gives you the blocks & components you need to create a website.",
    },
    {
      title: "100% customer satisfaction",
      description: "Clarity gives you the blocks & components you need to create a website.",
    },
    {
      title: "Escrow account keeping your money safe",
      description: "Clarity gives you the blocks & components you need to create a website.",
    },
    {
      title: "Escrow account keeping your money safe",
      description: "Clarity gives you the blocks & components you need to create a website.",
    },
  ];

  return (
    <section className=" bg-gray-50 py-18 px-8 w-full">
      <div className="container mx-auto">
      <h2 className="text-center text-4xl font-bold [background: rgba(15, 23, 42, 1 )];
]">
        Benefits to Join Hubnex Labs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mt-16 md:mx-34 px-2 py-4 ">
        {benefitsList.map((benefit, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl py-10 px-8 border border-gray-200 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-2 mb-4 ">
              <CheckCircle className="text-blue-600" size={20} />
              <h3 className="font-bold text-lg text-gray-800">{benefit.title}</h3>
            </div>
            <p className="text-black-600 text-lg md:ml-8">{benefit.description}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Benefits;
