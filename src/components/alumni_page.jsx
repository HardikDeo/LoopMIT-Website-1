'use client';
import 'bootstrap/dist/css/bootstrap.min.css';

// Using URL imports for images with spaces in filenames
const Sougata = '/src/alumni_pics/SOUGATA_MAJI.jpg';
const Aashish_Kumar = '/src/alumni_pics/Aashish_Kumar.jpg';
const Sahil_Sinha = '/src/alumni_pics/Sahil_Sinha.jpg';
const Shlok = '/src/alumni_pics/  Shlok Singh Ahluwalia.jpg';
const Preyaan = '/src/alumni_pics/  Preyaan_Gupta.jpg';
const Amrit = '/src/alumni_pics/  Amrit R.jpg';
const Jash = '/src/alumni_pics/  Jash_Shah.jpg';
const Nikhil = '/src/alumni_pics/Nikhil_Gupta.jpg';
const HimaNandhan = '/src/alumni_pics/  HimaNandhan Alla.jpg';
const Karan = '/src/alumni_pics/Karan_Kapoor.jpeg';
const Rahul = '/src/alumni_pics/Rahul Sethia.jpg';
const Pugazhendhi = '/src/alumni_pics/Pugazhendhi Priyan.jpeg';
const Swetank = '/src/alumni_pics/Swetank Awasthi.jpg';
const Abhishek = '/src/alumni_pics/  Abhishek Prakash.jpg';
const Tejas = '/src/alumni_pics/Tejas Gajjala.jpg';
import '../style.css'
// changes on line 109

// simple classnames helper (avoids importing project-specific utils)
import { LinkedinIcon } from "lucide-react";

const alumniMembers = [
  {
    id: 1,
    name: 'Soumya Maji',
    role: 'Technical Head',
    bio: 'It has been a great honour to serve this team. I\'m incredibly proud of my juniors who have carried forward the legacy with consistency and dedication, helping us win our first prize.',
    image: Sougata,
    academicYear: '2023-24',
    linkedin: 'https://www.linkedin.com/in/sougata-maji-15171a239',
  },
  {
    id: 2,
    name: 'Aashish Kumar',
    role: 'Co-founder, Levitation Head',
    bio: 'Any idea can snowball into something much bigger than you ever imagined',
    image: Aashish_Kumar ,
    academicYear: '2019-20',
    linkedin: 'https://www.linkedin.com/in/aashish-kumar-703915174',
  },
  {
    id: 3,
    name: 'Sahil Sinha',
    role: 'Electrical Head',
    bio: 'We\'re the future.... Believe in yourself',
    image: Sahil_Sinha,
    academicYear: '2023-24',
    linkedin: 'https://www.linkedin.com/in/sahil-sinha-75b140236/',
  },
  {
    id: 4,
    name: 'Shlok Singh Ahluwalia',
    role: 'Team Leader',
    bio: 'WORK.',
    image: Shlok,
    academicYear: '2023-24',
    linkedin: 'https://www.linkedin.com/in/shlok-singh-ahluwalia-a1b56b225/',
  },
  {
    id: 5,
    name: 'Preyaan Gupta',
    role: 'Co-founder / Technical Head',
    bio: 'Surreal to see the size of the community. Super proud of the members who have taken this project forward.',
    image: Preyaan,
    academicYear: '2019-20',
    linkedin: 'https://www.linkedin.com/in/preyaangupta/',
  },
  {
    id: 6,
    name: 'Amrit R',
    role: 'Team Leader',
    bio: 'I\'m so happy to see the team has finally started actively participating in competitions and excelling in them.',
    image: Amrit,
    academicYear: '2023-24',
    linkedin: 'https://www.linkedin.com/in/amrit-r-h1410',
  },
  {
    id: 7,
    name: 'Jash Shah',
    role: 'Founder, Team Lead',
    bio: 'Keep building!',
    image: Jash,
    academicYear: '2019-20',
    linkedin: 'https://www.linkedin.com/in/jash-shah-2b790146',
  },
  {
    id: 8,
    name: 'Nikhil Gupta',
    role: 'Electronics Subsystem Head',
    bio: 'Keep forging ahead. I\'m glad small setbacks never deterred the team and you guys did amazing!',
    image: Nikhil,
    academicYear: '2020-21',
    linkedin: 'https://www.linkedin.com/in/nikhil-gupta2/',
  },
  {
    id: 9,
    name: 'HimaNandhan Alla',
    role: 'Mechanical Head',
    bio: 'Mahendra janatics',
    image: HimaNandhan,
    academicYear: '2020-21',
    linkedin: 'https://www.linkedin.com/in/himanandhan-alla-b7a17624a',
  },
  {
    id: 10,
    name: 'Karan Kapoor',
    role: 'Co-founder, Vehicle Dynamics Lead',
    bio: 'I believe this is one of the most exciting emerging technologies to work on. The skills developed are highly transferable.',
    image: Karan,
    academicYear: '2019-21',
    linkedin: 'https://www.linkedin.com/in/karan-kapoor-25b3ab145',
  },
  {
    id: 11,
    name: 'Rahul Sethia',
    role: 'Levitation and Propulsion Head',
    bio: 'Being a part of this incredible journey has been one of the most rewarding experiences of my college life.',
    image: Rahul,
    academicYear: '2020-21',
    linkedin: 'https://www.linkedin.com/in/rahul-sethia-b7a17624a',
  },
  {
    id: 12,
    name: 'Pugazhendhi Priyan',
    role: 'Mechanical Head',
    bio: 'To the heart and brilliance of LoopMIT, our collective pursuit of the extraordinary defines us. #keeploopin',
    image: Pugazhendhi,
    academicYear: '2022-23',
    linkedin: 'https://www.linkedin.com/in/pugazhendhipriyan',
  },
  {
    id: 13,
    name: 'Swetank Awasthi',
    role: 'Co-founder and Structures Head',
    bio: 'LoopMIT began as a bold idea—to bring futuristic transport closer to reality through student-led innovation.',
    image: Swetank,
    academicYear: '2019-20',
    linkedin: 'https://www.linkedin.com/in/swetank-awasthi-b7a17624a',
  },
  {
    id: 14,
    name: 'Abhishek Prakash',
    role: 'Technical Head',
    bio: 'You guys are doing absolutely amazing! Keep up the good work. Make sure you guide the juniors very well.',
    image: Abhishek,
    academicYear: '2021-22',
    linkedin: 'https://www.linkedin.com/in/abhishek-prakash-99744b199',
  },
  {
    id: 15,
    name: 'Tejas Gajjala',
    role: 'Propulsion Head',
    bio: 'Your hands-on engineering, teamwork, and deep research are the real wins. Keep learning, keep building, keep loopin\'.',
    image: Tejas,
    academicYear: '2020-21',
    linkedin: 'https://www.linkedin.com/in/tejas-gajjala/',
  },
];

export default function AlumniSection({
  title = 'Meet Our Alumni',
  subtitle = 'The visionary minds who built the foundation of LoopMIT',
}) {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            {subtitle}
          </p>
        </div>

        {/* Alumni Grid */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 auto-rows-fr justify-center">
          {alumniMembers.map((member) => (
            <AlumniCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AlumniCard({ member }) {
  return (
    <div className="group bg-card border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
      {/* Image Container */}
      <div className="">
        <img
          src={member.image}
          alt={member.name}
          className="w-200px h-200px transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=300&background=6366f1&color=ffffff&bold=true`;
          }}
        />
        <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-md font-medium">
          {member.academicYear}
        </div>
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col flex-1">
        <div className="mb-2">
          <h3 className="font-semibold text-base leading-tight mb-1 line-clamp-2">
            {member.name}
          </h3>
          <p className="text-primary text-xs font-medium line-clamp-2">
            {member.role}
          </p>
        </div>

        <p className="text-muted-foreground text-xs leading-relaxed flex-1 line-clamp-3 mb-3">
          {member.bio}
        </p>

        {/* LinkedIn Link */}
        <div className="mt-auto pt-2 border-t border-border">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <LinkedinIcon size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}