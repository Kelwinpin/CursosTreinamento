import Header from "components/Header";
import "./PlayerArquitetura.css";
import videos from "../../json/videos.json";
import Footer from "components/Footer";

const PlayerArquitetura = () => {
  return (
    <div>
      <Header />
      <section className="playerSection">
        {videos.map((video) => (
          <>
            <h2>{video.titulo}</h2>
            <iframe
              width="100%"
              height="100%"
              src={video.link}
              title={video.titulo}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              key={video.link}
            ></iframe>
          </>
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default PlayerArquitetura;
