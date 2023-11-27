import React, {useState, useEffect}  from "react"
import './App.css';
import  axios  from "axios"
import Accordion from "react-bootstrap/Accordion";

function App() {

  const [bookData, setBookData] = useState([])
const  [loaded, setLoaded] = useState(false)

  const fetchData = async () => {
    const  response = await axios.get("./books.json")
   
    setBookData(response.data)//data.data = object.book
   setLoaded (true);
  }

  const renderAccordion = (book, index)=> {
    return (
      <>
      <div className= "container mt-2 "></div>
      <div className="container col-4 btn btn-primary">
      
      <Accordion key={index} alwaysOpen>
      <Accordion.Item eventKey={book}>
        <Accordion.Header ><h3 >{book.title}</h3></Accordion.Header>
        <Accordion.Body>
          
        <table className="table">
                  <tbody>
                    <tr>
                        <td className="text-success font-weight-bold">Title:</td>
                        <td >{book.title}</td>
                    </tr>
                    <tr>
                        <td className="text-success font-weight-bold">Subtitle:</td>
                        <td>{book.subtitle}</td>
                    </tr>
                    <tr>
                        <td className="text-success font-weight-bold">Author:</td>
                        <td>{book.author}</td>
                    </tr>
                    <tr>
                        <td className="text-success font-weight-bold">Publisher:</td>
                        <td>{book.publisher}</td>
                    </tr>
                    <tr>
                        <td className="text-success font-weight-bold">Description:</td>
                        <td>{book.description}</td>
                    </tr>
                  </tbody>
                </table>
          
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>

    </div>
    </>

    )
  }
 useEffect ( () => {
    fetchData()

  }, []);
  console.log('loaded:', loaded, "data:", bookData);


  return (
    <div className="App">{loaded && bookData.books.map(renderAccordion)}
     
      
    </div>
  )
}

export default App;
