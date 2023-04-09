import { NavBarItem, Instructors } from "@/types"
import { BsFacebook, BsTwitter, BsPlayBtnFill, BsInstagram, BsGithub, BsDiscord } from "react-icons/bs";
import { SocialMedia } from "@/types"

export const NAVBARITEMS: Array<NavBarItem> = [
    {
        label: 'Syllabus',
        href: "/syllabus"
    },
    // {
    //     label: 'Blog',
    //     href: "/blog"
    // },
    // {
    //     label: 'Announements',
    //     href: "/announcements"
    // },
    {
        label: 'Developers',
        href: "/devlab"
    },
    {
        label: 'About',
        href: "/about"
    },
]

export const HEROHEAD = {
    HEADER: "Certified Web 3.0 & Metaverse Dev",
    DESCRTIPTION: `Get Ready for the Next Generation of the Internet. A One and Quarter Years Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies`,
}

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

export const SPECIALTRACKS = {
    head: `Specialized Tracks`,
    description: `After completing the first three quarters the participants will select one or more specializations consisting of two courses each:    `,
    specialTracks: [
        {
            id: 1,
            Title: 'Web 3.0 (Blockchain) and Metaverse Specialization',
            details: `This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.`,
            quarters: [
                {
                    id: 4,
                    label: 'Quarter IV',
                    details: "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps"
                },
                {
                    id: 5,
                    label: 'Quarter V',
                    details: "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences"
                }
            ]
        },
        {
            id: 1,
            Title: 'Artificial Intelligence (AI) and Deep Learning Specialization',
            details: `The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.`,
            quarters: [
                {
                    id: 4,
                    label: 'Quarter IV',
                    details: "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming"
                },
                {
                    id: 5,
                    label: 'Quarter V',
                    details: "AI-361: Deep Learning and MLOps"
                }
            ]
        },
        {
            id: 1,
            Title: 'Cloud-Native Computing Specialization',
            details: `The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes. `,
            quarters: [
                {
                    id: 4,
                    label: 'Quarter IV',
                    details: "CN-351: Certified Kubernetes Application Developer (CKAD)"
                },
                {
                    id: 5,
                    label: 'Quarter V',
                    details: "CN-361: Developing Multi-Cloud APIs using CDK for Terraform"
                }
            ]
        },
        {
            id: 1,
            Title: 'Ambient Computing and IoT Specialization',
            details: `The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices. `,
            quarters: [
                {
                    id: 4,
                    label: 'Quarter IV',
                    details: "AC-351: Ambient Computing with Voice Assistants and Matter Protocol Devices"
                },
                {
                    id: 5,
                    label: 'Quarter V',
                    details: "AC-361: Embedded Programming using C and Rust"
                }
            ]
        },
        {
            id: 1,
            Title: 'Genomics and Bioinformatics Specialization',
            details: `Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.`,
            quarters: [
                {
                    id: 4,
                    label: 'Quarter IV',
                    details: "Bio-351: Python for Biologists"
                },
                {
                    id: 5,
                    label: 'Quarter V',
                    details: "Bio-361: Bioinformatics with Python"
                }
            ]
        },
        {
            id: 1,
            Title: 'Network Programmability and Automation Specialization',
            details: `More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.`,
            quarters: [
                {
                    id: 4,
                    label: 'Quarter IV',
                    details: "NPA-351: CCNA 200-301 Certification"
                },
                {
                    id: 5,
                    label: 'Quarter V',
                    details: "NPA-361: Network Programmability and Automation"
                }
            ]
        }
    ]
}

export const NUTSHELL = {
    head: "The Program in a Nutshell",
    subHead: `Earn While You Learn`,
    description: `In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program's beginning. It resembles a cross between a corporate venture and an educational project.    `
}

export const SOCIALMEDIA: any = [
    {
        name: 'Facebook',
        link: "https://www.facebook.com/piaic/",
        icon: BsFacebook
    },
    {
        name: 'Twitter',
        link: "https://twitter.com/piaicofficial",
        icon: BsTwitter
    },
    {
        name: 'Instagram',
        link: "https://www.instagram.com/piaicofficial/",
        icon: BsInstagram
    },
    {
        name: 'YouTube',
        link: "https://www.youtube.com/@PIAIC",
        icon: BsPlayBtnFill
    },
    {
        name: 'Discord',
        link: "https://discord.com/channels/790484092772548613/928284551988518912",
        icon: BsDiscord
    },
    {
        name: 'GitHub',
        link: "https://github.com/panaverse",
        icon: BsGithub
    },

]

export const DEVLAB = {
    head: "Panaverse Developers Lab",
    subHead: `Browse developer experts who have been recognized by Panaverse DAO for their in depth knowledge and skillset.`,
    btnText: "Create Your Developer Profile",
    btnText2: "Complete Your Profile",
}