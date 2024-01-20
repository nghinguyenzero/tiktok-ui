import React from 'react'

const VideoEmbed = (props) => {
  const { url } = props
  console.log(url)
  return (
    <video width="80%" height="80%" controls className="image" autoplay loop muted playsinline>
      <source src={url} type="video/mp4" className="image" />
    </video>
  )
}

export default VideoEmbed
