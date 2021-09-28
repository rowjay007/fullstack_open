import React from 'react'

const Content = () => {
    const part1 = "Fundamentals of React";
    const part2 = "Using props to pass data";
    const part3 = "State of a component";
    return (
      <div>
        <p>
          {part1} {exercises1}
        </p>
        <p>
          {part2} {exercises2}
        </p>
        <p>
          {part3} {exercises3}
        </p>
      </div>
    );
}

export default Content
