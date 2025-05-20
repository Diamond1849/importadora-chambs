'use client'

import TeamCard from './TeamCard'

export default function MeetTheTeam() {
    const team = [
        { name: 'Edisson Chamba', image: '/meet_the_team/edisson.png', position: 'Gerente General' },
        { name: 'Carolina Borja', image: '/meet_the_team/carolina.png', position: 'Contabilidad' },
        { name: 'Victoria Rubio', image: '/meet_the_team/victoria.jpg', position: 'Atención al cliente' },
        { name: 'Rosman Jiménez', image: '/meet_the_team/rosman.png', position: 'Bodega' },
        { name: 'Franklin Eugenio', image: '/meet_the_team/franklin.png', position: 'Ventas' }
    ]

    return (
        <section className="py-14 px-15 sm:px-8 md:px-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Meet the Team</h2>
        <div className="flex flex-wrap gap-4 justify-around">

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
