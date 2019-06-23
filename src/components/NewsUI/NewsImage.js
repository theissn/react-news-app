import React from 'react'

function NewsImage({ image }) {
  if (image) {
    return <img className="w-full h-32 object-cover" src={image} alt="Sunset in the mountains" />
  } else {
    return <img className="w-full h-32 object-cover" src="//placehold.it/350" alt="Sunset in the mountains" />
  }
}

export default NewsImage;