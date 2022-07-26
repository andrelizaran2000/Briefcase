import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faDatabase, faFire, faPen, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { 
  faLinkedin,
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faAngular,
  faNodeJs,
  faSass,
  faBootstrap,
  faJava,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons"

export type PersonalData = {
  description:string,
  hobbies: string[],
  languages: string[],
  schooling: {title: string, career:string}[],
  contactMe: {title:string, to:string, icon:IconDefinition}[]
  technologies: {title:string, icon:IconDefinition}[]
}

const technologies = [
  {icon: faHtml5 ,title:'HTML'},
  {icon: faCss3 ,title:'CSS'},
  {icon: faSass ,title:'SASS'},
  {icon: faCss3 ,title:'Tailwind CSS'},
  {icon: faBootstrap ,title:'Bootstrap'},
  {icon: faJava ,title:'Kotlin'},
  {icon: faJava ,title:'Java'},
  {icon: faJs ,title:'JS'},
  {icon: faJs ,title:'JS'},
  {icon: faJs ,title:'TS'},
  {icon: faReact ,title:'React'},
  {icon: faReact ,title:'React Native'},
  {icon: faReact ,title:'Next JS'},
  {icon: faReact ,title:'Redux'},
  {icon: faReact ,title:'React Query'},
  {icon: faReact ,title:'Material UI'},
  {icon: faAngular ,title:'Angular'},
  {icon: faNodeJs ,title:'Node JS'},
  {icon: faDatabase ,title:'Mongo DB'},
  {icon: faFire ,title:'Firebase'},
  {icon: faPen ,title:'Figma'},
]

const contactMe = [
  { title:'Email', to:'mailto:andrelizaran2000@gmail.com', icon:faMailBulk },
  { title:'Linkedin', to:'https://www.linkedin.com/in/jes%C3%BAs-andr%C3%A9-lizar%C3%A1n-blanco-7342681ab/', icon:faLinkedin },
  { title: 'Whatsapp', to:'https://api.whatsapp.com/send?phone=5212293460202', icon:faWhatsapp }
]

export const personalDataEnglish: PersonalData = {
  description: 'Hi, Im Andre Lizaran and Im frontend developer (fullstack developer in process). I love making clean and useful apps/interfaces. My favorite programming language is Typescript. Im from Veracruz, Mexico.',
  hobbies: [
    'Videogames',
    'Programming',
    'Hanging out with friends',
    'Music',
  ],
  languages: ['Spanish', 'English'],
  schooling: [
    {
      title: 'Computer System Engineering',
      career: 'Instituto Tecnológico de Veracruz'
    }
  ],
  contactMe,
  technologies
}

export const personalDataSpanish: PersonalData = {
  description: 'Hola, soy André Lizarán y son desarrollador frontend (Fullstack en proceso). Amo hacer aplicaciones limpias. claras y útiles. Mi lenguaje de programación favorito es Typescript. Soy de México, Veracruz.',
  hobbies: [
    'Videojuegos',
    'Programar',
    'Salir con amigos',
    'Música',
  ],
  languages: ['Español', 'Inglés'],
  schooling: [
    {
      title: 'Ingeniería en Sistemas Computacionales',
      career: 'Instituto Tecnológico de Veracruz'
    }
  ],
  contactMe,
  technologies
}