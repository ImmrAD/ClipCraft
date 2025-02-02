import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-midnight text-purple-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Logo */}
          <div className="mb-4">
            <img src="/footerLogo.png" alt="logo" className="h-16" />
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 mb-4">
            <a
              href="https://www.instagram.com/vedant_bonde18?igsh=cHp0cG13NjQzOHFi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-blue-500"
            >
              <FaInstagram className="text-2xl hover:text-blue-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/vedant-bonde-435590289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app "
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-blue-500"
            >
              <FaLinkedin className="text-2xl hover:text-blue-500" />
            </a>
          </div>

          {/* Contact Info - Reach Out Section */}
          <div className="flex flex-col items-center justify-center mb-4">
            <p className="text-lg">Reach out to us at:</p>
            <a
              href="mailto:contact@yourdomain.com"
              className="text-lg hover:text-blue-500"
            >
              vedant.clipcraft@gmail.com
            </a>
          </div>

         {/* Important Links */}
<div className="flex space-x-6 mb-4">
  <a
    href="/privacy-policy"
    className="text-sm hover:text-blue-500"
  >
    Privacy Policy
  </a>
  <a
    href="/terms-and-conditions"
    className="text-sm hover:text-blue-500"
  >
    Terms & Conditions
  </a>
  <a
    href="/about"
    className="text-sm hover:text-blue-500"
  >
    About Us
  </a>
  <a
    href="https://wa.me/+918766658439"
    className="text-sm hover:text-blue-500"
    target="_blank"  // This opens the WhatsApp chat in a new tab
    rel="noopener noreferrer"
  >
    Contact Us
  </a>
</div>


          {/* Copyright */}
          <div className="text-sm">
            <p>&copy; {new Date().getFullYear()} Clip Craft. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
