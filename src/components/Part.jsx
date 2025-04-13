const Part = ({part}) => {
    console.log("Part props:", part)
    return (
        <li>{part.name}, Exercises: {part.exercises}</li>
    )
  }

export default Part