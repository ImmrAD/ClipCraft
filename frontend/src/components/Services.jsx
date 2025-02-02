export default function Services() {
    return (
      <div className="bg-mauve text-midnight">
        {/* Hero Section */}
        <section className="text-white py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-6xl font-extrabold mb-4">Our Services</h1>
            <p className="text-lg md:text-xl">
              From crafting compelling long-form videos to managing your YouTube channel, we provide a suite of services to elevate your content.
            </p>
          </div>
        </section>
  
        {/* Services Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Long-Form Video Editing */}
            <div className="flex flex-col md:flex-row items-center mb-20">
              <div className="w-full md:w-1/2">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Long-Form Video Editing"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 md:pl-12 mt-8 md:mt-0">
                <h2 className="text-4xl font-extrabold mb-4">Long-Form Video Editing</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Whether it's a documentary, corporate video, or a feature-length production, our long-form video editing services ensure your story is told in the most impactful way. We handle everything from pacing and transitions to sound design and color grading.
                </p>
              </div>
            </div>
  
            {/* Short-Form Video Editing */}
            <div className="flex flex-col md:flex-row items-center mb-20">
              <div className="w-full md:w-1/2 md:order-2">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Short-Form Video Editing"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 md:pr-12 mt-8 md:mt-0">
                <h2 className="text-4xl font-extrabold mb-4">Short-Form Video Editing</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Perfect for social media and promotional content, our short-form video editing services deliver punchy, engaging videos that grab attention. Let us help you create reels, TikToks, and ads that captivate your audience.
                </p>
              </div>
            </div>
  
            {/* Podcast Editing */}
            <div className="flex flex-col md:flex-row items-center mb-20">
              <div className="w-full md:w-1/2">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Podcast Editing"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 md:pl-12 mt-8 md:mt-0">
                <h2 className="text-4xl font-extrabold mb-4">Podcast Editing</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Make your podcast shine with professional editing. We handle audio cleanup, background noise removal, and even integrate intro/outro music to ensure your podcast sounds polished and engaging.
                </p>
              </div>
            </div>
  
            {/* YouTube Channel Management */}
            <div className="flex flex-col md:flex-row items-center mb-20">
              <div className="w-full md:w-1/2 md:order-2">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="YouTube Channel Management"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 md:pr-12 mt-8 md:mt-0">
                <h2 className="text-4xl font-extrabold mb-4">YouTube Channel Management</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Take your YouTube channel to the next level with our management services. From video editing to SEO optimization, thumbnail design, and upload scheduling, we handle it all so you can focus on creating content.
                </p>
              </div>
            </div>
  
            {/* Custom Services Section */}
            <div className="py-20 text-white">
              <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-5xl font-extrabold mb-6">Custom Video Editing Solutions</h2>
                <p className="text-lg leading-relaxed mb-12">
                  Got a unique project? Let’s collaborate! Whether it’s wedding videos, music videos, or creative passion projects, we tailor our services to meet your needs.
                </p>
                <button className="bg-white text-teal-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition">
                <a
    href="https://wa.me/+918766658439"
    className="text-sm hover:text-blue-500"
    target="_blank"  // This opens the WhatsApp chat in a new tab
    rel="noopener noreferrer"
  >
                  Get in Touch
                  </a>
                </button>
              </div>
            </div>
          </div>
        </section>
  
        {/* Why Choose Us Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl font-extrabold text-gray-800 mb-6">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              We don’t just edit videos; we bring your ideas to life. Our attention to detail, creativity, and passion for storytelling set us apart. Let’s transform your raw footage into a masterpiece.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-3">Expert Editing</h3>
                <p className="text-gray-700">
                  Over a decade of experience delivering high-quality edits for diverse projects.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-3">Personalized Service</h3>
                <p className="text-gray-700">
                  We work closely with you to ensure your vision is brought to life.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-3">Timely Delivery</h3>
                <p className="text-gray-700">
                  Your deadlines are important to us. We deliver on time, every time.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Call to Action */}
        <section className="py-16 px-6 text-white text-center">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-6">Let’s Create Something Amazing</h2>
            <p className="text-lg mb-8 leading-relaxed">
              Ready to elevate your content? Get in touch with us to learn how we can bring your vision to life with our professional video editing services.
            </p>
            <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition">
            <a
    href="https://wa.me/+918766658439"
    className="text-sm hover:text-blue-500"
    target="_blank"  // This opens the WhatsApp chat in a new tab
    rel="noopener noreferrer"
  >
              Contact Us Today
              </a>
            </button>
          </div>
        </section>
      </div>
    );
  }
  