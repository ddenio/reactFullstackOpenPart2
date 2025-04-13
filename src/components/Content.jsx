import Part from "./Part"
import Total from "./Total"

const Content = ({ parts }) => {
    console.log("content props:", parts)
    return (
        <ul>
            {parts.map(part => 
                <Part key={part.id} part={part} />
            )}

            <Total parts={parts}/>
        </ul> 
    )
  }

export default Content
