import { useState } from "react";
import { tmdbService } from "../../services/tmdb.service";
import useFetch from "../../hooks/useFetch";
import ShowCard from "../../components/ShowCard/ShowCard";
import SkeletonCard from "../../components/SkeletonCard/SkeletonCard";
import styles from "./Home.module.scss";

// Numero de skeletons mentre carreguen les dades
const SKELETON_COUNT = 20;

function Home() {
  const [query, setQuery] = useState("");

  const { data: popularShows, loading: loadingPopular } = useFetch(() =>
    tmdbService.getPopularShows(),
  );

  const { data: searchResults, loading: loadingSearch } = useFetch(
    () => tmdbService.searchShows(query),
    query,
  );

  const isSearching = query.trim().length > 0;
  const shows = isSearching ? searchResults : popularShows;
  const loading = isSearching ? loadingSearch : loadingPopular;

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.topBar}>
          <h1 className={styles.title}>
            {isSearching ? `Resultats per "${query}"` : "Sèries populars"}
          </h1>
          <input
            type="text"
            placeholder="Buscar una sèrie..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={styles.search}
          />
        </div>

        {!loading && isSearching && shows?.length === 0 && (
          <p className={styles.empty}>
            No s'han trobat resultats per "{query}"
          </p>
        )}

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
