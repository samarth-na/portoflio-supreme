import styles from "./PostalHeader.module.css";

export function PostalHeader() {
  return (
    <header className={styles.header}>
      {/* Left Block - Postal Info */}
      <div className={styles.leftBlock}>
        <p>
          <strong>bpost</strong>
        </p>
        <p>PB-PP</p>
        <p>BELGIE(N)-BELGIQUE</p>
        <p style={{ marginTop: "8px" }}>P918262</p>
        <p>[adresregels...]</p>
        <p>[postcode/gemeente]</p>
      </div>

      <div className={styles.centerBlock}>
        <h1 className={styles.logo}>hello </h1>
        <p className={styles.subtitle}>Software Architect</p>
      </div>

      {/* Right Block - Issue Info */}
      <div className={styles.rightBlock}>
        <div className={styles.issueInfo}>
          <p>#0008</p>
          <p>maart/april/mei</p>
          <p>2017</p>
        </div>
        <div className={styles.contactInfo}>
          <p>
            <strong>VRAGEN OF</strong>
          </p>
          <p>
            <strong>SUGGESTIES:</strong>
          </p>
          <p>info@npow.be</p>
        </div>
      </div>
    </header>
  );
}
