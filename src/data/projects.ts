export type ProjectData = {
  id:number,
  title:string,
  descriptionSpanish:string,
  descriptionEnglish:string
  images: string[],
  technologies: string[],
  repos: {title:string, to:string}[]
}

import zapateriaA1 from '../../assets/blau_landing/a1.png'

export const projectData: ProjectData[] = [
  {
    id: 0,
    title: 'Zapatería Santi',
    technologies: ['React Native', 'Typescript', 'Axios', 'Node JS', 'JWT'],
    descriptionSpanish: 'Aplicación móvil para la oferta de zapatos, ver fotografías de catálogo, comprar y encontrar tiendas de esta.',
    descriptionEnglish: 'Mobile application for the offer of shoes, see catalog photos, buy and find stores.',
    images: [
      '/assets/zapateria_santi/a1.png',
      '/assets/zapateria_santi/a2.png',
      '/assets/zapateria_santi/a3.png',
      '/assets/zapateria_santi/a4.png',
      '/assets/zapateria_santi/a5.png',
      '/assets/zapateria_santi/a6.png',
      '/assets/zapateria_santi/a7.png',
    ],
    repos: [
      { title:'Mobile app', to:'https://github.com/LissetLevi26/shoes-app' },
      { title:'Servidor', to:'https://github.com/LissetLevi26/shoes-backend' }
    ]
  },
  {
    id: 1,
    title: 'Detector de perros',
    technologies: ['React Native', 'Typescript', 'Axios', 'Python'],
    descriptionSpanish: 'Aplicación que obtiene imágenes de la galería o fotografía para reconocer por medio del envío de estas a un servidor y por medio de reconocimiento de patrones si es un perro o no.',
    descriptionEnglish: 'Application that obtains images from the gallery or photograph to recognize by sending them to a server and by means of pattern recognition if it is a dog or not.',
    images:[
      '/assets/dog_analyzer/a1.png',
      '/assets/dog_analyzer/a2.png',
      '/assets/dog_analyzer/a3.png',
      '/assets/dog_analyzer/a4.png',
    ],
    repos:[
      { title:'Mobile app', to:'https://github.com/andrelizaran2000/Dog-Analyzer' },
      { title:'Servidor', to:'https://github.com/rafael-vera/DogRecognitionServer' },
      
    ],
  },
  {
    id: 2,
    title: 'Blau conductor',
    technologies: ['React Native', 'Typescript', 'Axios'],
    descriptionSpanish: 'Aplicación de recolección de contenedores de reciclaje en esta de Jalisco que permite un mejor manejo de estos y una herramienta para los conductores.',
    descriptionEnglish: 'Recycling container collection application in the state of Jalisco that allows better management of these and a tool for drivers.',
    images:[],
    repos:[],
  },
  {
    id: 3,
    title: 'Blau landing page',
    technologies: ['React', 'Typescript', 'Axios', 'Tailwind'],
    descriptionSpanish: 'Landing page de la empresa Blau que oferta el servicio de recolección de materiales reciclables, desperdicios o papelería desechable.',
    descriptionEnglish: 'Landing page of the Blau company that offers the service of collecting recyclable materials, waste or disposable stationery.',
    images:[
      '/assets/blau_landing/a1.png',
      '/assets/blau_landing/a2.png',
      '/assets/blau_landing/a3.png',
      '/assets/blau_landing/a4.png'
    ],
    repos:[],
  },
  {
    id: 4,
    title: 'CIS Dashboard',
    technologies: ['React', 'Typescript', 'Axios', 'Material UI'],
    descriptionSpanish: 'Aplicación web para administrar recursos sobre eventos de la plataforma del Capitulado en Ingenieros en Sistemas.',
    descriptionEnglish: 'Web application to manage resources about events of the CIS.',
    images:[
      '/assets/cis_dashboard/a1.png',
      '/assets/cis_dashboard/a2.png',
      '/assets/cis_dashboard/a3.png',
    ],
    repos:[
      { title:'Mobile app', to:'https://github.com/andrelizaran2000/CIS-Dashboard' }
    ],
  },
  {
    id: 5,
    title: 'React Native Crypto',
    technologies: ['React Native', 'Typescript', 'Axios'],
    descriptionSpanish: 'Aplicación móvil para obtener el valor actual de diferente crypto monedas.',
    descriptionEnglish: 'Mobile application to get the current value of different crypto currencies.',
    images: [
      '/assets/react_native_crypto/a1.png',
      '/assets/react_native_crypto/a2.png',
      '/assets/react_native_crypto/a3.png',
      '/assets/react_native_crypto/a4.png',
      '/assets/react_native_crypto/a5.png',
    ],
    repos: [
      { title:'Mobile app', to:'https://github.com/AndreLizaran/React-Native-Crypto' }
    ]
  },
]