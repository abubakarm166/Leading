import React, { Suspense } from 'react'

const IntermediariesLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <Suspense>
        {children}
    </Suspense>
  )
}

export default IntermediariesLayout