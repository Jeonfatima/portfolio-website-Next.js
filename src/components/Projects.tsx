import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data = [
    {
    id: 0,
    title: "My Personal Portfolio",
    desc: "My first project I made using core HTML and CSS",
    img: "/project_1_resized.jpg",
    tags: ['Html' , 'Css'],

    },
    {
        id: 1,
        title: "Static Resume Builder",
        desc: "A Typescript-based Interactive resume built with HTML and CSS",
        img: "/resized_project_2.jpg",
        tags: ['Html' , 'Css' , 'Typescript'],
    
    }
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading  title='My Projects'/> 
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        
        />))}
      </div>
    </div>
  )
}

export default Projects
