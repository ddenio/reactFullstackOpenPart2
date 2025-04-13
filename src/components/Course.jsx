import Header from "./Header"
import Content from "./Content"

const Course = ({courses}) => {
    console.log("props are", courses)
    return (
        <ul>
            {courses.map(course =>
                <div key={course.id}> 
                    <Header text={course.name} />
                    <Content parts={course.parts} />
                </div>
            )}
            
        </ul> 
        
        // <div>  
        //     <Header text={course.name}/>
        //     <Content parts={course.parts}/>
        // </div>
    )
  }

export default Course