import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="fade-left">
                <h2 className='text-4xl md:text-5xl' >Technologies I worked with</h2>
                <p className='text-gray-500 pt-2' >I have a strong foundation in HTML, CSS, and TypeScript, which  I have used to build various projects. Currently, I am expanding my skills by learning React and Next.js to enhance my front-end development capabilities and work on more dynamic applications.</p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-blue-400 text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                        <h2  data-aos="fade-right">Html</h2>
                        <h2  data-aos="fade-right">Typescript</h2>
                        <h2  data-aos="fade-right">CSS</h2>
                    </div> 
                    <div className='space-y-2'>
                        <h2 data-aos="fade-left">Next.js</h2>
                        <h2 data-aos="fade-left">Python</h2>
                        <h2 data-aos="fade-left">C++</h2>
                    </div>   
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
