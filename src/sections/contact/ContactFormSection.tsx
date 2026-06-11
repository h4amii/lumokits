import { useState } from 'react'
import { ArrowRight, MessageCircle, Mail, Phone, MapPin } from 'lucide-react'
import emailjs from "@emailjs/browser"

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()

  emailjs.send(
    "service_w5sl4re",
    "template_a1ws0ij",
    {
      name: formData.name,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    },
    "VXns6d3zEsq2a6v8f"
  )
  .then(() => {
    alert("Message sent successfully!")
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    })
  })
  .catch((error) => {
    console.error("EmailJS error:", error)
    alert("Failed to send message. Try again.")
  })
}

  const inputClass = "w-full border border-medium-gray rounded-lg px-[18px] py-[14px] font-body text-near-black placeholder:text-cool-gray/60 focus:outline-none focus:border-brand-violet focus:shadow-[0_0_0_3px_rgba(123,47,247,0.12)] transition-all"

  return (
    <section className="bg-white section-padding">
      <div className="container-lumo">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 lg:gap-16">
          {/* Left - Form */}
          <div>
            <h2 className="font-display font-semibold text-deep-charcoal text-[clamp(1.5rem,3vw,2.5rem)] leading-tight mb-2">
              Send Us a Message
            </h2>
            <p className="text-cool-gray text-base mb-8">
              Tell us about your club and what you need. We will reply within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-deep-charcoal mb-1.5">Your Name <span className="text-brand-violet">*</span></label>
                <input type="text" name="name" required placeholder="John Smith" value={formData.name} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium text-deep-charcoal mb-1.5">Club Name <span className="text-brand-violet">*</span></label>
                <input type="text" name="company" required placeholder="Your Football Club" value={formData.company} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium text-deep-charcoal mb-1.5">Email Address <span className="text-brand-violet">*</span></label>
                <input type="email" name="email" required placeholder="john@yourclub.com" value={formData.email} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium text-deep-charcoal mb-1.5">Phone / WhatsApp</label>
                <input type="tel" name="phone" placeholder="+44 7700 000000" value={formData.phone} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium text-deep-charcoal mb-1.5">Message <span className="text-brand-violet">*</span></label>
                <textarea name="message" required rows={5} placeholder="Tell us about your club, how many kits you need, your design ideas..." value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} />
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-brand-violet text-white font-display font-semibold rounded-lg px-8 py-4 hover:bg-[#9B5CFF] hover:shadow-[0_0_24px_rgba(123,47,247,0.35)] transition-all duration-300">
                Send Message
                <ArrowRight size={18} />
              </button>
            </form>
          </div>

          {/* Right - Contact Info */}
          <div className="lg:sticky lg:top-28 self-start">
            <div className="bg-light-silver rounded-xl p-8 md:p-10">
              <h3 className="font-display font-semibold text-deep-charcoal text-xl mb-8">Get in Touch</h3>

              <div className="space-y-7">
                {/* WhatsApp - clickable */}
                <a href="https://wa.me/923284758234" target="_blank" rel="noopener noreferrer" className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                    <MessageCircle size={20} className="text-green-600" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-deep-charcoal group-hover:text-brand-violet transition-colors">+92 328 4758234</p>
                    <p className="text-cool-gray text-xs">Click to chat on WhatsApp</p>
                  </div>
                </a>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-violet/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-brand-violet" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-deep-charcoal">info@lumokits.online</p>
                    <p className="text-cool-gray text-xs">We reply within 24 hours</p>
                  </div>
                </div>

                {/* Phone */}
                <a href="tel:+923284758234" className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-brand-violet/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-brand-violet" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-deep-charcoal group-hover:text-brand-violet transition-colors">+92 328 4758234</p>
                    <p className="text-cool-gray text-xs">Mon–Sat, 9AM–6PM PKT</p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-violet/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-brand-violet" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-deep-charcoal">LumoKits</p>
                    <p className="text-cool-gray text-sm">Sialkot, Punjab, Pakistan</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-medium-gray my-8" />

              {/* Social - Facebook ,insta,tiktok */}
              <div>
                <p className="text-label text-deep-charcoal mb-4">Follow Us</p>
                <div className="flex items-center gap-4">
                  <a
                    href="https://facebook.com/lumokits"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-medium-gray flex items-center justify-center text-cool-gray hover:border-brand-violet hover:text-brand-violet transition-colors"
                    aria-label="Facebook"
                  >
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a
                    href="https://instagram.com/lumokits"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-medium-gray flex items-center justify-center text-cool-gray hover:border-brand-violet hover:text-brand-violet transition-colors"
                    aria-label="Instagram"
                  >
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                   <a
                    href="https://tiktok.com/@lumokits"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-medium-gray flex items-center justify-center text-cool-gray hover:border-brand-violet hover:text-brand-violet transition-colors"
                    aria-label="tiktok"
                  >
                     <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 11-2.89-2.89c.19 0 .38.02.56.06V9.4a6.35 6.35 0 00-.56-.03A6.34 6.34 0 109 21.7a6.35 6.35 0 006.34-6.34V9.04a8.2 8.2 0 004.25 1.17V6.69z"/>
</svg>
                  </a>
                  <span className="text-cool-gray text-sm">@lumokits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
