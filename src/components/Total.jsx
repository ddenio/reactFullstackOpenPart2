const Total = ({parts}) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  
    return (
      <li>Total Number of exercises {total}</li>
    )
    }
  
  export default Total