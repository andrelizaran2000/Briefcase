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
      'https://firebasestorage.googleapis.com/v0/b/portafolio-572d2.appspot.com/o/e2.png?alt=media&token=d65cfe75-687c-4e96-9aa3-f52ff94f9c34',
      'https://firebasestorage.googleapis.com/v0/b/portafolio-572d2.appspot.com/o/e3.png?alt=media&token=dbeed31b-71fd-44ac-858b-a9b293f3c790',
      'https://firebasestorage.googleapis.com/v0/b/portafolio-572d2.appspot.com/o/e4.png?alt=media&token=41006085-24d7-4d22-8e9c-641525f91213',
      'https://firebasestorage.googleapis.com/v0/b/portafolio-572d2.appspot.com/o/e5.png?alt=media&token=30054671-9d5f-42f8-a150-43b23e3937db',
      'https://firebasestorage.googleapis.com/v0/b/portafolio-572d2.appspot.com/o/e6.png?alt=media&token=4afa5bae-5e4a-4b80-b550-797986b49849',
      'https://firebasestorage.googleapis.com/v0/b/portafolio-572d2.appspot.com/o/e7.png?alt=media&token=402fa75c-0f44-42e7-a2e2-e35d8796dd03',
      'https://firebasestorage.googleapis.com/v0/b/portafolio-572d2.appspot.com/o/e1.png?alt=media&token=d7f5376d-3e27-49c2-89b8-a0e5cf25bf26',
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
      'https://firebasestorage.googleapis.com/v0/b/portafolio-572d2.appspot.com/o/c1.png?alt=media&token=55676325-31ef-424b-9eed-8d2523251aa2',
      'https://firebasestorage.googleapis.com/v0/b/portafolio-572d2.appspot.com/o/c2.png?alt=media&token=a711beb1-a690-49d8-8426-a08b7545dcb6',
      'https://firebasestorage.googleapis.com/v0/b/portafolio-572d2.appspot.com/o/c3.png?alt=media&token=3e8beb6a-370e-40e2-8a2f-71c7bc88cc18',
      'https://firebasestorage.googleapis.com/v0/b/portafolio-572d2.appspot.com/o/c4.png?alt=media&token=089daae4-ff69-432f-a915-6e4651a84a48',
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
      'https://firebasestorage.googleapis.com/v0/b/portafolio-572d2.appspot.com/o/a1.png?alt=media&token=54824641-632c-40c2-ad60-602240ef20fa',
      'https://firebasestorage.googleapis.com/v0/b/portafolio-572d2.appspot.com/o/a2.png?alt=media&token=2ce1c45b-4130-4b8d-9905-8e1ce089cd66',
      'https://firebasestorage.googleapis.com/v0/b/portafolio-572d2.appspot.com/o/a3.png?alt=media&token=9aa4b536-5ab8-44fa-963a-4ddc511d86f7',
      'https://firebasestorage.googleapis.com/v0/b/portafolio-572d2.appspot.com/o/a4.png?alt=media&token=310b5f7c-e500-4211-892e-585b015df9eb'
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
      'https://firebasestorage.googleapis.com/v0/b/portafolio-572d2.appspot.com/o/b1.png?alt=media&token=c882edd1-f05b-4a03-924b-8b656d7cea91',
      'https://firebasestorage.googleapis.com/v0/b/portafolio-572d2.appspot.com/o/b2.png?alt=media&token=35419fdb-39c8-4933-83c8-fa3c1e420d8b',
      'https://firebasestorage.googleapis.com/v0/b/portafolio-572d2.appspot.com/o/b3.png?alt=media&token=444bb508-be30-48e8-baeb-f3c2dbfd0622',
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
      'https://firebasestorage.googleapis.com/v0/b/portafolio-572d2.appspot.com/o/d1.png?alt=media&token=b9554ae1-8fe0-4920-8957-458267497e3a',
      'https://firebasestorage.googleapis.com/v0/b/portafolio-572d2.appspot.com/o/d2.png?alt=media&token=d521eb7e-af8b-4f81-b8a4-629f57b2e554',
      'https://firebasestorage.googleapis.com/v0/b/portafolio-572d2.appspot.com/o/d3.png?alt=media&token=f13585be-6a0a-426a-abab-6f1252876148',
      'https://firebasestorage.googleapis.com/v0/b/portafolio-572d2.appspot.com/o/d4.png?alt=media&token=b85da662-d5d6-4c64-a57a-df16643b98f2',
      'https://firebasestorage.googleapis.com/v0/b/portafolio-572d2.appspot.com/o/d5.png?alt=media&token=2ff72363-034e-4224-b2e7-cb0c1066a2b7',
    ],
    repos: [
      { title:'Mobile app', to:'https://github.com/AndreLizaran/React-Native-Crypto' }
    ]
  },
]