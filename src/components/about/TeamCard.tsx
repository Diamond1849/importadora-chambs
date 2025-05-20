'use client'

import Image from 'next/image'

export default function TeamCard({ name, image, position }: { name: string; image: string; position: string }) {
    return (
        <div className="flex min-w-64 flex-col items-center text-center p-4 bg-white rounded-xl shadow-md transition-transform duration-300 hover:scale-105">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
            <Image
            src={image}
            alt={name}
            width={128}
            height={128}
            className="object-cover w-full h-full"
            />
        </div>
        <h3 className="text-lg font-semibold text-blue-800">{name}</h3>
        <p className="text-sm text-gray-600">{position}</p>
        </div>
    )
}
