import { tmdbService } from "../../services/tmdb.service";
import useFetch from "../../hooks/useFetch";
import ShowCard from "../../components/ShowCard/ShowCard";
import SkeletonCard from "../../components/SkeletonCard/SkeletonCard";
import styles from "./Home.module.scss";

// Numero de skeletons mentre carreguen les dades
const SKELETON_COUNT = 20;

function Home() {
  const {
    data: shows,
    loading,
    error,
  } = useFetch(() => tmdbService.getPopularShows());

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Sèries populars</h1>

        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.grid}>
          {loading
            ? Array.from({ length: SKELETON_COUNT }).map((_, i) => (
                <SkeletonCard key={i} />
              ))
            : shows?.map((show) => <ShowCard key={show.id} show={show} />)}
        </div>
      </div>
    </div>
  );
}

export default Home;
