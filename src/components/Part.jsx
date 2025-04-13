const Part = ({part}) => {
    console.log("Part props:", part)
    return (
        <li>{part.name} {part.exercises}</li>
    )
  }

export default Part