import { useEffect, useState } from "react"


function App() {
  const [items, setItems ] = useState([])
  const [input, setInput] = useState('')

/*   
  useEffect(()=>{
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=celulares`)
      .then((res)=>{
        return res.json()
        //console.log(res)
      })
      .then((articulos)=> setItems(articulos.results))
      .catch((error) => console.log(error))
  },[]) 
  */

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
      .then((res) => {
        return res.json();
        //console.log(res)
      })
      .then((articulos) => setItems(articulos.results))
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <h1>Mercado Libre</h1>
      {
        items.length === 0 ? (
      <form onSubmit={handleSubmit}>
        <input 
          value={input}
          onChange={(e)=>setInput(e.target.value)}
        />
        <button>Serch</button>
      </form>) : 
      (
        <section> 
        {
          items.map(item =>{
            return (
              <article key={item.id}>
                <h2>{item.title}</h2>
                <img src={item.thumbnail} />
              </article>
            )
          })
        }
        </section>
      )
    }
    </div>
  )
}
      

export default App
