"use client";

import React from "react";
import { Mail, MapPin, Linkedin, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = React.useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (showSuccess) setShowSuccess(false);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Contact form submitted:", form);
    setShowSuccess(true);
  }

  return (
    <main className="min-h-screen pt-24 px-6">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text">
            Contact
          </h1>
          <p className="mt-4 text-brand-text-muted max-w-2xl mx-auto">
            Have a project in mind, an opportunity to discuss, or just want to
            say hello? Drop a message and I&apos;ll get back to you.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-[rgba(21,26,33,0.4)] backdrop-blur-md border border-[rgba(0,255,194,0.08)] p-6">
              <h2 className="text-lg font-semibold text-brand-text mb-4">
                Contact Info
              </h2>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 rounded-full bg-[rgba(0,255,194,0.12)] border border-[rgba(0,255,194,0.35)] p-2 text-brand-mint">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-brand-text font-medium">Email</p>
                    <p className="text-brand-text-muted">
                      yourname@example.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 rounded-full bg-[rgba(0,255,194,0.12)] border border-[rgba(0,255,194,0.35)] p-2 text-brand-mint">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-brand-text font-medium">Location</p>
                    <p className="text-brand-text-muted">[City, Country]</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 rounded-full bg-[rgba(0,255,194,0.12)] border border-[rgba(0,255,194,0.35)] p-2 text-brand-mint">
                    <Linkedin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-brand-text font-medium">LinkedIn</p>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-mint hover:underline"
                    >
                      linkedin.com/in/your-profile
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-[rgba(11,13,16,0.7)] backdrop-blur-md border border-[rgba(0,255,194,0.08)] p-5 text-sm text-brand-text-muted">
              Prefer async communication? Feel free to send links, sketches, or
              rough ideas. I enjoy collaborating early in the process.
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="rounded-2xl bg-[rgba(21,26,33,0.4)] backdrop-blur-md border border-[rgba(0,255,194,0.12)] p-6 md:p-7 shadow-[0_0_18px_rgba(0,0,0,0.45)]">
            <h2 className="text-lg font-semibold text-brand-text mb-4">
              Let&apos;s work together
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium uppercase tracking-wide text-brand-text-muted mb-1.5"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-lg bg-[rgba(21,26,33,0.3)] border border-white/10 px-3 py-2.5 text-sm text-brand-text placeholder:text-brand-text-muted/70 focus:outline-none focus:border-brand-mint focus:shadow-[0_0_15px_rgba(0,255,194,0.2)] transition"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium uppercase tracking-wide text-brand-text-muted mb-1.5"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="yourname@example.com"
                  className="w-full rounded-lg bg-[rgba(21,26,33,0.3)] border border-white/10 px-3 py-2.5 text-sm text-brand-text placeholder:text-brand-text-muted/70 focus:outline-none focus:border-brand-mint focus:shadow-[0_0_15px_rgba(0,255,194,0.2)] transition"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-medium uppercase tracking-wide text-brand-text-muted mb-1.5"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project idea, collaboration, or question"
                  className="w-full rounded-lg bg-[rgba(21,26,33,0.3)] border border-white/10 px-3 py-2.5 text-sm text-brand-text placeholder:text-brand-text-muted/70 focus:outline-none focus:border-brand-mint focus:shadow-[0_0_15px_rgba(0,255,194,0.2)] transition"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium uppercase tracking-wide text-brand-text-muted mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  className="w-full rounded-lg bg-[rgba(21,26,33,0.3)] border border-white/10 px-3 py-2.5 text-sm text-brand-text placeholder:text-brand-text-muted/70 focus:outline-none focus:border-brand-mint focus:shadow-[0_0_15px_rgba(0,255,194,0.2)] transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-mint to-brand-cyan px-4 py-2.5 text-sm font-semibold text-brand-bg shadow-[0_0_18px_rgba(0,255,194,0.2)] transition-transform transition-shadow duration-200 hover:-translate-y-[2px] hover:shadow-[0_0_24px_rgba(0,255,194,0.35)]"
              >
                <span>Send Message</span>
                <Send className="h-4 w-4" />
              </button>

              {showSuccess && (
                <div className="mt-4 rounded-lg border border-[rgba(0,255,194,0.35)] bg-[rgba(0,255,194,0.08)] px-3 py-2 text-xs font-medium text-brand-mint">
                  Message sent! This is a preview status message for future
                  integration.
                </div>
              )}
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}