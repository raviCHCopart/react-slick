import * as React from 'react'

export const CustomSlide = ownProps => {
  const { src, ...props } = ownProps
  const ext = getExtension(src)
  return (
    <div {...props}>
      {ext === 'pdf' ? (
        <iframe className="slide-pdf" src={src} title="pdf" />
      ) : (
        <img className="slide-img" src={src} alt="" />
      )}
    </div>
  )
}

export const getExtension = name => {
  const regExp = /(?:\.([^.]+))?$/
  return regExp.exec(name)[1].substr(0, 3)
}
