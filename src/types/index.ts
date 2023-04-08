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