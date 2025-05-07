import Image from 'next/image'

interface Props {
    name: string
    image: string
    position: string
}

export default function TeamCard({ name, image, position }: Props) {
    return (
        <div className="bg-white shadow-md rounded-xl p-4 text-center transform transition-transform duration-300 hover:scale-105 active:scale-105">

        <Image
            src={image}
            alt={name}
            width={120}
            height={120}
            className="mx-auto rounded-full object-cover"
        />
        <h4 className="mt-4 text-lg font-semibold text-blue-900">{name}</h4>
        <p className="text-gray-600 text-sm">{position}</p>
        </div>
    )
}
