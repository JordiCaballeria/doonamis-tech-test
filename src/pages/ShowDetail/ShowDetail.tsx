import { useParams, useNavigate } from "react-router-dom";
import { tmdbService } from "../../services/tmdb.service";
import useFetch from "../../hooks/useFetch";
import ShowCard from "../../components/ShowCard/ShowCard";
import styles from "./ShowDetail.module.scss";

function ShowDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    data: show,
    loading,
    error,
  } = useFetch(() => tmdbService.getShowById(Number(id)));

  const { data: similarShows } = useFetch(
    () => tmdbService.getSimilarShows(Number(id)),
    id,
  );

  if (loading) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <p className={styles.message}>Carregant...</p>
        </div>
      </div>
    );
  }

  if (error || !show) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <p className={styles.error}>{error ?? "Sèrie no trobada"}</p>
          <button className={styles.backButton} onClick={() => navigate(-1)}>
            Tornar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div
        className={styles.backdrop}
        style={{ backgroundImage: `url(${show.backdropUrl})` }}
      />

      <div className={styles.container}>
        <button className={styles.backButton} onClick={() => navigate(-1)}>
          ← Tornar
        </button>

        <div className={styles.content}>
          <img src={show.posterUrl} alt={show.name} className={styles.poster} />

          <div className={styles.info}>
            <h1 className={styles.title}>{show.name}</h1>

            {show.tagline && <p className={styles.tagline}>{show.tagline}</p>}

            <div className={styles.meta}>
              <span className={styles.rating}>⭐ {show.rating}</span>
              <span>{show.year}</span>
              <span>{show.number_of_seasons} temporades</span>
              <span>{show.number_of_episodes} episodis</span>
              <span>{show.status}</span>
            </div>

            <div className={styles.genres}>
              {show.genres.map((genre) => (
                <span key={genre.id} className={styles.genre}>
                  {genre.name}
                </span>
              ))}
            </div>

            <p className={styles.overview}>{show.overview}</p>
          </div>
        </div>

        {similarShows && similarShows.length > 0 && (
          <div className={styles.similar}>
            <h2 className={styles.similarTitle}>Sèries similars</h2>
            <div className={styles.similarGrid}>
              {similarShows.slice(0, 5).map((show) => (
                <ShowCard key={show.id} show={show} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShowDetail;
