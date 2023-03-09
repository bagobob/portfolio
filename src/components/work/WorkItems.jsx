import React from 'react'

const WorkItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <img  src={item.image} alt="" className="work__img" />
        <h3 className="work__title">{item.title}</h3>
        <a className="work__button" href={item.githubLink} target="_blank" rel='noreferrer'>
            Demo<i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
    </div>
  )
}

export default WorkItems