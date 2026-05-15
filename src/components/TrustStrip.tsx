import styles from "./TrustStrip.module.css";

const items = [
  { icon: "🆓", text: "Free forever plan" },
  { icon: "⚡", text: "Real-time sync" },
  { icon: "👨‍👩‍👧", text: "Unlimited household members" },
  { icon: "📱", text: "Available on iOS" },
];

export default function TrustStrip() {
  return (
    <div className={styles.strip}>
      {items.map((item, i) => (
        <div key={i} className={styles.itemGroup}>
          <div className={styles.item}>
            <span>{item.icon}</span>
            <span>{item.text}</span>
          </div>
          {i < items.length - 1 && <div className={styles.sep} />}
        </div>
      ))}
    </div>
  );
}
