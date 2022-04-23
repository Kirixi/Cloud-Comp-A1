import React from 'react'
import ImgFrame from './ImgFrame'

function Column({ images }) {

  return (
    <div className="column">
      {images.map((img, i) => {
        return <ImgFrame key={i} src={img.url} h={img.height} author={img.user} id={img.id} voteNum={img.likes} />
      })}
    </div>
  )
}

export default Column
