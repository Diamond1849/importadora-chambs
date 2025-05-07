'use client'

import TeamCard from './TeamCard'

export default function MeetTheTeam() {
    const team = [
        { name: 'John Doe', image: '/john.png', position: 'Operations Manager' },
        { name: 'Jane Smith', image: '/jane.png', position: 'Marketing Lead' },
        { name: 'Mike Brown', image: '/mike.png', position: 'Tech Specialist' },
        { name: 'Justhin Charles', image: '/justhin.jpg', position: 'Manager' },
        { name: 'Emily Maso', image: '/emily.jpg', position: 'Marketing' }
    ]

    return (
        <section className="py-14 px-15 sm:px-8 md:px-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

            {team.map((member) => (
            <TeamCard
                key={member.name}
                name={member.name}
                image={member.image}
                position={member.position}
            />
            ))}
        </div>
        </section>
    )
}
