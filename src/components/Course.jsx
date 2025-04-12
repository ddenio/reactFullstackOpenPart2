import Header from "./Header"
import Content from "./Content"

const Course = ({course}) => {
    console.log("props are", course.name)
    return (
        <div>  
            <Header text={course.name}/>
            <ul>
                {course.parts.map(part => 
                <Content key={part.id} part={part} />
                )}
            </ul>
        </div>
    )
  }

export default Course