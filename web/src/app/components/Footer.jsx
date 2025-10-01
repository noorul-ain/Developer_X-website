import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#f6efe1] pt-8 pb-10 text-neutral-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <div className="flex items-center gap-2">
            <Image src="/image8.png" alt="Developer.X Logo" width={32} height={28} />
            <div className="text-sm font-semibold text-neutral-900">Developer.X</div>
          </div>
          <p className="mt-3 text-xs text-neutral-600">
            Empowering Developers with cutting-edge insights, tutorials, and industry trends to build the future of technology.
          </p>
          <div className="mt-3 flex items-center gap-3 text-neutral-600">
            <a href="#" aria-label="Twitter" className="hover:text-neutral-800">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2H21.5l-7.5 8.571L22.75 22h-6.01l-4.7-5.657L6.5 22H3.244l8.06-9.2L1.5 2h6.135l4.31 5.143L18.244 2Zm-1.053 18h1.676L7.09 4h-1.7l11.8 16Z"/>
              </svg>
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-neutral-800">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.07-.74.08-.73.08-.73 1.18.08 1.8 1.21 1.8 1.21 1.05 1.8 2.75 1.28 3.42.98.11-.76.41-1.28.75-1.58-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.58.23 2.75.11 3.04.75.81 1.2 1.84 1.2 3.1 0 4.43-2.69 5.39-5.25 5.67.42.36.8 1.07.8 2.17 0 1.57-.01 2.84-.01 3.23 0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" clipRule="evenodd"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-neutral-800">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold text-neutral-900">Quick Links</div>
          <ul className="mt-3 space-y-2 text-xs">
            <li><a href="#" className="hover:text-neutral-900">Home</a></li>
            <li><a href="#" className="hover:text-neutral-900">Articles</a></li>
            <li><a href="#" className="hover:text-neutral-900">Categories</a></li>
            <li><a href="#" className="hover:text-neutral-900">About Us</a></li>
            <li><a href="#" className="hover:text-neutral-900">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-neutral-900">Categories</div>
          <ul className="mt-3 space-y-2 text-xs">
            <li>Web Development</li>
            <li>AI & Machine Learning</li>
            <li>Mobile Development</li>
            <li>DevOps</li>
            <li>Data Science</li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-neutral-900">Stay Updated</div>
          <p className="mt-3 text-xs">Get the latest tech insights delivered to your inbox</p>
          <div className="mt-3 flex gap-2">
            <input className="flex-1 rounded-md bg-white ring-1 ring-neutral-300 px-3 py-2 text-xs outline-none" placeholder="Enter your email" />
            <button className="rounded-md bg-amber-600 text-white text-xs px-3">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-neutral-200 pt-4 text-[11px] text-neutral-500 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-2">
        <div>© 2025 Developer.X, All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-neutral-700">Privacy Policy</a>
          <a href="#" className="hover:text-neutral-700">Terms of Service</a>
          <span>Made by Developer.X</span>
        </div>
      </div>
    </footer>
  );
}


