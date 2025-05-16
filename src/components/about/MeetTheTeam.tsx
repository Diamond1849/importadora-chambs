'use client'

import TeamCard from './TeamCard'

export default function MeetTheTeam() {
    const team = [
        { name: 'Eddisson Chamba', image: '/meet_the_team/edisson.jpg', position: 'Gerente General' },
        { name: 'Carolina Borja', image: '/meet_the_team/carolina.jpg', position: 'Contabilidad' },
        { name: 'Victoria Rubio', image: '/meet_the_team/victoria.jpg', position: 'Atención al cliente' },
        { name: 'Rosman Jiménez', image: '/meet_the_team/rosman.jpg', position: 'Bodega' },
        { name: 'Kevin Chamba', image: '/meet_the_team/kevin.jpg', position: 'Auxiliar de Bodega' },
        { name: 'Franklin Eugenio', image: '/meet_the_team/franklin.jpg', position: 'Ventas' },
        { name: 'Christopher Calle', image: '/meet_the_team/christopher.jpg', position: 'Ventas' },
        { name: 'Kevin Arcos', image: '/meet_the_team/arcos.jpg', position: 'Ventas' },
        { name: 'Alex Alarcon', image: '/meet_the_team/alex.jpg', position: 'Ventas' }
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
