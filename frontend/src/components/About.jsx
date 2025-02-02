export default function About() {
    return (
      <div className="bg-mauve text-midnight">
        {/* Hero Section */}
        <section className=" text-white py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-6xl font-extrabold mb-4">About Us</h1>
            <p className="text-lg md:text-xl">
              Bringing your vision to life with professional video editing, one frame at a time.
            </p>
          </div>
        </section>
  
        {/* Founder and Story */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-extrabold text-gray-800">Our Founder</h2>
              <p className="text-lg md:text-xl text-gray-600 mt-4">
                Meet the visionary behind our journey — a passionate storyteller and a creative innovator.
              </p>
            </div>
  
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <img
                  src="https://via.placeholder.com/400x400"
                  alt="Founder"
                  className="rounded-full shadow-xl w-64 mx-auto"
                />
              </div>
  
              <div className="w-full md:w-1/2 md:pl-12">
                <h3 className="text-3xl font-semibold mb-4">Vedant Bonde, Founder</h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  I’m Vedant Bonde, and I’ve been turning raw footage into beautiful stories for over a decade. 
                  My love for video editing started as a hobby and has evolved into a full-fledged career. 
                  From editing short films to YouTube vlogs, I’ve always aimed to capture the essence of each story 
                  and bring it to life through editing.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Company Story */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-6">Our Story</h2>
            <p className="text-xl text-center text-gray-600 leading-relaxed mb-12">
              Our story began with a simple passion: to craft unforgettable stories through the art of video editing. 
              Over the years, we've worked with individual creators, small businesses, and large brands to transform raw footage 
              into compelling visuals. Today, we are known for our attention to detail, creativity, and commitment to excellence.
            </p>
  
            <div className="flex flex-col md:flex-row items-center space-y-10 md:space-y-0">
              <div className="w-full md:w-1/2">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Our Story"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 md:pl-12">
                <h3 className="text-3xl font-semibold mb-4">How It All Began</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Starting out as a small one-person operation, I poured my heart into every project, no matter how big or small. 
                  It wasn’t long before my passion for editing connected me with clients all over the world. 
                  From humble beginnings, I’ve been able to grow and continuously improve my craft, delivering high-quality edits 
                  that truly capture the vision of my clients.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Mission and Values Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl font-extrabold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Our mission is simple: to empower creators and businesses by providing top-notch video editing services that help bring their visions to life. 
              We understand the power of storytelling, and we are committed to helping our clients tell their stories in the most engaging and impactful way possible.
            </p>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-3">Creativity</h3>
                <p className="text-gray-700">
                  Creativity is at the heart of everything we do. We believe in pushing boundaries to create visually stunning content that tells your unique story.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-3">Quality</h3>
                <p className="text-gray-700">
                  Quality is paramount. We ensure that every video we edit meets the highest standards, delivering exceptional results that exceed your expectations.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-3">Customer-Centric</h3>
                <p className="text-gray-700">
                  We are dedicated to providing a personalized experience for each client. Your satisfaction is our top priority, and we work closely with you to ensure your vision is realized.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Why Choose Us */}
        <section className="py-20 px-6 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl font-extrabold mb-6">Why Choose Us?</h2>
            <p className="text-xl mb-12 leading-relaxed">
              When it comes to video editing, we stand out because of our passion for storytelling and attention to detail. We don’t just edit videos—we transform them into experiences. With years of experience and a personal touch, we’re the go-to choice for creators who want their stories to shine.
            </p>
            <button className=" text-teal-600 font-bold py-3 px-6 rounded-lg hover:bg-teal-200 transition">
              Let’s Make Something Great Together
            </button>
          </div>
        </section>
  
        {/* Call to Action */}
        <section className="py-16 px-6 bg-gray-100 text-center">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-6 text-gray-800">Ready to Bring Your Vision to Life?</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Get in touch with us today, and let’s start editing your next project. Whether it's a personal video, a business advertisement, or a creative project—we’re here to help you tell your story in the most captivating way.
            </p>
            <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition">
              Contact Us Now
            </button>
          </div>
        </section>
      </div>
    );
  }
  