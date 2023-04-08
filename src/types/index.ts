export interface NavBarItem {
    label: string;
    href: string;
}

export type Instructors = {
    head: string,
    mentors: Array<{
        url: string
        name: string
    }>

}

export type SocialMedia = {
    name: string;
    link: string;
    icon?: any
}

export interface Developer {
    dev_id: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    gender: string;
    date_of_birth: string;
    profile_title: string;
    about_me: string;
    image_url: string;
    github_link: string;
    best_project_title: string;
    best_project_description: string;
    skills: string;
    personal_website: string;
    linkedin_url: string;
    is_approved: boolean | null;
}
