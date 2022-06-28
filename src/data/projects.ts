export type ProjectData = {
  id:number,
  title:string,
  description:string,
  images: string[],
  technologies: string[],
  repos: {title:string, to:string}[]
}