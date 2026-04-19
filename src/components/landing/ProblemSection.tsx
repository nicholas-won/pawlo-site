import AnimatedSection from "@/components/AnimatedSection";
import styles from "./ProblemSection.module.css";

type Message = {
  type: "in" | "out";
  text: string;
  tail?: boolean;
  gap?: boolean;
};

type Conversation = {
  contact: string;
  avatarLetter: string;
  avatarStyle?: React.CSSProperties;
  time: string;
  messages: Message[];
  deliveredLabel: string;
  caption: { icon: string; text: string };
};

const conversations: Conversation[] = [
  {
    contact: "Dad",
    avatarLetter: "D",
    time: "Mon 6:47 PM",
    messages: [
      { type: "in", text: "Hey did you feed Buddy?", tail: true },
      { type: "out", text: "I thought you did??", tail: true, gap: true },
      { type: "in", text: "Wait no 😳", tail: true, gap: true },
      { type: "in", text: "he just finished his second bowl" },
    ],
    deliveredLabel: "Delivered",
    caption: { icon: "🍽️", text: "Buddy got two breakfasts. Again." },
  },
  {
    contact: "Alex 🏠",
    avatarLetter: "A",
    avatarStyle: { background: "linear-gradient(135deg,#ffb199,#ff8a6a)" },
    time: "Tue 8:12 AM",
    messages: [
      { type: "in", text: "Did Luna get her flea med this month?", tail: true },
      { type: "out", text: "Uhhh I can't remember 😅", tail: true, gap: true },
      { type: "in", text: "Was it you or me last time?", tail: true, gap: true },
      { type: "out", text: "…guess we're due?", tail: true, gap: true },
    ],
    deliveredLabel: "Read 8:14 AM",
    caption: { icon: "💊", text: "Nobody knows. Vet visit incoming." },
  },
  {
    contact: "Sam 💕",
    avatarLetter: "S",
    avatarStyle: { background: "linear-gradient(135deg,#a78bfa,#7c3aed)" },
    time: "Fri 10:30 PM",
    messages: [
      { type: "out", text: "I ALWAYS do everything around here", tail: true },
      { type: "in", text: "you walked her yesterday?", tail: true, gap: true },
      { type: "out", text: "…one time", tail: true, gap: true },
      { type: "in", text: "lol" },
    ],
    deliveredLabel: "Delivered",
    caption: { icon: "🙄", text: "The fight that never ends." },
  },
];

export default function ProblemSection() {
  return (
    <section className={`section ${styles.problem}`} id="problem">
      <div className="container">
        <AnimatedSection>
          <div className="section-header">
            <span className="label-tag">Sound familiar?</span>
            <h2>
              These conversations happen
              <br />
              in millions of households every day.
            </h2>
            <p>Pawlo was built to end them — permanently.</p>
          </div>
        </AnimatedSection>

        <div className={styles.grid}>
          {conversations.map((conv, i) => (
            <AnimatedSection key={i} delay={i * 150} className={styles.imsg}>
              <div className={styles.imsgHeader}>
                <span className={styles.imsgBack}>‹</span>
                <div className={styles.imsgAvatar} style={conv.avatarStyle}>
                  {conv.avatarLetter}
                </div>
                <div className={styles.imsgName}>{conv.contact}</div>
                <span className={styles.imsgFacetime}>📹</span>
              </div>

              <div className={styles.imsgBody}>
                <div className={styles.imsgTime}>{conv.time}</div>
                {conv.messages.map((msg, j) => (
                  <div
                    key={j}
                    className={[
                      styles.bubble,
                      msg.type === "in" ? styles.bubbleIn : styles.bubbleOut,
                      msg.tail ? styles.tail : "",
                      msg.gap ? styles.gap : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {msg.text}
                  </div>
                ))}
                <div className={styles.imsgDelivered}>{conv.deliveredLabel}</div>
              </div>

              <div className={styles.imsgCaption}>
                <span>{conv.caption.icon}</span>
                <span>{conv.caption.text}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
