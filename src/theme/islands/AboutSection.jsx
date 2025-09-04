import React from "react";

export default function About() {
  return (
    <main className="relative min-h-screen">

      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] bg-white">
        {/* Top Navigation */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between pl-20 relative">
          {/* Logo */}
          <img
            src="https://www.lekkeslaap.co.za/cdn/images/brand/ls/logos/logo.svg?hash=4554655dfa"
            alt="LekkeSlaap Logo"
            className="h-10"
          />

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <div>
              <input
                type="text"
                placeholder="Where are you going?"
                className="p-3 rounded border border-gray-300 text-gray-900"
              />
            </div>

            {/* Search Button */}
            <button
              id="menuToggle"
              className="flex items-center justify-center bg-white rounded-full w-10 h-10 shadow hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* About US Image */}
        <div className="relative flex items-center mt-20">
          <img
            src="https://tripco-static.imgix.net/misc/about_header_banner_en.png?auto=enhance%2Cformat%2Ccompress&fit=crop&crop=center&q=80&ixlib=react-9.9.0&w=1920"
            className="p-20"
            alt="About Banner"
          />
        </div>
      </section>

      {/* Our Story Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Our Story
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Founded in 2013, LekkeSlaap has grown from a proudly South African startup into the country’s leading online travel agency.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"></div>
            <div>
              <img
                src="https://tripco-static.imgix.net/misc/about-us-faded-beach-house.png?auto=enhance%2Cformat%2Ccompress&fit=crop&ixlib=react-9.9.0&q=80&w=1110&h=300&dpr=2"
                alt="Beach House"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="max-w-screen-xxl mx-auto relative p-20 items-center">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
          {/* Left Column */}
          <div className="flex flex-col items-start lg:w-1/2 w-full">
            <h2>How we support you</h2>
            <p className="text-base text-gray-700">
              At LekkeSlaap, we believe in making travel as seamless and stress-free as possible. That’s why we offer a smooth booking process backed by personal customer support from our proudly local staff, available every day of the year until midnight.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-start lg:w-1/2 w-full">
            <h2>How we support you</h2>
            <p className="text-base text-gray-700">
              We’re deeply committed to showcasing the beauty of our country, one unforgettable stay at a time. From holiday homes, guest houses, B&Bs, hotels, resorts and game lodges, we offer something for every taste, need and budget.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {[
            {
              title: "35k+ Stays Across SA",
              text: "A huge variety of properties for all budgets and needs."
            },
            {
              title: "Dedicated Customer Service",
              text: "Local, friendly support every day until midnight."
            },
            {
              title: "Top-Rated by Our Guests",
              text: "Consistently high ratings from thousands of travellers."
            },
            {
              title: "World-Class Experience",
              text: "A seamless booking platform with modern design."
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <hr className="w-[86vw]" />
        </div>
      </section>

      {/* What We Offer Section */}
      <section>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-md md:text-2xl text-gray-800 mb-12">
            Why Choose LekkeSlaap?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "35k+ Stays Across SA",
                text: "A huge variety of properties for all budgets and needs."
              },
              {
                title: "Dedicated Customer Service",
                text: "Local, friendly support every day until midnight."
              },
              {
                title: "Top-Rated by Our Guests",
                text: "Consistently high ratings from thousands of travellers."
              },
              {
                title: "World-Class Experience",
                text: "A seamless booking platform with modern design."
              },
              {
                title: "Get Rewarded Instantly",
                text: "Benefit from promotions and loyalty rewards."
              },
              {
                title: "Support Local Tourism",
                text: "We help local property owners grow their businesses."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="md:text-2xl text-gray-800 mb-12">Our Partners</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              img: "https://tvg-newsletter.imgix.net/LS/693/ffc09d1e-c053-4ee6-b2a1-6b4d184e3fb8.png",
              text: "Book the ultimate dream stay! Sanlam Reality members can save up to 30% on their stays!"
            },
            {
              img: "https://tvg-newsletter.imgix.net/LS/693/4ce13489-7c8b-4b08-9217-a8f6b0e25095.png",
              text: "A holiday you'll never forget! Get up to 30% off stays at over 25,000 places, via Edgarsclubtravel.co.za."
            },
            {
              img: "https://tvg-newsletter.imgix.net/LS/693/dee61967-e178-4ce5-838d-2653ed5cd405.svg",
              text: "With over 55 car rental branches located nationwide, book your ride now!"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition">
              <img src={item.img} alt="Partner" className="h-16" />
              <p className="text-gray-600 text-sm mt-5">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Awards Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Awards & Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "More Than 16 Million Views on YouTube",
              "Leading Travel Agency 2022 - 2025",
              "Die Burger Readers Choice 2021 - 2024",
              "Top Travel Agency Video 2023 - 2024",
              "Rated 4.8 Stars by Over 4800 Guests on Google Merchant",
              "Rated 4.0 Stars by Over 800 Reviews on HelloPeter"
            ].map((text, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow text-gray-700">
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Plan Your Escape!</h2>
          <a
            href="/explore"
            className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg inline-block hover:bg-gray-100 transition"
          >
            Browse over 35k properties
          </a>
        </div>
      </section>
    </main>
  );
}
