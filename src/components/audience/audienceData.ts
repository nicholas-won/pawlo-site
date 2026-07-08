export type AudienceFAQ = { question: string; answer: string };

export type AudienceConfig = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  /** H1 split so the keyword phrase renders in the brand highlight style. */
  h1Lead: string;
  h1Highlight: string;
  subheadline: string;
  screenshot: { src: string; alt: string };
  painsLabel: string;
  painsHeading: string;
  painsIntro: string;
  pains: { icon: string; title: string; text: string }[];
  featuresHeading: string;
  features: { icon: string; title: string; text: string }[];
  faqs: AudienceFAQ[];
  relatedPosts: { slug: string; title: string }[];
  crossLinks: { href: string; label: string }[];
};

/** FAQPage + BreadcrumbList JSON-LD for an audience page. */
export function buildAudienceJsonLd(config: AudienceConfig) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: config.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Pawlo",
          item: "https://getpawlo.app",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: config.badge,
          item: `https://getpawlo.app/${config.slug}`,
        },
      ],
    },
  ];
}

export const audiences: Record<string, AudienceConfig> = {
  couples: {
    slug: "pet-care-app-for-couples",
    metaTitle: "Pet Care App for Couples — Share the Load, Skip the Fights | Pawlo",
    metaDescription:
      "Pawlo is the shared pet care app for couples. One checklist for feeding, walks, and meds — see who did what, stop double-feeding, and end the 'did you feed him?' texts.",
    badge: "For couples",
    h1Lead: "The pet care app for",
    h1Highlight: "couples who share the load.",
    subheadline:
      "One shared checklist for feeding, walks, and medication — synced between both your phones. See who did what the moment it happens, so nobody double-feeds and nobody keeps score.",
    screenshot: {
      src: "/screenshots/home.png",
      alt: "Pawlo home screen showing a couple's shared pet care checklist",
    },
    painsLabel: "Sound familiar?",
    painsHeading: "Every couple with a pet has had these fights.",
    painsIntro: "They're not about the dog. They're about not knowing.",
    pains: [
      {
        icon: "🍽️",
        title: "“I thought you fed him”",
        text: "Two breakfasts, zero dinners, and a dog who will never tell. Without a shared record, every meal is a guess.",
      },
      {
        icon: "🙄",
        title: "“I always do everything”",
        text: "One of you probably does do more — but without receipts, it's a feeling versus a feeling. That argument has no winner.",
      },
      {
        icon: "💊",
        title: "The medication gamble",
        text: "Was the flea med this month or last? Did anyone give the antibiotic? A missed dose is bad; a double dose can mean a vet visit.",
      },
    ],
    featuresHeading: "How Pawlo keeps you both on the same page",
    features: [
      {
        icon: "✅",
        title: "One checklist, both phones",
        text: "Feeding, walks, meds — every task lives in one shared list. When your partner checks something off, you see it instantly.",
      },
      {
        icon: "👤",
        title: "Every task shows who did it",
        text: "“Done by Sam at 7:02 AM” — attribution on every check-off ends the guessing and the scorekeeping.",
      },
      {
        icon: "🚨",
        title: "Double-feed protection",
        text: "If a task is already done, Pawlo says so before you repeat it. Critical meds get an extra confirmation hold.",
      },
      {
        icon: "🔥",
        title: "Streaks you build together",
        text: "Complete every task and your household streak grows. It turns pet care from a chore ledger into a shared win.",
      },
    ],
    faqs: [
      {
        question: "Do we both need to pay for Pawlo?",
        answer:
          "No. One subscription covers your whole household. One of you subscribes, invites the other, and you both get full access on your own phones with your own accounts.",
      },
      {
        question: "How do we both see the same checklist?",
        answer:
          "You create a household in Pawlo and invite your partner with a link. From then on you share the same pets, the same schedule, and the same task list — every check-off syncs to both phones in real time.",
      },
      {
        question: "Is Pawlo free?",
        answer:
          "Pawlo has a 7-day free trial with full access, no commitment. After that it's $3.99/month, $24.99/year, or a one-time lifetime purchase — one plan covers unlimited household members.",
      },
      {
        question: "What if my partner has an Android phone?",
        answer:
          "Pawlo is currently iPhone-only. If one of you is on Android, Pawlo isn't the right fit yet — we'd rather tell you that than have half your household out of sync.",
      },
      {
        question: "How is this different from a shared reminders or notes app?",
        answer:
          "Reminders fire whether or not the task got done, and notes don't know who did what. Pawlo tracks completion with attribution, warns before double-feeding or double-dosing, and keeps a history you can actually look back on.",
      },
    ],
    relatedPosts: [
      {
        slug: "best-shared-pet-care-apps-couples-2026",
        title: "The Best Shared Pet Care Apps for Couples in 2026",
      },
      {
        slug: "split-pet-care-fairly-partner-roommate",
        title: "How to Split Pet Care Fairly With a Partner or Roommate",
      },
      {
        slug: "pet-care-invisible-labor-households",
        title: "The Invisible Labor Problem in Pet Care (And How to Fix It)",
      },
      {
        slug: "new-pet-tips-couples-roommates",
        title: "Just Got a Pet Together? How to Set Up Shared Care Before It Becomes a Problem",
      },
    ],
    crossLinks: [
      { href: "/pet-care-app-for-roommates", label: "Sharing a pet with roommates instead?" },
      { href: "/pet-care-app-for-families", label: "Whole family pitching in?" },
    ],
  },

  roommates: {
    slug: "pet-care-app-for-roommates",
    metaTitle: "Pet Care App for Roommates — Whose Turn Is It? Solved | Pawlo",
    metaDescription:
      "Pawlo is the shared pet care app for roommates. One synced checklist for the whole apartment — see who fed the dog, whose turn it is, and who's actually pulling their weight.",
    badge: "For roommates",
    h1Lead: "The pet care app for",
    h1Highlight: "roommates sharing a pet.",
    subheadline:
      "One synced checklist for the whole apartment. Everyone sees what's done, what's next, and who did it — no group-chat interrogations, no passive-aggressive whiteboard.",
    screenshot: {
      src: "/screenshots/task-done.png",
      alt: "Pawlo task check-off showing which roommate completed it",
    },
    painsLabel: "Sound familiar?",
    painsHeading: "Three roommates. One dog. Daily chaos.",
    painsIntro: "The group chat was never going to solve this.",
    pains: [
      {
        icon: "❓",
        title: "“Did anyone feed Max?”",
        text: "Three people, three schedules, zero shared memory. The dog either eats twice or waits until someone feels guilty.",
      },
      {
        icon: "💀",
        title: "The freeloader problem",
        text: "Someone in the apartment did two tasks all week — and everyone knows who, but nobody can prove it. Resentment compounds faster than rent.",
      },
      {
        icon: "✈️",
        title: "Handoff roulette",
        text: "Someone's away for the weekend and their share of the routine just… evaporates. Nothing gets reassigned; things get missed.",
      },
    ],
    featuresHeading: "How Pawlo keeps the apartment accountable",
    features: [
      {
        icon: "✅",
        title: "One list for the whole apartment",
        text: "Everyone joins the household and sees the same tasks. Check something off and every phone knows — no announcement required.",
      },
      {
        icon: "🧾",
        title: "Receipts on every task",
        text: "Every check-off is stamped with who and when. The activity history settles “who does more” with data instead of vibes.",
      },
      {
        icon: "🚨",
        title: "No more double feeds",
        text: "If someone already fed the dog, Pawlo warns the next person before bowl number two hits the floor.",
      },
      {
        icon: "🔥",
        title: "A streak the whole flat owns",
        text: "Keep every task done and the household streak climbs. Weirdly effective peer pressure — the good kind.",
      },
    ],
    faqs: [
      {
        question: "Does every roommate have to pay?",
        answer:
          "No. One subscription covers the whole household with unlimited members. One person subscribes and invites everyone else — you can settle who covers it however you split other apartment costs.",
      },
      {
        question: "What happens when a roommate moves out?",
        answer:
          "Remove them from the household and their access ends. The pet's schedule, history, and streak stay with the household, so nothing gets lost in the move.",
      },
      {
        question: "Can we track more than one pet?",
        answer:
          "Yes — add every pet in the apartment, each with its own routine of feeds, walks, meds, and litter. Tasks stay organized per pet so nothing blurs together.",
      },
      {
        question: "Does everyone need an iPhone?",
        answer:
          "Yes, for now — Pawlo is iOS-only. Every member of the household needs an iPhone to join and see the shared checklist.",
      },
      {
        question: "How is this better than our group chat or a whiteboard?",
        answer:
          "Chats scroll away and whiteboards lie. Pawlo keeps a live, synced record: what's done, what's due, who did it, and a history you can check when “I always walk her” needs a fact-check.",
      },
    ],
    relatedPosts: [
      {
        slug: "coordinate-pet-care-with-roommate",
        title: "How to Coordinate Pet Care With Your Roommate (Without the Passive-Aggressive Texts)",
      },
      {
        slug: "split-pet-care-fairly-partner-roommate",
        title: "How to Split Pet Care Fairly With a Partner or Roommate",
      },
      {
        slug: "feed-multiple-pets-without-chaos",
        title: "How to Feed Multiple Pets Without Food Stealing or Chaos",
      },
      {
        slug: "dog-cat-feeding-schedule-shared-home",
        title: "Dog and Cat Feeding Schedules: What Actually Works in a Shared Home",
      },
    ],
    crossLinks: [
      { href: "/pet-care-app-for-couples", label: "Just the two of you?" },
      { href: "/pet-care-app-for-families", label: "Family household instead?" },
    ],
  },

  families: {
    slug: "pet-care-app-for-families",
    metaTitle: "Family Pet Care App — Everyone Helps, Nothing Gets Missed | Pawlo",
    metaDescription:
      "Pawlo is the pet care app for families. Give kids real responsibility, let parents verify without nagging, and keep feeding, walks, and meds on one shared schedule.",
    badge: "For families",
    h1Lead: "The family pet care app where",
    h1Highlight: "everyone actually helps.",
    subheadline:
      "Kids check off the tasks they promised to do. Parents see it happen without asking. One shared schedule for feeding, walks, and meds — across every phone in the house.",
    screenshot: {
      src: "/screenshots/widget.png",
      alt: "Pawlo widget showing the family's pet care progress at a glance",
    },
    painsLabel: "Sound familiar?",
    painsHeading: "“The kids promised they'd feed the dog.”",
    painsIntro: "Every family with a pet knows how that sentence ends.",
    pains: [
      {
        icon: "🍽️",
        title: "The double-check dinner",
        text: "A kid says they fed the dog. A parent, unsure, feeds him again. The dog is thrilled; the vet, less so.",
      },
      {
        icon: "📱",
        title: "The family group text",
        text: "“Did anyone walk Bella?” — sent to four people, answered by none. The question isn't lazy; there's just no shared record.",
      },
      {
        icon: "😤",
        title: "Nagging instead of teaching",
        text: "You wanted the pet to teach responsibility. Instead you became the reminder system — and the fallback plan.",
      },
    ],
    featuresHeading: "How Pawlo gets the whole family in sync",
    features: [
      {
        icon: "✅",
        title: "One schedule, every phone",
        text: "The whole family shares one task list. Morning feed, after-school walk, evening meds — everyone sees what's done and what's next.",
      },
      {
        icon: "👀",
        title: "Verify without asking",
        text: "Every check-off shows who did it and when. Parents can trust-but-verify from the couch instead of interrogating at dinner.",
      },
      {
        icon: "🚨",
        title: "Protection against mix-ups",
        text: "Already fed? Pawlo warns before a second dinner. Medications get an extra confirmation hold so a busy house stays a safe one.",
      },
      {
        icon: "📲",
        title: "The widget on the lock screen",
        text: "Today's progress, next task, and the family streak — visible without even opening the app. Perfect for a quick glance before school.",
      },
    ],
    faqs: [
      {
        question: "Can my kids use Pawlo?",
        answer:
          "Yes — each family member joins the household from their own iPhone and can check off the tasks they're responsible for. Every check-off is attributed, so you always know who did what.",
      },
      {
        question: "Do we pay per family member?",
        answer:
          "No. One subscription covers the whole household with unlimited members — one parent subscribes and invites everyone else.",
      },
      {
        question: "How many pets and people can we add?",
        answer:
          "Unlimited household members, and every pet in the house — dogs, cats, and the rest — each with its own routine of feeds, walks, meds, and more.",
      },
      {
        question: "Is Pawlo free?",
        answer:
          "Every plan starts with a 7-day free trial with full access. After that it's $3.99/month, $24.99/year, or a one-time lifetime purchase for the whole household.",
      },
      {
        question: "Will it actually get my kids to do their pet chores?",
        answer:
          "Pawlo can't walk the dog for them — but visible tasks, name-stamped check-offs, and a family streak that everyone protects turn “did you do it?” into something kids want to mark done themselves.",
      },
    ],
    relatedPosts: [
      {
        slug: "dog-feeding-schedule-whole-household",
        title: "Dog Feeding Schedule: How to Build One Your Whole Household Actually Follows",
      },
      {
        slug: "did-someone-feed-the-dog-app",
        title: "Did Someone Feed the Dog? Here's the App That Finally Solves It",
      },
      {
        slug: "who-walked-the-dog-app",
        title: "Who Walked the Dog? The App That Ends the Daily Guessing Game",
      },
      {
        slug: "first-week-puppy-schedule",
        title: "The Realistic First-Week Puppy Schedule for Busy Households",
      },
    ],
    crossLinks: [
      { href: "/pet-care-app-for-couples", label: "Just you and a partner?" },
      { href: "/pet-care-app-for-roommates", label: "Roommate household?" },
    ],
  },
};
