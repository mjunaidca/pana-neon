import { NavBarItem, Instructors } from "@/types"

export const NAVBARITEMS: Array<NavBarItem> = [
    {
        label: 'Syllabus',
        href: "/syllabus"
    },
    {
        label: 'Blog',
        href: "/blog"
    },
    {
        label: 'Announements',
        href: "/announcements"
    },
    {
        label: 'About',
        href: "/about"
    },
]

export const HEADER: string = "Certified Web 3.0 & Metaverse Dev"

export const HEADERDESCRTIPTION: string = `Get Ready for the Next Generation of the Internet. A One and Quarter Years Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies`

export const OUTCOME = {
    head: "Outcome for Participants",
    description: `The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering services at a rate of $50 per hour ($96,000 per year).`
}

export const INSTRUCTORS: Instructors = {
    head: "Learn From The Best",
    mentors: [
        {
            url: 'https://pbs.twimg.com/profile_images/1478630664190795778/xuBHOC65_400x400.jpg',
            name: 'Zia Khan'
        },
        {
            url: 'https://media.licdn.com/dms/image/C4D03AQFuhdYPmkC0sA/profile-displayphoto-shrink_800_800/0/1562700934047?e=1682553600&v=beta&t=YNFjXWIaqJcwsOdPBiqSJH2ZoOgocUw9dniEAuf9-uI',
            name: "Hira Sohaib"
        },
        {
            url: 'https://pbs.twimg.com/profile_images/1183639342956367877/71Sh5fhw_400x400.jpg',
            name: "Daniyal Nagori"
        },
        {
            url: 'https://media.licdn.com/dms/image/C4D03AQGeWhSxfJnvlw/profile-displayphoto-shrink_800_800/0/1632680095611?e=1682553600&v=beta&t=8nn5JzkJLLDzqN02_YuMl-NiRjF3GrPaLRQd4ueiilU',
            name: "Adil Altaf"
        },
    ]
}

export const NUTSHELL = {
    head: "The Program in a Nutshell",
    subHead: `Earn While You Learn`,
    description: `In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program's beginning. It resembles a cross between a corporate venture and an educational project.    `
}


export const CORECOURSES = {
    head: `Core Courses`,
    description: `Every participant of the program will start by completing the following three core courses:`,
    coreQuarters: [
        {
            id: 1,
            label: 'Quarter I',
            details: "CS-101: Object-Oriented Programming using TypeScript"
        },
        {
            id: 2,
            label: 'Quarter II',
            details: `W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs and CDK for Terraform`
        },
        {
            id: 3,
            label: 'Quarter III',
            details: `$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development`
        }]
}