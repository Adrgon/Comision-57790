import Noticia from "./Noticia";

export const ListContainer = ({ noticias }) => {
    console.log(noticias)
  return (
    <div className="row">
      {noticias.map((noticia) => (
        <Noticia key={noticia.url} noticia={noticia} />
      ))}
    </div>
  );
};

export default ListContainer
