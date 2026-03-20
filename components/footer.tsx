"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full bg-gray-100 border-t mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">

          {/* Platform */}
          <div>
            <h3 className="font-semibold mb-3">Platform</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/explore">Explore</Link>
              </li>
              <li>
                <Link href="/upload">Upload</Link>
              </li>
              <li>
                <Link href="/awards">Awards</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Brand */}
          <div>
            <h3 className="font-semibold mb-3">MyShot.pi</h3>
            <p className="text-gray-600 text-sm">
              Global Image Marketplace powered by Pi Network.
            </p>
          </div>

        </div>

        <div className="border-t mt-8 pt-6 text-center text-xs text-gray-500">
          © 2026 MyShot.pi. All rights reserved.
        </div>

      </div>
    </footer>
  )
}
