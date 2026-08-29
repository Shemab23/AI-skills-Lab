import React from "react";
import certificate from "../assets/certificate.jpg";

export const Certificate = () => {
  return (
    <section className="w-full py-24 px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Certificate Preview */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <img
              src={certificate}
              alt="Bootcamp completion certificate"
              className="h-auto w-full object-cover"
            />
          </div>

          <p className="mt-4 text-center text-sm text-neutral-500">
            A certificate you can keep, share, and add to your professional
            profile.
          </p>
        </div>

        {/* Content */}
        <div className="max-w-xl">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-neutral-500">
            What you earn
          </span>

          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            You don’t just finish the bootcamp.
            <span className="text-neutral-500">
              {" "}
              You leave with something to show for it.
            </span>
          </h2>

          <p className="mt-6 text-base leading-7 text-neutral-600">
            Complete the bootcamp and you’ll receive a certificate recognizing
            your achievement. It’s designed to be more than something that sits
            in your downloads folder.
          </p>

          <p className="mt-4 text-base leading-7 text-neutral-600">
            Add it to your LinkedIn profile, share it with your network, or
            simply keep it as proof of what you built and learned throughout the
            experience.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <div className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-700">
              ✓ Bootcamp completion
            </div>

            <div className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-700">
              ✓ Shareable online
            </div>

            <div className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-700">
              ✓ LinkedIn ready
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
