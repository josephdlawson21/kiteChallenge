import React from 'react'

const ProjectCard = ({project}) => {
  return (
    <div className='projectCard'>
      <div className='titleDiv'>
        <div className='cardTitle'>
          {project.title}
        </div>
        <button className='metricsButton'>
          View Metrics
        </button>
      </div>
      <div className='projectDescription'>
        {project.description}
      </div>
    </div>
  )
}

export default ProjectCard
