
//const categorias = ['Laptops', 'Smatphones', 'Cameras', "Consoles", "Accesories"]
const categories = [
  {
    id: 1,
    name: "Laptops",
    img: "https://es.digitaltrends.com/wp-content/uploads/2023/08/apple-macbook-pro-14-rear-view-e1666806673134.jpg?fit=720%2C480&p=1",
  },
  {
    id: 2,
    name: "Smartphones",
    img: "https://es.digitaltrends.com/wp-content/uploads/2023/08/apple-macbook-pro-14-rear-view-e1666806673134.jpg?fit=720%2C480&p=1",
  },
  {
    id: 3,
    name: "Consoles",
    img: "https://es.digitaltrends.com/wp-content/uploads/2023/08/apple-macbook-pro-14-rear-view-e1666806673134.jpg?fit=720%2C480&p=1",
  },
  {
    id: 4,
    name: "Cameras",
    img: "https://es.digitaltrends.com/wp-content/uploads/2023/08/apple-macbook-pro-14-rear-view-e1666806673134.jpg?fit=720%2C480&p=1",
  },
  {
    id: 5,
    name: "Accesories",
    img: "https://es.digitaltrends.com/wp-content/uploads/2023/08/apple-macbook-pro-14-rear-view-e1666806673134.jpg?fit=720%2C480&p=1",
  },
];
function ItemListContainer({greetings}) {
    //console.log(categorias)
  return (
    <>
      <h2>{greetings}</h2>

        {categories.map( item => (
            <div key={item.id} className="card" style={{width: '18rem'}}>
                <img src={item.img} className="card-img-top" alt={item.name} />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        ))}

    </>
  );
}

export default ItemListContainer
