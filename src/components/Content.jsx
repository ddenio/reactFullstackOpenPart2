

const Content = ({ part }) => {
    console.log("content props:", part)
    return (
        <li>{part.name}</li>
    )
  }

export default Content