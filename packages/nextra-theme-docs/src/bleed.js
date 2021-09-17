import React from 'react'
import clsx from 'clsx'

export default ({ full, children }) => {
  return (
    <div
      className={clsx('bleed relative mt-6 -mx-6 md:-mx-8 2xl:-mx-24', {
        full
      })}
    >
      {children}
    </div>
  )
}
