import { useEffect, useState } from "react"
import Header from "./components/Header"
import ListContainer from "./components/ListContainer"
// 358b0bffab1842399a3c74576d7aac70
//newsapi.org/v2/top-headlines?country=us&category=business&apiKey=358b0bffab1842399a3c74576d7aac70

function App() {
  const [noti, setNews] = useState([])
  const [category, setCategory] = useState("sports");

  useEffect(()=>{
    const consultarAPI = ()=>{
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${category}&apiKey=358b0bffab1842399a3c74576d7aac70`;
      
        

/*     
    const respuesta = await fetch(url)
    const noticias = await respuesta.json() 
    */

 
        
        //console.log(noticias)


        fetch(url)
         .then(res=>{
          console.log(res)
          return res.json()
        })
        .then(news => {
          setNews(news.articles)
          //console.log(news.articles)
        })
        .catch(err => console.log(err)) 
    }
    consultarAPI()
  },[])

  

  return (
    <>
      <Header titulo="Noticias" />

      <ListContainer noticias={noti}/>
    </>
  );
}

export default App
