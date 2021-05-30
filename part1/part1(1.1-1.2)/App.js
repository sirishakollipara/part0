import React from 'react'

const App = () => {
  const course = 'FullStackOpen'
  const part0 = 'Part-0->Basics'
  const exercises0 = 10
  const part1 = 'Part-1->React'
  const exercises1 = 30
  const part2 = 'Part-2->Using props'
  const exercises2 = 30
  const part3 = 'Part-3->State of a component'
  const exercises3 = 20

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part0} {exercises0}
      </p>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Total {exercises0 +exercises1 + exercises2 + exercises3}</p>
  </div>
  )
}

export default App
