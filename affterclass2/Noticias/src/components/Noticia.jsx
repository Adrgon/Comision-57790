

const Noticia = ({noticia}) => {
const {urlToImage, url, title, description, source} = noticia
  
    const imagen = (urlToImage) ? 
        <div className="card-image">
            <img src={urlToImage} alt={title} />
            <span className="card-title">{source.name}</span>
        </div> 
    : null

    return (
    <div className="col s12 m6">
        <div className="card">
            {imagen}
            <div className="card-content">
                <h3>{title}</h3>
                {description ? <p>{description}</p> : null}
            </div>
            <div className="card-action">
                <a href={url} target="_blank" rel="noopener noreferrer" className="btn">Ver Noticia</a>
            </div>
        </div>
    </div>
  )
}

export default Noticia
