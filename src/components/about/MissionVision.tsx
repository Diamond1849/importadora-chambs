'use client'

import Image from 'next/image'

export default function MissionVision() {
    return (
        <section className="flex flex-col md:flex-row items-center gap-8 py-14 px-10 sm:px-8 md:px-16">
        <div className="flex-1">
            <h2 className="text-blue-900 text-2xl font-bold mb-4">Mission & Vision</h2>
            <p className="text-amber-50 mb-4">
            Our mission is to deliver high-quality auto parts that enhance the performance and reliability of our customers' vehicles. We are committed to providing exceptional service and building long-term relationships with our partners.
            </p>
            <h3 className="text-blue-900 text-xl font-semibold mb-2">Vision</h3>
            <p className="text-amber-50">
            We envision a future where every driver has access to premium auto parts and expertise, ensuring their vehicles run at their best. Through innovation and dedication in auto parts industry.
            </p>
        </div>
        <div className="flex-1">
            <Image
            src="/team-placeholder.jpg"
            alt="Our Team"
            width={500}
            height={400}
            className="rounded-lg object-cover w-full h-auto"
            />
        </div>
        </section>
    )
}
