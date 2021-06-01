import React from 'react'

const App = () => {
  const course = 'Web development curriculum'
  const part0 = 'Fundamentals of React '
  const exercises0 = 10
  const part1 = 'Using props to pass the data'
  const exercises1 = 7
  const part2 = 'State of a component'
  const exercises2 = 14
  const part3 = 'Redux'
  const exercises3 = 11
  const part4 = 'Routing'
  const exercises4 = 3
  const part5 = 'Middlewares'
  const exercises5 = 7


  return (
    <div>
      <h1>{course}</h1>
      <h2> Half Stack Application development </h2>
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
      <h3>Total of  {exercises0 +exercises1 + exercises2 + exercises3} exercises</h3>
      <h2>Node.js</h2>
      <p>
        {part4} {exercises4}
      </p>
      <p>
        {part5} {exercises5}
      </p>
      <h3>Total of  {exercises4 +exercises5} exercises</h3>
  </div>
  )
}

export default App