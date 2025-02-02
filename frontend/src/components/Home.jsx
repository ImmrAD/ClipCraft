import { TypeAnimation } from 'react-type-animation';

export default function Home() {

  const faqs = [
    {
      question: "Is there life on Mars?",
      answer:
        "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.",
    },
    {
      question: "How much salt is in the ocean?",
      answer:
        "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.",
    },
    {
      question: "Why is the sky blue?",
      answer:
        "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.",
    },
  ];

    return(
        <div className="bg-lavender">
            {/* Video Background */}
            <section className="relative h-[80vh] w-full overflow-hidden z-10">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute inset-0 h-full w-full object-cover z-10">
                    <source src="/HomeBG.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div
  className="relative flex flex-col h-full w-full items-center justify-center bg-opacity-40 z-20 pl-8 text-center">
  <div className="text-5xl font-bold text-mauve mb-6">
    <TypeAnimation
      sequence={[
        'We are always there for Youtubers.',
        1500,
        'We are always there for Content Creators.',
        1500,
        'We are always there for Business.',
        1500,
        'We are always there for Educational Videos.',
        1500,
      ]}
      wrapper="span"
      speed={40}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  </div>
</div>

            </section>

            <section className="flex flex-col lg:flex-row items-center justify-between bg-mauve p-8 lg:p-16">
      {/* Text Section */}
      <div className="lg:w-1/2">
        <div className="flex items-center mb-4">
          <div className="p-2 bg-black text-white rounded-full">
            <span className="text-xl font-bold">⬛</span>
          </div>
        </div>
        <h2 className="text-2xl lg:text-4xl font-bold mb-4">
          Transform Your Videos with Professional Editing Tailored to Your Needs
        </h2>
        <p className="text-gray-600">
          Our expert video editing services enhance your content, ensuring it captivates and engages your audience. From YouTube creators to educational institutions, we bring your vision to life with precision and creativity.
        </p>
      </div>

      {/* Placeholder Image Section */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
        <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
          <span className="text-gray-500">Image Placeholder</span>
        </div>
      </div>
    </section>

    <section className="bg-mauve py-16 px-8">
      {/* Main Header Section */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          Transform Your Videos with Our Expert Services
        </h1>
        <p className="text-gray-600 text-lg">
          We specialize in video editing tailored for YouTubers, businesses, and educational institutions. 
          Our team delivers high-quality edits that enhance your content and engage your audience. 
          Let us help you tell your story through captivating visuals.
        </p>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {/* Card 1 */}
        <div className="text-center border p-6 rounded-lg shadow-lg bg-midnight">
          <div className="text-4xl text-gray-800 mb-4">
            <i className="fas fa-cube"></i> {/* Placeholder icon */}
          </div>
          <h3 className="text-xl font-bold text-lavender mb-2">
            Services for YouTubers to Boost Engagement
          </h3>
          <p className="text-orchid">
            Elevate your YouTube channel with our editing expertise.
          </p>
        </div>

        {/* Card 2 */}
        <div className="text-center border p-6 rounded-lg shadow-lg bg-midnight">
          <div className="text-4xl text-gray-800 mb-4">
            <i className="fas fa-cube"></i> {/* Placeholder icon */}
          </div>
          <h3 className="text-xl text-lavender font-bold mb-2">
            Professional Edits for Businesses and Brands
          </h3>
          <p className="text-orchid">
            Make your corporate videos stand out with us.
          </p>
        </div>

        {/* Card 3 */}
        <div className="text-center border p-6 rounded-lg shadow-lg bg-midnight">
          <div className="text-4xl text-gray-800 mb-4">
            <i className="fas fa-cube"></i> {/* Placeholder icon */}
          </div>
          <h3 className="text-xl text-lavender font-bold mb-2">
            Educational Video Editing for Enhanced Learning
          </h3>
          <p className="text-orchid">
            Engage students with dynamic and informative content.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-mauve py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Unlock Your Potential with Our Professional Video Editing Services
          </h2>
          <p className="text-gray-600 mb-6">
            Transform your raw footage into captivating stories that engage your audience. 
            Our expert editors tailor each project to meet your unique vision and goals.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="text-2xl text-gray-800 mr-4">
                <i className="fas fa-cube"></i> {/* Placeholder icon */}
              </div>
              <span className="text-gray-600">
                Enhance your brand's visibility with stunning visuals.
              </span>
            </li>
            <li className="flex items-start">
              <div className="text-2xl text-gray-800 mr-4">
                <i className="fas fa-cube"></i> {/* Placeholder icon */}
              </div>
              <span className="text-gray-600">
                Save time and focus on what you do best.
              </span>
            </li>
            <li className="flex items-start">
              <div className="text-2xl text-gray-800 mr-4">
                <i className="fas fa-cube"></i> {/* Placeholder icon */}
              </div>
              <span className="text-gray-600">
                Receive personalized support throughout the editing process.
              </span>
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="bg-gray-300 w-full h-64 md:h-96 flex items-center justify-center">
          {/* Placeholder for the image */}
          <i className="fas fa-image text-gray-500 text-6xl"></i>
        </div>
      </div>
    </section>

    <section className="w-full py-12 px-8 bg-mauve">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-black mb-4">
          Let’s Bring Your Vision to Life
        </h2>
        <p className="text-gray-600 mb-6">
          Connect with us today for a personalized video editing quote tailored to your needs.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800">
            Quote
          </button>
          <button className="px-6 py-2 border border-black text-black font-semibold rounded hover:bg-gray-200">
            Contact
          </button>
        </div>
      </div>
    </section>

    <section className="w-full py-12 px-8 bg-mauve">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-black mb-8">Q&A</h2>
        <ul className="space-y-6">
          {faqs.map((faq, index) => (
            <li key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center">
                  ?
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black">
                  {faq.question}
                </h3>
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
        </div>
    )
}