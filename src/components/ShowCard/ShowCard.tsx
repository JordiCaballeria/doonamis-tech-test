import { Link } from "react-router-dom";
import { TvShow } from "../../models/TvShow";
import styles from "./ShowCard.module.scss";

interface Props {
  show: TvShow;
}

function ShowCard({ show }: Props) {
  return (
    <Link to={`/show/${show.id}`} className={styles.card}>
      <div className={styles.posterWrapper}>
        <img src={show.posterUrl} alt={show.name} className={styles.poster} />
        <span className={styles.rating}>{show.rating}</span>
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{show.name}</h3>
        <span className={styles.year}>{show.year}</span>
      </div>
    </Link>
  );
}

export default ShowCard;
