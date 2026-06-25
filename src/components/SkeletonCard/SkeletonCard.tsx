import styles from "./SkeletonCard.module.scss";

function SkeletonCard() {
  return (
    <div className={styles.card}>
      <div className={styles.poster} />
      <div className={styles.info}>
        <div className={styles.title} />
        <div className={styles.year} />
      </div>
    </div>
  );
}

export default SkeletonCard;
