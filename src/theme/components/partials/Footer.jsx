import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-6">
      <div className="max-w-screen-xxl mx-auto flex flex-col md:flex-row justify-between gap-10">

        {/* Left Section: Logo + Social */}
        <div className="flex flex-col gap-4">
          <img src="https://www.lekkeslaap.co.za/cdn/images/brand/ls/logos/logo.svg" alt="LekkeSlaap" className="h-10" />
          <div className="flex gap-4 text-2xl">
            <a href="#" aria-label="TikTok" className="hover:text-orange-500">🎵</a>
            <a href="#" aria-label="Instagram" className="hover:text-orange-500">📷</a>
            <a href="#" aria-label="YouTube" className="hover:text-orange-500">▶️</a>
            <a href="#" aria-label="Facebook" className="hover:text-orange-500">📘</a>
          </div>
          <button className="mt-2 text-orange-500 border border-orange-500 px-4 py-2 rounded hover:bg-orange-50">
            Verander na Afrikaans
          </button>
        </div>

        {/* Middle Section: What does Lekke mean */}
        <div className="flex-1">
          <h4 className="font-bold mb-2">What does lekke mean?</h4>
          <p className="text-gray-700">
            <strong>lekke</strong> <em>adj. (Afr., slang.)</em> From Afr. <em>lekker</em> as in the expression Jy moet lekker slaap. Describes something that is enjoyable.
            <br /><br />
            <em>Have a lekke stay; What a lekke website to book accommodation in South Africa and Namibia; They're a lekke group of people.</em>
          </p>
        </div>

        {/* Right Section: More handy links */}
        <div className="flex flex-col gap-2">
          <h4 className="font-bold mb-2">More handy links</h4>
          <ul className="space-y-1 text-orange-500">
            <li><a href="/contact">Contact LekkeSlaap</a></li>
            <li><a href="/rewards">LekkeSlaap Rewards</a></li>
            <li><a href="/host">Host with Us</a></li>
            <li><a href="/gift-vouchers">Gift Vouchers</a></li>
            <li><a href="/blog">LekkeSlaap Blog</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>

        {/* App Download Promo */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="bg-gray-50 rounded-lg p-4 text-center md:text-right">
            <p className="font-semibold">Download our app, it’s <span className="text-orange-500">easy!</span></p>
            <img src="https://tvg-newsletter.imgix.net/TG/744/c0bcab30-4470-443e-bfaa-df2009459dad.png" 
                 alt="App Preview" className="mt-2 w-40 mx-auto md:mx-0 rounded" />
          </div>
          <div className="flex gap-2 mt-2">
            <a href="#"><img src="/icons/google-play.png" alt="Google Play" className="h-10"/></a>
            <a href="#"><img src="/icons/app-gallery.png" alt="AppGallery" className="h-10"/></a>
            <a href="#"><img src="/icons/app-store.png" alt="App Store" className="h-10"/></a>
          </div>
        </div>

      </div>
    </footer>
  );
}
