export type Post = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  date: string;
  modifiedDate: string;
  readTime: string;
  category: string;
  keywords: string[];
  searchIntent: string;
  image: string;
  imageAlt: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedSlugs: string[];
  content: string;
};

const posts: Post[] = [
  {
    slug: "pawlo-vs-did-i-feed-the-dog-vs-who-fed-the-dog",
    title: "Pawlo vs. “Did I Feed the Dog?” vs. “Who Fed the Dog?”: An Honest Comparison",
    seoTitle: "Pawlo vs Did I Feed the Dog vs Who Fed the Dog (2026)",
    description:
      "Three apps promise to end the “did anyone feed the dog?” problem. Here's an honest look at what the simple feeding toggles do well, where they stop, and when you need more.",
    date: "2026-07-07",
    modifiedDate: "2026-07-07",
    readTime: "7 min read",
    category: "App Reviews",
    keywords: [
      "did i feed the dog app",
      "who fed the dog app",
      "pawlo vs did i feed the dog",
      "dog feeding tracker for households",
      "app to track who fed the dog",
      "shared pet care app comparison",
    ],
    searchIntent: "Compare Pawlo with Did I Feed the Dog and Who Fed the Dog",
    image: "/blog/pawlo-vs-feeding-tracker-apps.jpg",
    imageAlt:
      "Comparison graphic: simple fed/walked/meds question cards next to the Pawlo home screen",
    faqs: [
      {
        question: "What's the difference between Pawlo and Did I Feed the Dog?",
        answer:
          "Did I Feed the Dog? is built around one question — whether the dog was fed this morning or evening. Pawlo covers the whole shared routine: feeding, walks, medication, litter, and custom tasks, each stamped with who did it and when, synced across the household.",
      },
      {
        question: "Is a simple feeding toggle app enough for my household?",
        answer:
          "If feeding is genuinely your only coordination problem, a simple toggle app can be enough. If your household also shares walks, medication, or sitter handoffs — or argues about who does more — you'll outgrow a feeding-only tracker quickly.",
      },
      {
        question: "Does Pawlo have a free trial?",
        answer:
          "Yes. Pawlo comes with a 7-day free trial with full access, then costs $3.99/month, $24.99/year, or a one-time lifetime purchase. One subscription covers unlimited household members.",
      },
    ],
    relatedSlugs: [
      "did-someone-feed-the-dog-app",
      "best-pet-care-apps-2026",
      "dog-feeding-schedule-whole-household",
    ],
    content: `
<p>If you've ever typed “did I feed the dog” into the App Store, you found apps literally named after the question. <em>Did I Feed the Dog?</em> and <em>Who Fed the Dog?</em> both exist because one problem is nearly universal in multi-person households: nobody can remember whether the dog ate.</p>

<p>Pawlo gets compared to both, so here's an honest breakdown — including the cases where the simpler apps are the better pick.</p>

<h2>The short version</h2>

<p>All three apps answer “did anyone feed the dog?” The difference is what happens after that question. The toggle apps treat feeding as the whole problem. Pawlo treats it as the first of many: walks, medication, litter, sitter handoffs, and the “I always do everything” argument that follows a household everywhere.</p>

<div class="table-wrap">
<table>
<tr><th>What you need</th><th>Did I Feed the Dog?</th><th>Who Fed the Dog?</th><th>Pawlo</th></tr>
<tr><td>Feeding check-offs shared with the household</td><td>Yes — its entire purpose</td><td>Yes — its entire purpose</td><td>Yes</td></tr>
<tr><td>Walks, litter &amp; custom tasks</td><td>No — feeding only</td><td>No — feeding focused</td><td>Yes, full routine</td></tr>
<tr><td>Medication tracking with double-dose warnings</td><td>No</td><td>No</td><td>Yes</td></tr>
<tr><td>“Done by who, at what time” history</td><td>Limited</td><td>Limited</td><td>Every task, every time</td></tr>
<tr><td>Household streaks &amp; home-screen widgets</td><td>—</td><td>—</td><td>Yes</td></tr>
<tr><td>Sitter handoff (share the routine, not a sticky note)</td><td>No</td><td>No</td><td>Yes</td></tr>
</table>
</div>

<p><em>Based on public App Store listings as of July 2026 — features change, so double-check anything that's a dealbreaker for you.</em></p>

<h2>What the simple toggle apps get right</h2>

<p>Credit where due: <strong>Did I Feed the Dog?</strong> is a genuinely clever piece of design. It strips the problem down to a board of morning/evening toggles that anyone in the house can flip — including the grandparent who will never learn a “real” app. There's almost nothing to set up and nothing to get wrong.</p>

<p><strong>Who Fed the Dog?</strong> follows the same playbook: a lightweight, feeding-first tracker for households that want a shared yes/no answer.</p>

<p>If your household's <em>only</em> shared responsibility is feeding — one pet, no medications, walks handled by whoever feels like it — a toggle app may honestly be all you need. We'd rather tell you that than oversell you.</p>

<h2>Where the toggle stops working</h2>

<p>The trouble is that “did you feed him?” is rarely the only question. It's just the loudest one. The same household that double-feeds the dog also:</p>

<ul>
<li><strong>Forgets whose turn the evening walk is</strong> — and the dog pays for the standoff.</li>
<li><strong>Loses track of monthly flea and heartworm meds</strong> — where a missed dose is bad and a double dose can mean an emergency vet call.</li>
<li><strong>Has the “I do everything around here” fight</strong> — unwinnable when there's no record of who actually did what.</li>
<li><strong>Hands the sitter a sticky note</strong> — and spends the weekend answering texts about which bowl is whose.</li>
</ul>

<p>A feeding toggle can't help with any of that, because it only ever knew about one task. This is the gap Pawlo was built for: the <em>whole</em> routine, shared across the whole household, with every check-off attributed and synced in real time.</p>

<h2>The attribution difference</h2>

<p>The deeper difference isn't the number of task types — it's accountability. In Pawlo, every completed task reads like a receipt: <em>Morning Feed — done by Alex at 8:12 AM</em>. Over a week, that history quietly settles arguments that used to run on vibes — the double-feed question gets answered, but so does the fairness one.</p>

<p>Pawlo also actively protects against the scariest failure mode: if a task is already done, it warns the next person before they repeat it, and critical medications get an extra confirmation hold.</p>

<h2>Pricing</h2>

<p>Pawlo is $3.99/month, $24.99/year, or a one-time lifetime purchase — after a 7-day free trial with full access. One subscription covers unlimited household members, so a couple, a family, or a whole apartment pays once. The toggle apps are cheaper or free with lighter functionality; check their current listings for details.</p>

<h2>The bottom line</h2>

<p>Pick <strong>Did I Feed the Dog?</strong> or <strong>Who Fed the Dog?</strong> if feeding is truly your household's only shared task and you want the simplest possible toggle.</p>

<p>Pick <strong>Pawlo</strong> if your household shares more than feeding — walks, meds, multiple pets, a sitter now and then — or if “who actually does more” is a live question in your house. That's not a niche upgrade; it's the difference between answering one question and running the whole routine together.</p>
    `.trim(),
  },
  {
    slug: "best-pet-care-apps-2026",
    title: "The 5 Best Pet Care Apps in 2026 (Tested & Compared)",
    seoTitle: "Best Pet Care Apps for Shared Households in 2026",
    description:
      "We tested the most popular pet care apps to find the best options for tracking feeding, walks, medication, and shared household coordination.",
    date: "2026-05-20",
    modifiedDate: "2026-05-20",
    readTime: "8 min read",
    category: "App Reviews",
    keywords: [
      "best pet care app",
      "shared pet care app",
      "pet care tracker app",
      "dog feeding tracker app",
      "pet medication tracker app",
      "pet care app for families",
      "pet care app for roommates",
    ],
    searchIntent: "Compare pet care apps for household task tracking",
    image: "/blog/best-pet-care-apps-2026.jpg",
    imageAlt: "Person using a phone camera to capture a dog, representing pet care apps",
    faqs: [
      {
        question: "What is the best pet care app for multiple people?",
        answer:
          "Pawlo is built for multi-person households because every feeding, walk, medication, and care task updates in real time for partners, roommates, families, and pet sitters.",
      },
      {
        question: "What should I look for in a pet care tracking app?",
        answer:
          "Look for real-time sync, task attribution, medication reminders, multi-pet support, shared household access, and a clear history of who completed each pet care task.",
      },
      {
        question: "Can one pet care app work for dogs and cats?",
        answer:
          "Yes. Pawlo supports any pet, including dogs and cats, so mixed-pet households can track feeding, walks, litter, medication, and recurring care tasks in one shared place.",
      },
    ],
    relatedSlugs: [
      "did-someone-feed-the-dog-app",
      "pet-medication-tracker-never-miss-dose",
      "best-shared-pet-care-apps-couples-2026",
    ],
    content: `
<p>There are dozens of pet care apps on the App Store in 2026, but most of them solve the wrong problem. They're great for storing digital copies of vet records, but terrible at answering the daily question: <em>"Did someone feed the dog?"</em></p>

<p>We tested the top apps available today. Here is how they stack up, starting with the clear winner for shared households.</p>

<h2>1. Pawlo — Best for Shared Households</h2>

<p>If you share pet care duties with a partner, roommate, or family member, Pawlo is the clear winner. Unlike other apps that focus on single-user record keeping, Pawlo is built entirely around real-time household coordination.</p>

<p><strong>The good:</strong></p>
<ul>
<li><strong>Real-time sync:</strong> When you tap "Morning Walk" done, everyone in your household sees it instantly. No more double-feeding or forgotten medications.</li>
<li><strong>Conflict Detection:</strong> Actively prevents two people from accidentally completing the same task at the same time.</li>
<li><strong>Household Streaks:</strong> A surprisingly motivating way to build consistent habits together.</li>
<li><strong>All Pets Supported:</strong> Dogs, cats, rabbits — it works for any pet.</li>
</ul>

<p><strong>Pricing:</strong> 7-day free trial, then $3.99/mo, $24.99/yr, or $199.99 for lifetime access (limited launch offer).</p>
<p><strong>The verdict:</strong> The most polished, effective app for multi-person households. The shared visibility completely eliminates the friction of coordinating daily care.</p>

<h2>2. DogLog — Best for Dog-Focused Families</h2>

<p>DogLog is Pawlo's closest competitor. It also focuses on shared "Pack" management and activity logging, but with a few key differences.</p>

<p><strong>The good:</strong> Good for puppy owners and dogs with medical needs. Includes a photo social feed and AI pet care Q&A.</p>
<p><strong>The bad:</strong> Dogs-only focus makes it useless for cat owners. The interface is somewhat dated, and multi-pet switching can be cumbersome. Some users report occasional sync bugs.</p>

<p><strong>Pricing:</strong> Free with ads, Premium ~$3.99-7.49/mo.</p>
<p><strong>The verdict:</strong> A solid option if you only have dogs and don't mind a slightly clunkier interface.</p>

<h2>3. 11pets — Most Comprehensive Feature Set</h2>

<p>11pets is the "kitchen sink" of pet apps. It tries to do everything, with over 50 features including deep medical records and document storage.</p>

<p><strong>The good:</strong> Excellent for managing chronic health conditions and archiving x-rays or lab results.</p>
<p><strong>The bad:</strong> The interface is confusing and non-intuitive — there are simply too many screens for simple tasks. Recent updates have introduced bugs, and some features were moved behind a paywall without notice.</p>

<p><strong>Pricing:</strong> Freemium, Premium ~$4.99/mo.</p>
<p><strong>The verdict:</strong> Choose this only if your primary need is complex medical record storage.</p>

<h2>4. Dog Daily — Best Offline Experience</h2>

<p>Dog Daily is a clean, modern tracker with a unique advantage: it works completely offline and syncs when you reconnect.</p>

<p><strong>The good:</strong> Clean interface, predictive potty scheduling, and habit streaks. Great for areas with spotty internet.</p>
<p><strong>The bad:</strong> Dogs only. It has a very small user base, which makes long-term developer support uncertain. Privacy practices have not been independently verified.</p>

<p><strong>Pricing:</strong> $7.99/mo or $29.99/yr.</p>
<p><strong>The verdict:</strong> A nice indie app, but the small user base makes it a risky long-term choice for your data.</p>

<h2>5. Pet Diary — Best for Solo Record-Keeping</h2>

<p>Pet Diary is a digital notebook for your pet's life, focusing on health records, expense tracking, and journaling moments.</p>

<p><strong>The good:</strong> Great for single owners who want to keep a comprehensive digital diary and track expenses.</p>
<p><strong>The bad:</strong> No shared household features. No real-time sync. It's not a coordination tool at all.</p>

<p><strong>Pricing:</strong> Freemium, Premium ~$4.99-9.99/mo.</p>
<p><strong>The verdict:</strong> Use this if you live alone and just want a digital scrapbook for your pet.</p>

<h2>Conclusion</h2>

<p>If you're managing a pet on your own and want a digital scrapbook, Pet Diary works well. If you have a dog with complex medical needs, 11pets has the deepest features.</p>

<p>But if you share pet care with <em>anyone</em> else — a partner, a roommate, or kids — <strong>Pawlo is in a class of its own.</strong> The real-time sync and focus on accountability makes it the only app that actually solves the daily "did someone feed the dog?" problem.</p>
    `.trim(),
  },
  {
    slug: "did-someone-feed-the-dog-app",
    title: "Did Someone Feed the Dog? Here's the App That Finally Solves It",
    seoTitle: "Did Someone Feed the Dog? Shared Feeding Tracker App",
    description:
      "The most common argument in pet-owning households has a surprisingly simple fix. Here's why a dedicated shared pet care app beats texting, sticky notes, and group chats.",
    date: "2026-05-01",
    modifiedDate: "2026-05-20",
    readTime: "5 min read",
    category: "Pet Care Tips",
    keywords: [
      "did someone feed the dog app",
      "dog feeding tracker",
      "shared dog feeding app",
      "app to track dog feeding",
      "pet care app for couples",
      "prevent double feeding dog",
      "household pet care tracker",
    ],
    searchIntent: "Find an app to know whether a dog has been fed",
    image: "/blog/did-someone-feed-the-dog-app.jpg",
    imageAlt: "Small dog waiting while a person measures food above a bowl",
    faqs: [
      {
        question: "How can I tell if someone already fed the dog?",
        answer:
          "Use a shared pet care tracker where each household member marks feeding complete. Pawlo shows the completed task, timestamp, and person who handled it in real time.",
      },
      {
        question: "Why is texting a bad way to track dog feeding?",
        answer:
          "Texts get buried and rely on someone remembering to send an update. A shared feeding tracker keeps a persistent task history that everyone can check at any time.",
      },
      {
        question: "Can Pawlo help prevent double-feeding?",
        answer:
          "Yes. When one person marks a feeding task done, everyone else in the household sees it immediately, which removes the guesswork that leads to accidental second meals.",
      },
    ],
    relatedSlugs: [
      "dog-feeding-schedule-whole-household",
      "who-walked-the-dog-app",
      "coordinate-pet-care-with-roommate",
    ],
    content: `
<p>You've had the conversation a hundred times. One person is sure they fed the dog. The other is equally sure they didn't. The dog is looking up at you with those eyes — the eyes that have secured him a second breakfast more mornings than you'd like to admit.</p>

<p>If you share a home and a pet with another person, this isn't just an annoyance. It's a near-daily occurrence that has launched a thousand passive-aggressive texts and, occasionally, a very confused and overfed golden retriever.</p>

<h2>Why This Problem Keeps Happening</h2>

<p>Pet care in a multi-person household is an invisible coordination problem. Feeding the dog takes thirty seconds and leaves no trace. There's no receipt, no notification, no flag in the calendar. By the time your partner walks through the door two hours later, neither of you can say with certainty what happened and when.</p>

<p>This gets worse with medication. Monthly flea and tick treatments, daily supplements, prescription meds — these matter. A double dose of certain medications can be dangerous. A missed dose can mean a vet visit. And yet most households track these on a sticky note or, more often, in no one's head at all.</p>

<h2>Why the Usual Solutions Don't Work</h2>

<p>Households try a lot of things before they find something that sticks.</p>

<p><strong>The group chat:</strong> "Fed Max at 7!" gets buried under forty other messages by noon. By next week it's completely useless as a reference.</p>

<p><strong>The sticky note:</strong> Works for about three days. Then someone forgets to update it, and now the note says the wrong thing, which is almost worse than no note at all.</p>

<p><strong>The shared calendar:</strong> Overkill for a daily feeding, impossible to check at a glance, and not built for the cadence of pet care tasks.</p>

<p><strong>The honor system:</strong> Everyone means well. Nobody has a reliable memory. Dogs get two breakfasts.</p>

<h2>What You Actually Need</h2>

<p>The solution is simple in theory: everyone in the household needs to see, in real time, whether a task has been completed and who did it. No chasing. No texting. No ambiguity.</p>

<p>That's exactly what <strong>Pawlo</strong> was built for.</p>

<p>Pawlo is a shared pet care app designed specifically for multi-person households — couples, families, and roommates who share responsibility for a pet. When one person marks a task as done, every other member of the household sees it instantly: the task, the time, and the name of who did it.</p>

<h2>How It Works in Practice</h2>

<p>Setup takes under two minutes. You create a household, add your pet, and invite your partner or roommates via a link. From there, your shared task list is live — visible to everyone, updated in real time.</p>

<p>When it's feeding time, whoever gets there first opens the app, taps "Morning Feed," and marks it done. Ten seconds, tops. Your partner, across town at work, sees it immediately. No text needed. No ambiguity. No second breakfast.</p>

<p>Pawlo also tracks <strong>streaks</strong> — your household's consecutive days of completing all pet care tasks. It sounds small, but streak visibility turns out to be surprisingly motivating. People don't want to break a 14-day streak over a skipped evening walk.</p>

<h2>For Households With Medication Schedules</h2>

<p>The real value becomes obvious the moment you add a medication task. Monthly flea treatment, daily joint supplement, twice-weekly ear drops — Pawlo tracks all of it with the same one-tap completion system. No one doubles a dose. No one misses one. The history is always there to check.</p>

<p>With Pawlo Premium, you can also add <strong>smart reminders</strong> — push notifications that fire if a task hasn't been completed by a certain time. If the evening feed hasn't been marked done by 7 PM, everyone in the household gets a nudge.</p>

<h2>Try It Free</h2>

<p>Pawlo offers a 7-day free trial with full access to every feature — unlimited pets, unlimited household members, widgets, smart reminders, and more. After the trial, plans start at $3.99/month, $24.99/year, or $199.99 for lifetime access.</p>

<p>If you've ever sent a text that just says "did you feed him?" — Pawlo is the app you've been waiting for.</p>
    `.trim(),
  },
  {
    slug: "best-shared-pet-care-apps-couples-2026",
    title: "The Best Shared Pet Care Apps for Couples in 2026",
    seoTitle: "Best Shared Pet Care Apps for Couples in 2026",
    description:
      "If you and your partner share a pet, a generic to-do app isn't going to cut it. Here are the best options in 2026 — and what to actually look for before you commit.",
    date: "2026-05-03",
    modifiedDate: "2026-05-20",
    readTime: "6 min read",
    category: "App Reviews",
    keywords: [
      "pet care app for couples",
      "shared pet care app",
      "shared dog care app",
      "couples pet care tracker",
      "pet task app for partners",
      "dog feeding app for couples",
      "pet care schedule app",
    ],
    searchIntent: "Compare shared pet care apps for partners",
    image: "/blog/best-shared-pet-care-apps-couples-2026.jpg",
    imageAlt: "Couple sitting in a living room with their dog",
    faqs: [
      {
        question: "What is the best pet care app for couples?",
        answer:
          "For couples who share daily pet care, Pawlo is designed around real-time shared tasks, completion history, and household reminders rather than single-user record keeping.",
      },
      {
        question: "Do couples need a dedicated pet care app?",
        answer:
          "A dedicated pet care app helps when both partners feed, walk, medicate, or check on the same pet. It prevents missed tasks, double-feeding, and unclear responsibility.",
      },
      {
        question: "Can Pawlo include dog walkers or family members too?",
        answer:
          "Yes. Pawlo households can include partners, roommates, family members, and outside helpers so everyone works from the same shared care status.",
      },
    ],
    relatedSlugs: [
      "new-pet-tips-couples-roommates",
      "pet-care-invisible-labor-households",
      "did-someone-feed-the-dog-app",
    ],
    content: `
<p>Sharing a pet with your partner is wonderful. Sharing the mental load of pet care is significantly less wonderful — especially when neither of you can remember who last gave the cat her flea medication.</p>

<p>Generic to-do apps and shared calendars technically work, but they're not built for the rhythm of daily pet care. They don't tell you who marked a task done, they don't build in streak accountability, and they don't sync fast enough to prevent the double-feeding problem every pet household eventually runs into.</p>

<p>In 2026, there are a handful of dedicated options worth considering. Here's what to look for and how each one stacks up.</p>

<h2>What to Look for in a Shared Pet Care App</h2>

<p>Before you download anything, know what actually matters:</p>

<ul>
<li><strong>Real-time sync:</strong> Changes should appear instantly for both partners — not after a refresh or a manual pull.</li>
<li><strong>Task attribution:</strong> You need to see <em>who</em> completed a task, not just that it was completed.</li>
<li><strong>No member limit:</strong> Life changes. Dog walkers, family members, and house-sitters may need to join.</li>
<li><strong>Multi-pet support:</strong> Even if you only have one pet now, plan for the future.</li>
<li><strong>Generous free trial:</strong> You shouldn't have to pay before you know the app fits your routine. Look for a 7-day trial.</li>
</ul>

<h2>The Options in 2026</h2>

<h3>1. Pawlo — Best Overall for Couples and Households</h3>

<p>Pawlo was designed from the ground up for multi-person pet care. The core mechanic is exactly what couples need: a shared task list where every completion is visible in real time, tagged with the name of whoever did it. No more "I thought you fed her."</p>

<p>Setup is genuinely fast — you can have a household running in under two minutes, invite your partner via a link, and be tracking tasks before your coffee finishes brewing. The 7-day free trial gives you full access to every feature, which is perfect for most couples starting out.</p>

<p>What sets Pawlo apart is the <strong>streak system</strong>: your household earns consecutive-day streaks for completing all tasks. It sounds trivial until your partner refuses to let a 21-day streak die over a forgotten evening walk. That's real accountability with zero nagging.</p>

<p>Premium ($3.99/month or $24.99/year) adds unlimited pets, home screen widgets, smart reminders, and full care history. The free trial is seven days — long enough to actually evaluate it.</p>

<p><strong>Best for:</strong> Couples, roommates, and families who want a purpose-built solution with real-time visibility.<br/>
<strong>Free trial:</strong> 7 days, full access.<br/>
<strong>Platform:</strong> iOS</p>

<h3>2. Petable</h3>

<p>Petable is a solid pet management app focused primarily on vet appointments, vaccination records, and health tracking. It does have reminder features, but it's fundamentally a health-record tool, not a household coordination tool.</p>

<p>For couples whose main need is keeping track of vet visits and medical history, Petable is worth a look. For the day-to-day feeding, walking, and task coordination problem, it's not designed for that use case.</p>

<p><strong>Best for:</strong> Tracking vet visits and health records.<br/>
<strong>Free plan:</strong> Yes, limited.<br/>
<strong>Platform:</strong> iOS and Android</p>

<h3>3. Generic Task Apps (Notion, Todoist, Things)</h3>

<p>General-purpose task managers are flexible, but that flexibility comes at a cost. They require significant setup to approximate what a dedicated pet care app does out of the box. And they lack critical features: task attribution ("who marked this done?"), streak tracking, and pet-specific context.</p>

<p>If you're already a power user of one of these tools, you can make it work. But it's the duct-tape solution when there's a dedicated tool available.</p>

<p><strong>Best for:</strong> Power users who want everything in one system and don't mind the setup.<br/>
<strong>Free plan:</strong> Varies.<br/>
<strong>Platform:</strong> All platforms</p>

<h3>4. The Group Chat</h3>

<p>Not an app. Not a recommendation. Listed here because it's what most couples default to, and it's genuinely the worst option for this use case. No completion history, no accountability, no visibility into what was done versus what was just discussed. The dog gets two breakfasts. You've been there.</p>

<h2>The Verdict</h2>

<p>If your primary goal is coordinating daily pet care tasks between two or more people, <strong>Pawlo is the clear choice in 2026</strong>. It's the only app on this list actually designed for household-level coordination — not reminders for one person, not health records, not a repurposed task manager.</p>

<p>The 7-day trial gives you full access, setup takes minutes, and the real-time sync is fast enough to prevent the scenarios that cause 90% of pet-household arguments.</p>
    `.trim(),
  },
  {
    slug: "coordinate-pet-care-with-roommate",
    title: "How to Coordinate Pet Care With Your Roommate (Without the Passive-Aggressive Texts)",
    seoTitle: "How to Coordinate Pet Care With a Roommate",
    description:
      "Sharing pet care with a roommate is one of those things that sounds easy and isn't. Here's a practical guide to getting on the same page — and an app that does the heavy lifting.",
    date: "2026-05-06",
    modifiedDate: "2026-05-20",
    readTime: "5 min read",
    category: "Pet Care Tips",
    keywords: [
      "pet care app for roommates",
      "coordinate pet care with roommate",
      "shared pet care app",
      "roommate dog care schedule",
      "shared pet chores",
      "pet task tracker for roommates",
      "dog feeding app roommates",
    ],
    searchIntent: "Coordinate pet chores between roommates",
    image: "/blog/coordinate-pet-care-with-roommate.jpg",
    imageAlt: "Two people sharing a living room with a dog while coordinating from laptops",
    faqs: [
      {
        question: "How do roommates split pet care fairly?",
        answer:
          "Roommates should agree on recurring tasks, track completions in a shared place, and review who handled feeding, walks, litter, and medication over time.",
      },
      {
        question: "What is the easiest way to coordinate dog care with a roommate?",
        answer:
          "A shared pet care app like Pawlo gives both roommates the same live task list, so each person can see what has been done and what still needs attention.",
      },
      {
        question: "Can Pawlo show who completed each pet task?",
        answer:
          "Yes. Pawlo records the person and time for each completed task, which helps prevent duplicated care and makes the workload easier to discuss.",
      },
    ],
    relatedSlugs: [
      "who-walked-the-dog-app",
      "pet-care-invisible-labor-households",
      "dog-feeding-schedule-whole-household",
    ],
    content: `
<p>Sharing pet care with a roommate starts with the best intentions. You'll split it evenly. You'll communicate. It'll be fine.</p>

<p>Six weeks later, someone has sent the text "did you walk her today??" four times in one week with an escalating number of question marks, and there's a sticky note on the fridge that was last updated in March.</p>

<p>This is not a personal failing. It's a coordination problem — and coordination problems have solutions.</p>

<h2>The Three Ways It Usually Goes Wrong</h2>

<p><strong>The invisible task:</strong> Someone does a task but doesn't tell anyone. The other roommate assumes it hasn't been done and does it again. Now the dog has had two dinners and is thrilled; the vet is less thrilled when you mention it at the next checkup.</p>

<p><strong>The assumed task:</strong> Both roommates assume the other one handled it. Nobody did. The cat misses her evening meal. By the time someone notices, it's 10 PM and everyone feels guilty.</p>

<p><strong>The scorekeeping:</strong> Over time, one person feels like they're doing more than their share. Without any visible record of who did what, this is impossible to verify or dispute — which means it becomes a relationship issue instead of a logistics issue.</p>

<h2>What Good Coordination Actually Looks Like</h2>

<p>Good pet care coordination between roommates has three qualities:</p>

<ol>
<li><strong>Shared visibility:</strong> Everyone can see, at a glance, what's been done today and what hasn't.</li>
<li><strong>Attribution:</strong> Completed tasks show who did them and when — so credit is clear and there's no double-doing.</li>
<li><strong>Low friction:</strong> The system has to be easier to use than ignoring it. If logging a task takes more than ten seconds, people stop doing it.</li>
</ol>

<p>A group chat fails on all three counts. A shared calendar fails on friction. A whiteboard fails on visibility (it's not in everyone's pocket).</p>

<h2>How Pawlo Solves This</h2>

<p>Pawlo is a shared pet care app built for exactly this situation. Here's how the roommate setup works in practice:</p>

<p>One person creates a household in Pawlo, adds the pet and its tasks (feeding, walking, litter, meds — whatever applies), and shares an invite link. The roommate taps the link, joins the household, and the shared task list is live on both phones within about ninety seconds.</p>

<p>From that point, when either roommate completes a task, they tap it in the app. Done. The other person's phone shows it updated in real time: "Morning Walk — completed by Alex at 8:14 AM." No text needed. No wondering. No second walk.</p>

<p>The task history also means the scorekeeping problem largely disappears. Both roommates can see exactly who did what over the past week, with timestamps. Disagreements about who's carrying the load become a data question instead of a feelings argument.</p>

<h2>Setting Up Your Pawlo Household for Two Roommates</h2>

<p>A few things worth doing when you first set it up:</p>

<ul>
<li><strong>Add every recurring task, not just feeding.</strong> Walks, litter scooping, medication, water changes — if it needs tracking, add it. The value of the app is in having a complete picture, not a partial one.</li>
<li><strong>Set task schedules.</strong> Morning feed, evening feed, weekly medication — Pawlo lets you set when tasks are expected so nothing falls through the cracks.</li>
<li><strong>Enable smart reminders (Premium).</strong> If a task hasn't been marked done by a certain time, everyone in the household gets a nudge. No more "I assumed you'd do it."</li>
</ul>

<h2>Try Pawlo Free for 7 Days</h2>

<p>Pawlo offers a 7-day free trial with full access to every feature — unlimited pets, unlimited household members, home screen widgets, and smart reminders. After the trial, plans start at $3.99/month or $24.99/year.</p>

<p>Pet care coordination with a roommate doesn't have to be a source of friction. It just needs a system — and two minutes to set one up.</p>
    `.trim(),
  },
  {
    slug: "dog-feeding-schedule-whole-household",
    title: "Dog Feeding Schedule: How to Build One Your Whole Household Actually Follows",
    seoTitle: "Dog Feeding Schedule for Multi-Person Households",
    description:
      "A consistent dog feeding schedule is critical for your dog's health and behavior. Here's how to build one that every member of your household will actually stick to.",
    date: "2026-05-08",
    modifiedDate: "2026-05-20",
    readTime: "6 min read",
    category: "Dog Care",
    keywords: [
      "dog feeding schedule",
      "dog feeding tracker",
      "dog feeding app",
      "shared dog feeding schedule",
      "family dog feeding schedule",
      "prevent double feeding dog",
      "dog care routine app",
    ],
    searchIntent: "Create a reliable dog feeding schedule for a household",
    image: "/blog/dog-feeding-schedule-whole-household.jpg",
    imageAlt: "Person pouring food into a dog bowl at home",
    faqs: [
      {
        question: "How often should most adult dogs be fed?",
        answer:
          "Most adult dogs do well with two meals per day, usually morning and evening, but your veterinarian can recommend the right timing and portion size for your dog.",
      },
      {
        question: "How do you prevent double-feeding in a family?",
        answer:
          "Use one shared feeding log that updates immediately when anyone feeds the dog. Pawlo shows the completed feeding task, who did it, and the timestamp.",
      },
      {
        question: "Should feeding schedules be tracked by task or by person?",
        answer:
          "Track the completed feeding task first, then show who handled it. That gives the whole household a clear answer without forcing one person to own every meal.",
      },
    ],
    relatedSlugs: [
      "did-someone-feed-the-dog-app",
      "best-pet-care-apps-2026",
      "pet-medication-tracker-never-miss-dose",
    ],
    content: `
<p>Dogs thrive on routine. A consistent feeding schedule improves digestion, supports a healthy weight, makes housetraining easier, and reduces anxiety-driven behaviors. Most dog owners know this. Implementing it in a multi-person household — where two, three, or four people share feeding responsibility — is where things tend to break down.</p>

<p>The schedule exists in theory. In practice, it lives in everyone's head slightly differently, and dogs get fed at 6 AM on some days and 9 AM on others, depending on who's home.</p>

<h2>Why Inconsistency Happens in Multi-Person Households</h2>

<p>A feeding schedule works when one person owns it entirely. When responsibility is shared, three failure modes appear:</p>

<p><strong>Double-feeding:</strong> Person A feeds the dog before work. Person B gets home an hour later, doesn't see any evidence that the dog was fed, and feeds him again. The dog is delighted. This is bad for his stomach, his weight, and his training — dogs who figure out that looking hungry gets them extra meals become experts at looking hungry.</p>

<p><strong>Missed meals:</strong> Both people assume the other one handled it. Neither did. This is less common but happens — particularly during busy weeks or schedule disruptions.</p>

<p><strong>Schedule drift:</strong> Feeding times gradually shift to accommodate whoever's home. Morning feed slides from 7 AM to 9 AM. Evening feed moves around the dinner hour. The dog's internal clock adjusts, and so do his expectations — which creates problems when the schedule needs to snap back to normal.</p>

<h2>Building a Schedule That Holds</h2>

<h3>Step 1: Pick Fixed Times and Stick to Them</h3>

<p>For most adult dogs, two meals per day works well — morning and evening, roughly 10–12 hours apart. Puppies may need three or four meals. Whatever your vet recommends, choose specific times and treat them like commitments, not targets.</p>

<p>Example: 7:00 AM and 6:30 PM. Not "morning" and "evening." Specific times your household can plan around.</p>

<h3>Step 2: Assign Responsibility — But Build in Flexibility</h3>

<p>Designating a "primary feeder" for each meal reduces ambiguity on normal days. But life is unpredictable — people travel, schedules shift, kids have events. The system needs to handle handoffs gracefully.</p>

<p>The key is visibility. Whoever ends up feeding the dog needs to communicate it clearly, and whoever was supposed to do it needs to know they're off the hook. This is where most informal systems (texts, sticky notes) start breaking down.</p>

<h3>Step 3: Track Completions, Not Plans</h3>

<p>The most important habit you can build into your household's feeding schedule isn't remembering to feed the dog — it's logging when it's done. A completed log entry tells everyone in the household that the task is handled. An empty log tells them it's not.</p>

<p>This is the insight behind <strong>Pawlo</strong>, a shared pet care app designed for exactly this. When any household member marks "Morning Feed" as complete in Pawlo, every other member sees it in real time — time-stamped and attributed to the person who did it. No text needed. No guessing. The double-feeding problem disappears.</p>

<h3>Step 4: Build in Accountability With Streaks</h3>

<p>Pawlo tracks your household's feeding streak — the number of consecutive days all daily tasks have been completed on schedule. This feature sounds minor and works surprisingly well in practice. Households report that streak visibility creates a gentle competitive dynamic that makes people less likely to let tasks slide.</p>

<p>A 30-day feeding streak is a meaningful signal: your dog has been fed consistently, on schedule, every day for a month. That's the kind of routine that produces real behavioral and health benefits.</p>

<h3>Step 5: Add Reminders for Missed Windows</h3>

<p>With Pawlo Premium, you can set smart reminders — push notifications that fire if a task hasn't been completed by a certain time. If the evening feed hasn't been logged by 7 PM, everyone in the household gets a nudge. It's the safety net for the days when everyone is busy and everyone assumed someone else handled it.</p>

<h2>A Note on Meal Amounts</h2>

<p>A feeding schedule is only part of the equation. Work with your vet to determine the right portion size for your dog's age, weight, and activity level. Measure portions rather than eyeballing — and make sure the whole household is using the same measurement. Double-feeding is dangerous partly because of timing, but equally because of volume.</p>

<h2>The System That Works</h2>

<p>The households that maintain consistent feeding schedules aren't the ones with the best intentions — they're the ones with the best systems. A shared tracker like Pawlo, combined with fixed meal times and clear household expectations, turns a coordination problem into a solved problem.</p>

<p>Your dog doesn't care who feeds him. He just wants it to happen at the same time every day, every day. Give him that, and you'll see the difference.</p>
    `.trim(),
  },
  {
    slug: "pet-medication-tracker-never-miss-dose",
    title: "Pet Medication Tracker: How to Make Sure Your Pet Never Misses a Dose",
    seoTitle: "Pet Medication Tracker for Shared Households",
    description:
      "Missing a pet medication dose can have real health consequences. Here's how to build a reliable tracking system for households where multiple people share care responsibility.",
    date: "2026-05-09",
    modifiedDate: "2026-05-20",
    readTime: "5 min read",
    category: "Pet Health",
    keywords: [
      "pet medication tracker",
      "dog medication tracker",
      "cat medication tracker",
      "pet medication reminder app",
      "shared pet medication tracker",
      "pet meds app",
      "track pet medication doses",
    ],
    searchIntent: "Track pet medication doses across multiple caregivers",
    image: "/blog/pet-medication-tracker-never-miss-dose.jpg",
    imageAlt: "Veterinarian preparing equipment during a dog health check",
    faqs: [
      {
        question: "What is the safest way to track pet medication in a household?",
        answer:
          "Use a shared tracker that records each dose with a timestamp and the person who gave it, then alerts the household when a scheduled dose has not been completed.",
      },
      {
        question: "Can Pawlo track monthly flea, tick, or heartworm medication?",
        answer:
          "Yes. Pawlo can track recurring daily, weekly, or monthly medication tasks and show the history to everyone in the household.",
      },
      {
        question: "What should I do if I am not sure whether my pet got a dose?",
        answer:
          "Contact your veterinarian before giving another dose, especially for prescription medication or preventatives. A timestamped tracker helps avoid that uncertainty.",
      },
    ],
    relatedSlugs: [
      "dog-feeding-schedule-whole-household",
      "best-pet-care-apps-2026",
      "new-pet-tips-couples-roommates",
    ],
    content: `
<p>Pet medications are unforgiving in a way that feeding schedules aren't. Miss a morning meal and your dog is hungry but fine. Miss a heartworm prevention dose at the wrong time and you've created a gap in protection. Give a double dose of certain medications and you've created a more immediate problem.</p>

<p>In a single-person household, this is manageable. You gave the pill. You know you gave it. Done.</p>

<p>In a household of two or more people sharing care responsibility, medication becomes the highest-stakes coordination problem in pet ownership. And most households are solving it — or not solving it — with sticky notes and hope.</p>

<h2>The Three Medication Failure Modes</h2>

<p><strong>The missed dose:</strong> Both people think the other one handled it. Neither did. This is most common with monthly medications — flea and tick prevention, heartworm prevention — where the gap between doses means the event doesn't feel pressing enough for either person to take ownership.</p>

<p><strong>The double dose:</strong> One person gives the medication. The other doesn't know and gives it again. For most supplements, this is a minor issue. For prescription medications or monthly parasite preventatives, it can be a genuine health risk requiring a call to your vet.</p>

<p><strong>The "I think I gave it" problem:</strong> No one is completely certain what happened. You probably gave the flea treatment last month. It might have been the month before. You can't really remember, and there's no record. You decide to give it now to be safe — which might be too soon.</p>

<h2>Why Standard Approaches Don't Work</h2>

<p><strong>Sticky notes:</strong> Can't tell you who administered the medication or exactly when. Often get ignored or outdated. Don't live in everyone's pocket.</p>

<p><strong>Texts:</strong> "Gave Luna her flea treatment" gets buried immediately. Six weeks later when it's due again, no one is scrolling back through iMessage to verify.</p>

<p><strong>Phone reminders:</strong> Work for one person. Don't solve the household coordination problem. Your reminder goes off; your partner's doesn't. If you're out of town, the reminder fires on your phone while your partner is home with the pet and no notification.</p>

<p><strong>Vet app reminders:</strong> Vet-focused apps like Petable are built for appointment tracking, not daily or monthly household task coordination. They remind you to schedule things, not to track who did what.</p>

<h2>What a Real Pet Medication Tracker Needs</h2>

<p>For a multi-person household, a medication tracker has to do four things:</p>

<ul>
<li>Show whether the medication has been given today (or this month) at a glance</li>
<li>Record who gave it and when</li>
<li>Alert the whole household if it hasn't been given by a certain time</li>
<li>Build a history so you can answer your vet's "when did she last have this?" question accurately</li>
</ul>

<p>This is exactly what <strong>Pawlo</strong> handles through its task system.</p>

<h2>How to Set Up Medication Tracking in Pawlo</h2>

<p>In Pawlo, every pet care task — including medications — is a shared household task. Setup takes about two minutes:</p>

<p>Add your medication as a task in your pet's profile. Set the frequency (daily, weekly, monthly — whatever applies). When any household member administers the medication, they tap the task and mark it complete. That completion is immediately visible to every other member of the household, with a timestamp and their name.</p>

<p>No one doubles the dose. No one misses it. The history is always there.</p>

<p>With <strong>Pawlo Premium</strong>, you can enable smart reminders for medication tasks — if a monthly treatment hasn't been logged by a certain date, everyone in the household gets a push notification. It's the difference between "I think we're due" and "we got a reminder three days ago and marked it done."</p>

<h2>For Households With Complex Medication Schedules</h2>

<p>Multi-pet households — or pets with multiple medications — benefit especially from a structured tracker. Pawlo Premium supports unlimited pets, each with their own task lists and schedules. A dog on daily joint supplements, a cat on twice-weekly ear drops, and a rabbit on monthly antiparasitic treatment can all be tracked in the same household dashboard, shared across everyone who helps with care.</p>

<h2>A Note on Medication Safety</h2>

<p>If you're ever genuinely uncertain whether a dose was given, call your vet before re-administering. Most will prefer to advise caution — especially for prescription medications and monthly preventatives. The best outcome is having a clear timestamp record that makes that call unnecessary.</p>

<p>A shared pet medication tracker isn't a luxury. For households with multiple caregivers, it's basic risk management. Pawlo makes it take ten seconds per dose — which is about nine seconds more effort than it currently takes to accidentally create the "did someone give it?" problem.</p>
    `.trim(),
  },
  {
    slug: "new-pet-tips-couples-roommates",
    title: "Just Got a Pet Together? How to Set Up Shared Care Before It Becomes a Problem",
    seoTitle: "New Pet Tips for Couples and Roommates Sharing Care",
    description:
      "The first few weeks with a new pet are exciting — and surprisingly easy to mess up if you and your household aren't coordinated from day one. Here's how to start right.",
    date: "2026-05-14",
    modifiedDate: "2026-05-20",
    readTime: "5 min read",
    category: "Pet Care Tips",
    keywords: [
      "new pet tips",
      "new pet checklist",
      "shared pet care",
      "new dog checklist couples",
      "pet care app for couples",
      "pet care app for roommates",
      "first week with new pet",
    ],
    searchIntent: "Set up shared pet care for a new pet",
    image: "/blog/new-pet-tips-couples-roommates.jpg",
    imageAlt: "Smiling couple cuddling a new dog outdoors",
    faqs: [
      {
        question: "What should couples do first after getting a pet together?",
        answer:
          "Couples should agree on daily care tasks, create a shared feeding and walking routine, and use one visible place to track who completed each task.",
      },
      {
        question: "What should roommates track for a new pet?",
        answer:
          "Roommates should track feeding, walks or litter, fresh water, medication, flea and tick prevention, and any training or care routines that need consistency.",
      },
      {
        question: "When should a household start using a pet care tracker?",
        answer:
          "Start in the first week. It is easier to build a shared tracking habit before missed tasks, double-feeding, or unclear responsibility becomes normal.",
      },
    ],
    relatedSlugs: [
      "best-shared-pet-care-apps-couples-2026",
      "coordinate-pet-care-with-roommate",
      "dog-feeding-schedule-whole-household",
    ],
    content: `
<p>Getting a pet together is one of those milestones that sounds straightforward until you're standing in your kitchen at 7am, both of you holding a bag of dog food, each absolutely certain the other one forgot to feed him.</p>

<p>Welcome to shared pet ownership. It's great. It is also, without a system, a reliable source of low-grade household friction.</p>

<h2>The Problem Starts on Day One</h2>

<p>New pet owners make one consistent mistake: they assume coordination will happen naturally. It doesn't. Two people with good intentions and different schedules will double-feed a dog, miss medication doses, and have the "I thought you walked her" conversation more times than they'd like to count.</p>

<p>This isn't a trust problem. It's an information problem. When one person takes care of a task and doesn't tell the other — not out of negligence, but just because it didn't occur to them — the other person has no way to know it's done.</p>

<h2>The Setup That Actually Works</h2>

<p>Before your first week together is over, agree on three things:</p>

<p><strong>1. A shared task list, not a verbal agreement.</strong> "We'll just let each other know" works until both of you are exhausted, running late, or simply forget. A shared, real-time list removes the need to communicate every individual task.</p>

<p><strong>2. Clear task attribution.</strong> It's not enough to see that a task is done — you need to know who did it and when. This prevents both double-tasking and the "I thought you were handling it" situation.</p>

<p><strong>3. A morning and evening rhythm.</strong> Most pet care falls into morning tasks (feeding, morning walk) and evening tasks (dinner, medication, last walk). Establishing which person usually owns which session reduces the number of decisions you have to make every day.</p>

<h2>What to Track From the Start</h2>

<p>For a new dog or puppy, your daily task list typically includes:</p>

<ul>
  <li>Morning feeding</li>
  <li>Evening feeding</li>
  <li>Fresh water (more important than people realize)</li>
  <li>Morning walk</li>
  <li>Evening walk or outdoor time</li>
  <li>Monthly flea and tick prevention</li>
  <li>Any prescribed medications</li>
</ul>

<p>For a new cat, the list is shorter but the coordination problem is the same: feeding twice daily, fresh water, litter box, monthly preventatives, medications.</p>

<h2>Using an App Built for This</h2>

<p><strong>Pawlo</strong> is a shared pet care app designed exactly for this situation. You set up a household, add your pet, choose which daily tasks you want to track, and invite whoever shares pet care with you. From that point on, both of you see the same real-time task list: what's been done, who did it, and when.</p>

<p>When one person feeds the dog, the task is marked done with their name and a timestamp. The other person opens the app and instantly knows — no text needed. The double-feed problem disappears on day one.</p>

<p>Pawlo also tracks a household streak: the number of consecutive days you've completed all your pet's tasks together. For new pet owners building a routine, that streak becomes surprisingly motivating.</p>

<h2>The First Habit Is the Most Important</h2>

<p>The easiest time to build a coordination habit is before you've built any bad ones. If you set up a shared tracking system in your first week, it becomes invisible infrastructure — something you just do, automatically, without thinking about it.</p>

<p>If you wait until after the first argument about who forgot to refill the water bowl, you're retrofitting a solution onto an already-established pattern of non-communication. That's harder.</p>

<p>Start coordinated. It takes ten minutes to set up and saves a surprising amount of daily friction.</p>
    `.trim(),
  },
  {
    slug: "who-walked-the-dog-app",
    title: "Who Walked the Dog? The App That Ends the Daily Guessing Game",
    seoTitle: "Who Walked the Dog? Shared Dog Walking Tracker App",
    description:
      "If your household has ever stood in the hallway asking who last walked the dog, there's a better solution than texting. Here's why a shared pet care app is the answer.",
    date: "2026-05-11",
    modifiedDate: "2026-05-20",
    readTime: "4 min read",
    category: "Pet Care Tips",
    keywords: [
      "who walked the dog app",
      "dog walking tracker",
      "shared dog walking app",
      "dog walk tracker for families",
      "pet care app for roommates",
      "shared pet care app",
      "dog care tracker",
    ],
    searchIntent: "Track whether someone walked the dog",
    image: "/blog/who-walked-the-dog-app.jpg",
    imageAlt: "Three people standing on a grassy hill with a dog on a leash",
    faqs: [
      {
        question: "How can I track who walked the dog?",
        answer:
          "Use a shared dog walking tracker that records each completed walk with the person and time. Pawlo makes that status visible to the whole household immediately.",
      },
      {
        question: "Can a dog walking tracker help families and roommates?",
        answer:
          "Yes. It gives every caregiver the same answer about whether a walk happened, which prevents skipped walks, duplicated walks, and last-minute confusion.",
      },
      {
        question: "Does Pawlo track other tasks besides walks?",
        answer:
          "Yes. Pawlo tracks walks, feeding, medication, fresh water, litter, and custom pet care tasks for dogs, cats, and other pets.",
      },
    ],
    relatedSlugs: [
      "coordinate-pet-care-with-roommate",
      "did-someone-feed-the-dog-app",
      "pet-care-invisible-labor-households",
    ],
    content: `
<p>"Who walked the dog?" is one of the most reliably annoying questions in a shared household. Not because anyone is being irresponsible — but because a ten-minute walk leaves no trace, and memory in a busy household is unreliable.</p>

<p>By the time you're both home in the evening, neither of you can confidently say whether the dog's midday walk happened, who did it, or when. So one of you takes him out again to be safe. Or you assume it's handled and it wasn't.</p>

<h2>Why This Keeps Happening</h2>

<p>Walking a dog is a completable task that leaves no evidence. Unlike dishes (still in the drying rack) or laundry (pile on the bed), a completed walk is invisible. The only way to know it happened is to have been there or to have been told.</p>

<p>In a single-person household, this isn't a problem. In any household with two or more people sharing pet responsibilities, it's a daily source of uncertainty — and occasionally, a very tired dog who has walked four miles before noon.</p>

<h2>What "Just Text Me" Actually Looks Like</h2>

<p>Most households try the text solution first. "Walked Max at noon!" goes into the group chat. It works until:</p>

<ul>
  <li>Someone forgets to send the text</li>
  <li>The message gets buried under other conversations</li>
  <li>The person who needs to know has their phone on silent</li>
  <li>You want to check the history and realize it's 600 messages deep</li>
</ul>

<p>Texting is great for communication. It's a terrible system for tracking.</p>

<h2>An App Built for This Exact Problem</h2>

<p><strong>Pawlo</strong> turns walk tracking into a one-tap action with a shared real-time result. When someone walks the dog, they open Pawlo, tap the walk task, and mark it done. That's it. Every other member of the household immediately sees: "Sarah walked Max · 12:04pm."</p>

<p>No text to send. No chat to dig through. Anyone in the household can open the app at any moment and see the exact status of every care task — including when it last happened and who did it.</p>

<h2>The Broader Benefit</h2>

<p>Walk tracking is usually where people start, but the same problem exists for feeding, medications, water, and litter. Once your household has a shared real-time task list, the question "did someone handle X?" essentially stops being asked. The answer is always a tap away.</p>

<p>Pawlo also surfaces something most households don't track: who is actually doing the most. The built-in contribution tracker and weekly leaderboard make the invisible labor visible. That turns out to be useful for more than just competitive reasons — it prevents resentment from building up in one direction when the workload is genuinely unbalanced.</p>

<h2>Try It Free</h2>

<p>Pawlo offers a 7-day free trial with full access to every feature — unlimited pets, unlimited household members, widgets, smart reminders, and more. After the trial, plans start at $3.99/month, $24.99/year, or $199.99 for lifetime access.</p>

<p>Setup takes under two minutes. If "who walked the dog?" is a question your household asks more than once a week, the math is pretty simple.</p>
    `.trim(),
  },
  {
    slug: "pet-care-invisible-labor-households",
    title: "The Invisible Labor Problem in Pet Care (And How to Fix It)",
    seoTitle: "How to Make Shared Pet Care Fair in Busy Households",
    description:
      "In most households, one person does significantly more pet care than the other — and neither of them has receipts to prove it. Here's why that happens and what actually helps.",
    date: "2026-05-08",
    modifiedDate: "2026-05-20",
    readTime: "5 min read",
    category: "Household Tips",
    keywords: [
      "shared pet care",
      "pet chores",
      "pet care tracker",
      "pet care app for families",
      "pet care app for couples",
      "fair pet care household",
      "pet responsibility tracker",
    ],
    searchIntent: "Make shared pet care responsibilities visible and fair",
    image: "/blog/pet-care-invisible-labor-households.jpg",
    imageAlt: "Person hand feeding a dog as part of daily pet care",
    faqs: [
      {
        question: "Why does pet care feel unfair in shared households?",
        answer:
          "Pet care tasks are frequent and often invisible, so one person can do more feeding, walking, and medication without anyone having a clear record of the workload.",
      },
      {
        question: "How can a household make pet care more balanced?",
        answer:
          "Track completed tasks by person, agree on morning and evening responsibilities, and review patterns before resentment builds.",
      },
      {
        question: "Does Pawlo show who does each pet care task?",
        answer:
          "Yes. Pawlo records task completion by person and time, which helps couples, families, and roommates see the actual care pattern instead of relying on memory.",
      },
    ],
    relatedSlugs: [
      "best-shared-pet-care-apps-couples-2026",
      "coordinate-pet-care-with-roommate",
      "pet-medication-tracker-never-miss-dose",
    ],
    content: `
<p>In most households that share a pet, one person does more of the day-to-day care than the other. This is almost universal — and it almost never gets acknowledged until it becomes a problem.</p>

<p>It's not usually that one person doesn't care. It's that pet care tasks are small, frequent, and invisible. They happen in the margins of the day — before someone's out the door, when they come home, during a quick break. Nobody's tracking them. Nobody has receipts.</p>

<h2>Why Invisible Labor Creates Visible Problems</h2>

<p>The person who consistently handles more pet care knows they're doing it. They feel it in the small accumulation of tasks — the morning feeds, the extra walks, the medication they track in their head because nobody else is. But they often can't articulate the gap precisely, because there's no record.</p>

<p>The person doing less often genuinely doesn't know the imbalance exists. From their perspective, things seem roughly shared. They helped with the walk on Saturday. They fed the cat twice last week. The information gap between what's actually happening and what each person perceives is the source of most of the friction.</p>

<h2>The Accountability Gap</h2>

<p>Unlike household chores with visible outputs — dishes, vacuuming, laundry — pet care leaves almost no trace. A fed dog looks exactly like an unfed dog for at least a few hours. A completed walk is invisible thirty minutes later. There's no signal to the other person that a task happened unless someone explicitly says so.</p>

<p>When both people are busy, that communication gets skipped. Over time, patterns develop invisibly. One person becomes the default handler for morning feeding. The other quietly assumes the first person "has it." Neither conversation ever happens explicitly.</p>

<h2>What Shared Tracking Actually Changes</h2>

<p>Shared task tracking doesn't solve the underlying imbalance by itself — but it makes the imbalance visible. When both people can see a weekly summary of who completed what tasks, the data replaces the argument.</p>

<p><strong>Pawlo</strong> includes a contribution tracker that shows exactly who did what, how many tasks each person completed over a given period, and who's currently leading the household leaderboard. This sounds like a game mechanic. In practice, it functions more like a mirror.</p>

<p>Households that start tracking often find one of two things: either the workload is more balanced than the higher-contributor thought (and the resentment dissolves), or the data confirms the imbalance and gives both people a shared, inarguable starting point for a real conversation.</p>

<h2>Building a More Equitable System</h2>

<p>A few things that help, once you have visibility:</p>

<p><strong>Split by time of day, not by individual task.</strong> Assigning "morning tasks" to one person and "evening tasks" to another is cleaner than negotiating individual tasks. It's fewer decisions and more predictable.</p>

<p><strong>Build in explicit coverage for disruptions.</strong> Travel, late nights, and illness all break routines. Having a default "if I'm not around, you're handling it" agreement prevents the gap.</p>

<p><strong>Track medication separately.</strong> Medication is the highest-stakes task in pet care — a missed or doubled dose can mean a vet visit. It should be tracked with attribution and timestamps regardless of how you handle other tasks.</p>

<h2>The Point Isn't Competition</h2>

<p>The Pawlo leaderboard is designed to be lighthearted — most households use it for gentle trash-talk, not genuine conflict. But the underlying tracking it's built on is genuinely useful: it gives both people a shared, accurate picture of what's happening, so the conversation starts from facts instead of feelings.</p>

<p>Invisible labor is hard to address when it's invisible. The first step is making it visible.</p>
    `.trim(),
  },
  {
    slug: "first-week-puppy-schedule",
    title: "The Realistic First-Week Puppy Schedule for Busy Households",
    seoTitle: "First Week Puppy Schedule: Realistic Routine for Busy Households",
    description:
      "Bringing home a new puppy is chaotic. Here's an honest, hour-by-hour puppy schedule for the first week that actually works when two people share the responsibility.",
    date: "2026-05-20",
    modifiedDate: "2026-05-20",
    readTime: "9 min read",
    category: "Dog Care",
    keywords: [
      "puppy schedule",
      "first week puppy routine",
      "new puppy checklist",
      "puppy routine for couples",
      "new puppy schedule",
      "puppy first week home",
      "puppy care schedule",
    ],
    searchIntent: "Build a realistic daily schedule for a new puppy",
    image: "/blog/first-week-puppy-schedule.webp",
    imageAlt: "Cute puppy standing on a light wooden floor inside a home",
    faqs: [
      {
        question: "What should a puppy's daily schedule look like in the first week?",
        answer:
          "A first-week puppy schedule should include feeding 3–4 times per day, a potty trip outside every 1–2 hours while awake, short supervised play sessions, and consistent nap times in a crate or pen.",
      },
      {
        question: "How do two people share puppy care responsibilities?",
        answer:
          "Split the day into morning and evening shifts, track each feeding and potty trip in a shared app like Pawlo, and agree in advance who handles overnight wake-ups.",
      },
      {
        question: "How often does an 8-week-old puppy need to go outside?",
        answer:
          "Every 1–2 hours while awake, plus immediately after waking from a nap and within 15 minutes of eating. Puppies have tiny bladders and cannot hold it for long.",
      },
      {
        question: "How long should a puppy sleep in the first week?",
        answer:
          "Puppies 8–12 weeks old typically sleep 16–20 hours per day. Short active windows followed by long nap periods is completely normal.",
      },
    ],
    relatedSlugs: [
      "new-pet-tips-couples-roommates",
      "dog-feeding-schedule-whole-household",
      "pet-medication-tracker-never-miss-dose",
    ],
    content: `
<p>You searched for a puppy schedule and found twelve versions that all assume you have nothing else going on in your life. One of them has a color-coded spreadsheet. Another suggests a 5 AM morning routine like that's going to happen.</p>

<p>This is not that. This is what the first week actually looks like for a working household — two people, a real job, and a small furry creature who has no concept of your calendar.</p>

<h2>What Week One Is Actually About</h2>

<p>The first week isn't about training your puppy. It's about three things: keeping them safe, establishing basic rhythms, and not completely destroying your own sleep. That's it. Everything else — sit, stay, leash manners — comes later when your puppy has had a chance to decompress.</p>

<p>Puppies arriving at a new home are overwhelmed. New smells, new sounds, new people, no littermates. The kindest thing you can do in week one is keep things calm, consistent, and predictable. Big social events, trips to pet stores, and showing the puppy off to the whole extended family can wait until week two.</p>

<h2>The Honest Daily Framework</h2>

<p>Here's a realistic structure built around a household where both people work. It's not perfectly color-coded, but it works.</p>

<h3>Early Morning (6:00–7:30 AM)</h3>
<ul>
  <li><strong>Immediate potty trip outside.</strong> The very first thing, before coffee, before anything. Puppies have no bladder control in the morning. Take them out within sixty seconds of waking.</li>
  <li><strong>First meal of the day.</strong> After the potty trip, feed breakfast. Measure the portion — don't eyeball it, especially if two people are sharing feeding duties.</li>
  <li><strong>Potty trip again 10–15 minutes after eating.</strong> Puppies almost always need to go shortly after a meal.</li>
  <li><strong>Short supervised play.</strong> 15–20 minutes of light play before the puppy tires out. Puppies this age fatigue quickly.</li>
  <li><strong>Nap in crate.</strong> After play, put the puppy in their crate or pen. They'll sleep for 1–2 hours.</li>
</ul>

<h3>Mid-Morning (9:00–11:00 AM)</h3>
<ul>
  <li><strong>Potty trip immediately when they wake.</strong> Don't wait for them to signal — assume they need to go.</li>
  <li><strong>Second meal (for puppies under 12 weeks, 3–4 meals per day is standard).</strong></li>
  <li><strong>Another potty trip after eating.</strong></li>
  <li><strong>Short play, then back to the crate for another nap.</strong></li>
</ul>

<h3>Midday (12:00–2:00 PM)</h3>
<p>If both people are working, this is the trickiest window. Options:</p>
<ul>
  <li>Come home on a lunch break if possible.</li>
  <li>Have a neighbor, friend, or dog walker check in.</li>
  <li>Use a puppy pen with puppy pads as backup if no one can make it.</li>
</ul>
<p>A puppy under 10 weeks should not be crated for more than 2 hours at a time during the day. If your work situation makes this genuinely impossible right now, consider delaying the pickup date or arranging coverage for the first few weeks.</p>

<h3>Afternoon (3:00–5:00 PM)</h3>
<ul>
  <li>Potty trip, third meal, potty trip again.</li>
  <li>Slightly longer play session — by the afternoon your puppy will have more energy after solid naps.</li>
  <li>Begin light crate training practice: short intervals in the crate with the door closed while you're in the room, building comfort gradually.</li>
</ul>

<h3>Evening (6:00–9:00 PM)</h3>
<ul>
  <li>Fourth meal if your puppy is under 12 weeks.</li>
  <li>Potty trip.</li>
  <li>Family time — let the puppy decompress around you in the living room with supervision. This is a good time for gentle handling: touching paws, ears, looking in mouth. Get them used to being touched all over now, before it matters.</li>
  <li>Final potty trip right before crating for bed.</li>
</ul>

<h3>Overnight</h3>
<p>The hard truth: puppies 8–12 weeks old will likely wake once or twice overnight needing a potty trip. This is normal and will improve by weeks 3–4 as their bladder capacity grows. Plan who handles which overnight wake-up before you go to sleep — not at 2 AM when you're both exhausted and resentful.</p>

<h2>The Shared Household Complication</h2>

<p>When two people share puppy care, the schedule above only works if both people are working from the same information. The three most common first-week failures in shared households:</p>

<p><strong>Double feeding.</strong> Person A feeds the puppy at 7 AM and leaves for work. Person B wakes up later, doesn't know, and feeds the puppy again. An overfed puppy is uncomfortable and hard to housetrain — a full stomach triggers the need to go almost immediately.</p>

<p><strong>Missed potty trips.</strong> Each person assumes the other took the puppy out. The crate gets soiled. The puppy learns that their den isn't a safe space to keep clean, which sets back housetraining significantly.</p>

<p><strong>Inconsistent crate timing.</strong> One person lets the puppy out of the crate when they cry. The other holds firm. The puppy learns that crying works, which makes crate training take three times as long.</p>

<p>The solution to all three is shared visibility. You need a system where both people can see, in real time, what's been done and when — without texting each other every hour.</p>

<p><strong>Pawlo</strong> is the easiest way to do this. Set up feeding, potty, and crate tasks in the app. When one person completes a task, it's immediately visible to the other with a timestamp. No more "did you feed her?" — the answer is always one tap away. During the first week especially, that kind of clarity matters.</p>

<h2>Puppy Supplies to Have Ready Before Day One</h2>

<p>This checklist applies to the first week specifically — not an exhaustive lifetime puppy supply list:</p>

<ul>
  <li><strong>Crate (appropriately sized).</strong> Just big enough for your puppy to stand, turn around, and lie down. Too large and they'll use a corner as a bathroom.</li>
  <li><strong>Enzymatic cleaner.</strong> There will be accidents. Regular cleaners don't break down the odor compounds that attract puppies back to the same spot.</li>
  <li><strong>Puppy-appropriate food.</strong> Whatever your breeder or shelter was feeding. Switching food immediately can cause digestive upset — if you're changing brands, transition gradually over a week.</li>
  <li><strong>Measuring cup.</strong> Not a guess. Not a scoop from the bag. An actual measured portion, especially if two people are feeding.</li>
  <li><strong>Treat pouch.</strong> You'll be rewarding a lot of outdoor potty success in week one. Have something small and high-value ready.</li>
  <li><strong>Baby gates or exercise pen.</strong> Limiting your puppy to one or two rooms is not mean — it's management. A puppy who can access the whole house will find places to have accidents that you won't discover for days.</li>
</ul>

<h2>What to Skip in Week One</h2>

<p><strong>Formal training classes.</strong> Most trainers won't accept puppies younger than 12–16 weeks anyway due to vaccination requirements. Week one is not the time.</p>

<p><strong>Dog parks.</strong> Your puppy's vaccine series isn't complete. Avoid dog parks and high-traffic dog areas entirely for the first several weeks.</p>

<p><strong>Letting the puppy "cry it out" without a plan.</strong> Some fussing in the crate is normal. Sustained panicked crying is not. The goal is a gradual, positive introduction to the crate — not a first night of trauma that you spend three weeks recovering from.</p>

<p><strong>Too much freedom too fast.</strong> The most common week-one mistake is giving the puppy access to too much space before they've learned the rules. Earn freedom through clean track records in small spaces.</p>

<h2>The Metric That Actually Matters in Week One</h2>

<p>Every time your puppy successfully goes outside, it's a win. Every indoor accident is just information — not failure. In week one, success means outdoor trips are happening every 1–2 hours while the puppy is awake, and each one is rewarded immediately.</p>

<p>By the end of week one, you won't have a perfectly trained dog. You will have a puppy who is starting to associate outside with good things, sleeping in a crate without total panic, and learning the shape of your household's daily rhythm. That's enough. Build from there.</p>

<h2>Tracking It All Together</h2>

<p>If your household runs on two different schedules and two different phones, a shared tracker is worth setting up before the puppy arrives. Pawlo lets you track feedings, potty trips, and any other recurring task with one tap — and shows both household members the same real-time status. In a week where you're sleep-deprived and trying to remember if the puppy ate at 7 or 9, that shared log is genuinely useful. Start the free 7-day trial before pickup day, get your tasks set up, and the first week coordination problem essentially solves itself.</p>
    `.trim(),
  },
  {
    slug: "pet-sitter-instructions-checklist",
    title: "Pet Sitter Instructions Checklist: What to Leave Before You Travel",
    seoTitle: "Pet Sitter Instructions Checklist: Feeding, Meds, Walks, and Emergency Info",
    description:
      "Leaving your pet with a sitter is only stress-free if they have the right information. Here's a complete checklist of everything to leave behind before you travel.",
    date: "2026-05-20",
    modifiedDate: "2026-05-20",
    readTime: "8 min read",
    category: "Pet Care Tips",
    keywords: [
      "pet sitter instructions",
      "dog sitter checklist",
      "cat sitter instructions",
      "pet care instructions template",
      "what to tell pet sitter",
      "pet sitter information sheet",
      "dog sitter instructions",
    ],
    searchIntent: "Create a complete instructions sheet for a pet sitter before traveling",
    image: "/blog/pet-sitter-instructions-checklist.webp",
    imageAlt: "Person gently petting a dog on a cozy rug at home",
    faqs: [
      {
        question: "What information should I leave for a pet sitter?",
        answer:
          "Leave feeding schedule and portions, medication details with exact timing, walk routine, emergency vet contact, behavioral notes, household access instructions, and a way to reach you.",
      },
      {
        question: "How do I make sure a pet sitter doesn't miss medications?",
        answer:
          "Write down the medication name, dose, timing, and how to administer it. Set up a shared tracker like Pawlo so both you and the sitter can see whether each dose was completed.",
      },
      {
        question: "Should I leave my pet sitter access to a pet care app?",
        answer:
          "Yes. Apps like Pawlo let you add a sitter to your household temporarily so you can see exactly when they fed, walked, or medicated your pet — from wherever you are.",
      },
    ],
    relatedSlugs: [
      "pet-medication-tracker-never-miss-dose",
      "dog-feeding-schedule-whole-household",
      "coordinate-pet-care-with-roommate",
    ],
    content: `
<p>The anxiety of traveling while leaving a pet behind has a direct cure: information. Not a wall of text on the counter that no one reads, but clear, organized instructions covering every scenario your sitter might face.</p>

<p>Most pet owners under-prepare. They leave a bag of food, a phone number, and an "she's pretty easy, just feed her twice a day." Then they spend the first two days of vacation answering texts about where the leash is and whether the dog is supposed to have that much food.</p>

<p>Over-preparing takes thirty minutes and saves everyone a vacation's worth of anxiety. Here's what to include.</p>

<h2>Part 1: Feeding</h2>

<p>Feeding instructions are the most important and the most commonly messed up. Be specific:</p>

<ul>
  <li><strong>Food location.</strong> Where is it stored? If it's in a sealed container, where is the scoop?</li>
  <li><strong>Exact portion size.</strong> "A cup and a half" is better than "fill the bowl." Better still: measure it yourself and show them the amount once before you leave.</li>
  <li><strong>Feeding times.</strong> Not "morning and evening" but "7 AM and 6 PM." Your pet's digestive system runs on a clock.</li>
  <li><strong>Any food restrictions.</strong> Allergies, no table scraps, no rawhide, not allowed to beg at the table. Be explicit — your sitter doesn't know your house rules.</li>
  <li><strong>Water.</strong> Where is the bowl? Does it need to be refilled daily? Does your pet have a fountain that needs to be kept filled?</li>
  <li><strong>Treats.</strong> Are they allowed? How many per day? Any treats that are off-limits?</li>
</ul>

<p>If you have multiple pets, write separate feeding notes for each. Multi-pet feeding is complicated enough when you live there — it's genuinely confusing for someone who doesn't know your animals.</p>

<h2>Part 2: Medications</h2>

<p>Medication instructions deserve their own section, not a line buried in the feeding notes. For each medication:</p>

<ul>
  <li><strong>Name of the medication.</strong> Both the brand name and the generic if you know it.</li>
  <li><strong>What it's for.</strong> This matters — a sitter who knows it's a seizure medication will treat a missed dose differently than one who doesn't know what the pill does.</li>
  <li><strong>Dose.</strong> How many tablets, what volume of liquid, which sized pill.</li>
  <li><strong>Timing.</strong> Exact time. Twice daily means 12 hours apart, not "morning and evening whenever."</li>
  <li><strong>How to administer it.</strong> In food? In a pill pocket? Directly? Does your pet resist? What trick actually works?</li>
  <li><strong>What to do if a dose is missed.</strong> Some medications require a call to the vet before re-dosing. Others can be given when remembered. Write the specific guidance, or call your vet ahead of time and write down what they say.</li>
  <li><strong>Storage requirements.</strong> Some medications need refrigeration. Some need to be kept dry. Don't assume your sitter will check.</li>
</ul>

<p>For sitters you trust but don't know well, consider using <strong>Pawlo</strong> to add them as a household member temporarily. They can log each medication dose as they give it, and you can see from your phone whether doses are being completed — without having to text them every day to check. It also creates a timestamped record you can share with your vet if needed.</p>

<h2>Part 3: Walks and Exercise</h2>

<ul>
  <li><strong>How many walks per day and roughly when.</strong> Be honest about your dog's actual needs, not a best-case scenario. If your dog needs three solid walks a day, say so.</li>
  <li><strong>Walk length.</strong> "Around the block" is very different from "30 minutes." Be specific.</li>
  <li><strong>Leash behavior notes.</strong> Does your dog pull? Lunge at other dogs? Get reactive on the leash? Warn them — being surprised by a reactive dog is how sitters and dogs both get hurt.</li>
  <li><strong>Usual route or acceptable areas.</strong> Some dogs do better on familiar routes. If there are dog parks, off-leash areas, or specific paths you allow or avoid, say so.</li>
  <li><strong>Potty cues.</strong> What does your dog do when they need to go? Sniffing circles, pacing, heading to the door? First-time sitters won't know.</li>
  <li><strong>Harness or collar?</strong> Which one is the walking equipment? Where is it?</li>
</ul>

<p>For cats: outdoor access, if any — does your cat go outside? Is there a schedule? A cat door? If strictly indoor, write that explicitly. Cats are escape artists and a sitter who isn't warned may accidentally let them out.</p>

<h2>Part 4: Behavioral Notes</h2>

<p>This is the section most people skip and most sitters need. Your pet has quirks that you navigate automatically without thinking. Your sitter is encountering them without context.</p>

<ul>
  <li><strong>Anxiety triggers.</strong> Thunderstorms? Fireworks? Men with hats? People arriving at the door? Let the sitter know what sets your pet off and what helps.</li>
  <li><strong>Food guarding or resource guarding.</strong> If your dog growls around their bowl or toy, say so clearly. This is a safety issue.</li>
  <li><strong>Where they sleep.</strong> Are they allowed on furniture? Do they sleep in a crate? Does the crate door stay closed?</li>
  <li><strong>Separation anxiety signals.</strong> Will they bark for hours? Destroy things? Or settle quickly? What typically helps?</li>
  <li><strong>Interaction preferences.</strong> Does your cat hate being picked up? Does your dog get overstimulated by extended play? Does your pet need a quiet period after activity?</li>
  <li><strong>Other pet dynamics.</strong> If you have multiple animals, note any that don't get along, can't be fed together, or need to be separated at certain times.</li>
</ul>

<h2>Part 5: Emergency Information</h2>

<p>This section is the one your sitter hopes they never need and will be extremely grateful to have if they do.</p>

<ul>
  <li><strong>Your vet's name, address, and phone number.</strong></li>
  <li><strong>After-hours or emergency vet.</strong> Know this before you leave. Don't make your sitter google it at midnight.</li>
  <li><strong>Your phone number and the best times to reach you.</strong> If you're crossing time zones, note what "after 9 PM" means in which time zone.</li>
  <li><strong>A backup contact.</strong> Someone local who knows your pet and can step in if your sitter has an emergency.</li>
  <li><strong>Known health issues.</strong> Anything the vet would need to know in an emergency — prior surgeries, current conditions, known allergies to medications.</li>
  <li><strong>Authorization for emergency care.</strong> In writing, state that your sitter has authority to authorize veterinary treatment up to a specific dollar amount without reaching you. This removes a painful decision from an already stressful moment.</li>
</ul>

<h2>Part 6: Household Logistics</h2>

<p>The practical stuff that gets forgotten:</p>

<ul>
  <li><strong>Wi-Fi password.</strong></li>
  <li><strong>Alarm code, if applicable.</strong> Which doors set it off? What's the grace period?</li>
  <li><strong>Trash day.</strong> If they're staying multiple days, this matters.</li>
  <li><strong>Mail/packages.</strong> Do they need to bring anything in?</li>
  <li><strong>Any household rules.</strong> No shoes inside? Guest bathroom only? Lock the back gate?</li>
  <li><strong>Parking.</strong> Where do they park if they're staying or coming multiple times per day?</li>
</ul>

<h2>The Shared Tracker Advantage</h2>

<p>A written instructions sheet covers the setup. What it doesn't solve is ongoing visibility — knowing, from wherever you are, whether your pet has been fed today, whether the medication was given, whether the walk happened.</p>

<p>The cleanest solution is adding your sitter to your Pawlo household before you leave. Share an invite link, show them the task list once, and from that point you can check the app from your hotel room and see exactly what's been completed and when. No texts needed. No daily check-ins. If something's overdue, you'll see it. If everything's done, you can actually relax.</p>

<p>After the trip, remove them from the household — it takes one tap. The history of their care is saved if you ever need it.</p>

<h2>How to Leave the Instructions</h2>

<p>Print a physical copy and leave it somewhere visible — on the counter, on the fridge, near the food. Also send the same information digitally so they can search it on their phone. Cover both formats.</p>

<p>Walk through the instructions with your sitter in person before you leave, ideally at least a day ahead so there's time for questions. Don't brief them at the door while you're loading the car. The thirty minutes you spend on a proper handoff is worth more than any checklist.</p>

<p>The goal is a sitter who never has to guess. Every question they don't have to text you is a vacation you actually get to have.</p>
    `.trim(),
  },
  {
    slug: "feed-multiple-pets-without-chaos",
    title: "How to Feed Multiple Pets Without Food Stealing or Chaos",
    seoTitle: "How to Feed Multiple Pets Without One Eating Everyone's Food",
    description:
      "Multi-pet feeding is one of those problems that sounds simple and definitely isn't. Here's what actually works to keep every pet eating their own food, on their own schedule.",
    date: "2026-05-20",
    modifiedDate: "2026-05-20",
    readTime: "9 min read",
    category: "Pet Care Tips",
    keywords: [
      "feed multiple cats",
      "multi pet feeding schedule",
      "cat eating other cat food",
      "automatic feeder alternative",
      "feeding multiple pets",
      "dog eating cat food",
      "multi cat feeding station",
    ],
    searchIntent: "Solve multi-pet food stealing and feeding coordination problems",
    image: "/blog/feed-multiple-pets-without-chaos.webp",
    imageAlt: "Close-up of three cats eating from bowls indoors",
    faqs: [
      {
        question: "How do you stop one cat from eating another cat's food?",
        answer:
          "The most reliable methods are feeding in separate rooms with closed doors, using microchip-activated feeders, or timed sequential feeding where you supervise until each pet finishes.",
      },
      {
        question: "Can cats and dogs eat together?",
        answer:
          "Not usually without management. Dog food and cat food have different nutritional profiles, and dogs will typically eat cat food if given access. Feeding cats on elevated surfaces dogs can't reach is a common solution.",
      },
      {
        question: "How do you track feeding for multiple pets?",
        answer:
          "A shared app like Pawlo lets you set up separate feeding tasks per pet. Any household member can mark each pet's meal complete, so everyone knows which pets have been fed.",
      },
      {
        question: "Are automatic feeders a good solution for multi-pet homes?",
        answer:
          "They help with timing but don't solve the food-stealing problem on their own. Microchip-activated feeders that only open for one specific pet are the most effective automated solution.",
      },
    ],
    relatedSlugs: [
      "dog-feeding-schedule-whole-household",
      "did-someone-feed-the-dog-app",
      "pet-medication-tracker-never-miss-dose",
    ],
    content: `
<p>If you have one pet, feeding is a non-event. You put food down. They eat it. Done.</p>

<p>If you have two or more pets, feeding is a twice-daily logistics operation that can involve territorial behavior, dietary conflicts, a 15-pound tabby who has decided that whatever is in the other cat's bowl is definitely better, and a dog who has learned that the cat's elevated feeding station is actually reachable if she jumps just right.</p>

<p>Multi-pet feeding is one of the most common questions in pet owner communities, and the answers that get repeated most often are either oversimplified or require equipment most households don't want to buy. Here's what actually works, in order of effort.</p>

<h2>Why Multi-Pet Feeding Goes Wrong</h2>

<p>Before the solutions, it's worth naming the actual problems, because they're not all the same:</p>

<p><strong>Food theft.</strong> One pet eats fast and then moves to the next bowl. Or one animal is simply more food-motivated and will always push the other aside.</p>

<p><strong>Dietary conflicts.</strong> Dogs need dog food. Cats need cat food. These are not interchangeable — cat food is significantly higher in protein and fat, and dogs who eat it regularly can develop pancreatitis and other issues. Cat food is also typically higher in calories, which can accelerate weight gain in dogs who sneak it regularly.</p>

<p><strong>Medical dietary requirements.</strong> One pet is on prescription food. Another needs a low-phosphorus diet. A third is on a weight management formula. Mixing these up isn't just a waste of money — it can actively undermine a pet's health management.</p>

<p><strong>Pace mismatches.</strong> One pet grazes slowly. Another inhales their bowl in ninety seconds and then immediately investigates the slower eater's food. Free-feeding works for the grazer but creates chaos the moment a second animal is involved.</p>

<p><strong>Tracking confusion.</strong> With multiple pets, it's genuinely hard to know which animal has been fed and which hasn't — especially in a multi-person household where different people feed on different shifts.</p>

<h2>Method 1: Separate Rooms</h2>

<p>The simplest and most reliable solution for most households. Feed each pet in a separate room with the door closed until they finish. When everyone is done, bowls come up and doors open.</p>

<p><strong>Why it works:</strong> There's literally no way to steal food from behind a closed door. It also works for dietary separation regardless of species or food type.</p>

<p><strong>Downsides:</strong> Requires you to be present and supervising. Takes a few extra minutes at each meal. Some pets don't like being isolated and will scratch at the door rather than eat.</p>

<p><strong>Best for:</strong> Households with 2–3 pets who have clear individual dietary needs, or one pet who guards their food. This is the method most veterinarians recommend as a starting point.</p>

<h2>Method 2: Elevated Feeding for Cats</h2>

<p>If your problem is specifically a dog raiding the cat's bowl (extremely common), a cat feeding station on a counter, shelf, or elevated surface the dog can't access solves it without separating rooms. Cats prefer elevated positions anyway — many cats will actually eat more reliably from a height.</p>

<p><strong>Why it works:</strong> Cats are climbers. Most medium and large dogs can't follow them up. This also allows cats to eat at their own pace without feeling rushed.</p>

<p><strong>Downsides:</strong> Doesn't work if your dog is athletic or if your cat is elderly or arthritic and can't comfortably jump. Doesn't address cat-to-cat food stealing.</p>

<p><strong>Best for:</strong> Dog-and-cat households where the dog is the food thief.</p>

<h2>Method 3: Microchip-Activated or Collar-Activated Feeders</h2>

<p>These feeders contain a lid that opens only when the assigned pet's microchip (or an RFID collar tag) is detected. Approach with the wrong pet, and the lid stays closed. Only the assigned animal can access their food.</p>

<p><strong>Why it works:</strong> It's the most technically complete solution to the food-stealing problem. Each pet can eat on their own timeline without you needing to supervise or separate them physically.</p>

<p><strong>Downsides:</strong> Cost — quality microchip feeders run $50–$150 per unit. You need one per pet. Some pets take time to learn how to use them. Doesn't work well for wet food (lids can seal in smell, some models aren't designed for wet food). Requires your pet to be microchipped, or adding RFID collar tags.</p>

<p><strong>Best for:</strong> Cat-only households with free-feeders who steal each other's food, especially where one cat is on prescription or weight-management food. Less practical for large dogs or mixed-species homes.</p>

<h2>Method 4: Timed Sequential Feeding (Supervised)</h2>

<p>Put all bowls down at the same time. Stay present and supervise. The moment any pet finishes their bowl, pick it up — don't let them move to another bowl. Slow eaters get protected time. When the slowest eater finishes, meal time is over and all remaining food comes up.</p>

<p><strong>Why it works:</strong> Doesn't require equipment or room separation. Works well when the issue is one fast eater poaching from one slow eater.</p>

<p><strong>Downsides:</strong> Requires you to be present for every meal. Not practical if you're not home during midday feedings. Stressful if you have a pet who guards their bowl aggressively.</p>

<p><strong>Best for:</strong> Households where the problem is pace mismatch rather than dietary restriction, and where at least one person is home for all meals.</p>

<h2>Method 5: Scheduled Meal Feeding (Not Free Feeding)</h2>

<p>This one sounds obvious but it's worth saying explicitly: if you're free-feeding (leaving food out all day), multi-pet feeding is much harder. Switching to scheduled meals — twice daily, food down for 15–20 minutes and then up — dramatically simplifies management for all other methods.</p>

<p>Scheduled feeding also tells you which pet isn't eating, which is valuable health information. A cat who skips two meals is a cat worth monitoring. You'd never know that on free-feeding.</p>

<p><strong>The tradeoff:</strong> Some pets genuinely do better grazing, particularly cats, and some cats will not eat reliably under meal pressure. Know your animals.</p>

<h2>The Multi-Person Household Layer</h2>

<p>All of the above gets more complicated when multiple people are responsible for feeding. The food-stealing problem is hard enough — add a partner or roommate who doesn't know which cat was already fed, and you've added another failure mode on top.</p>

<p>In a multi-person household with multiple pets, you need a system for tracking not just when each meal happened but which pet was fed. "I fed them" doesn't tell you whether both cats got their correct food.</p>

<p><strong>Pawlo</strong> handles this by letting you create individual feeding tasks per pet. "Luna — Morning Feed" and "Mochi — Morning Feed" are separate tasks. When one person marks Luna's meal done, it stays visible to the other household member — so they know not to feed Luna again, but can see that Mochi's bowl still needs to go down. For households with special dietary needs, the task can include a note with the specific food and portion.</p>

<p>This becomes especially important with medical diets. If one cat is on kidney-support food at $90 a bag, knowing exactly who fed what prevents expensive mistakes — and your vet will thank you for having a complete feeding history.</p>

<h2>Common Scenarios and What Works</h2>

<h3>"My cat keeps eating my other cat's food"</h3>
<p>Start with separate rooms. If that's not practical, microchip feeders are the cleanest solution. If one cat has a medical diet, separate rooms are non-negotiable — the stakes are too high for equipment to be optional.</p>

<h3>"My dog eats the cat food"</h3>
<p>Elevated feeding station for the cat. This is usually the fastest fix with the least friction for anyone involved.</p>

<h3>"I have a cat who grazes and a dog who inhales everything"</h3>
<p>Separate rooms every meal, or a microchip feeder for the cat so they can graze safely. Free-feeding a cat while also having a dog means your dog will eventually find that bowl.</p>

<h3>"One of my pets has a prescription diet and I'm worried about mix-ups"</h3>
<p>Separate rooms, every meal, no exceptions. Use color-coded bowls to reduce confusion. Track each meal individually in Pawlo or a similar shared tracker so both household members have a record of what was served when.</p>

<h3>"My pets eat fine but I can never remember who I fed"</h3>
<p>Pure coordination problem. A shared tracker solves this immediately. No behavioral modification needed — just visibility.</p>

<h2>Building a Feeding Routine That Actually Holds</h2>

<p>Whatever method you choose, the routine holds because everyone in the household knows what it is and does it the same way. That means:</p>

<ul>
  <li>Written-down rules for which food goes where and in what amount.</li>
  <li>A shared system for logging completions so neither person doubles up.</li>
  <li>A clear plan for who handles which meal on which day.</li>
</ul>

<p>Multi-pet feeding isn't glamorous. But a consistent system that runs smoothly twice a day is genuinely one of the better investments you can make in your pets' health — and in the daily peace of your household.</p>
    `.trim(),
  },
  {
    slug: "how-often-walk-your-dog",
    title: "How Often Should You Walk Your Dog? A Realistic Guide for Busy Owners",
    seoTitle: "How Often Should You Walk Your Dog? A Realistic Guide for Busy Households",
    description:
      "The answer depends on your dog's age, breed, and health — but also on your actual schedule. Here's an honest guide to dog walking frequency, with solutions for households that share the responsibility.",
    date: "2026-05-20",
    modifiedDate: "2026-05-20",
    readTime: "9 min read",
    category: "Dog Care",
    keywords: [
      "how often walk dog",
      "dog walking schedule",
      "dog walking routine",
      "who walked the dog",
      "how many walks does a dog need",
      "dog walk frequency",
      "shared dog walking app",
    ],
    searchIntent: "Find out how often to walk a dog and build a household walking schedule",
    image: "/blog/how-often-walk-your-dog.webp",
    imageAlt: "Joyful dog on a leash enjoying a walk with its owner on a wooden boardwalk",
    faqs: [
      {
        question: "How often should you walk your dog?",
        answer:
          "Most adult dogs need at least 2–3 walks per day. High-energy breeds or younger dogs may need 4 or more. A good rule of thumb: two daily walks of 20–30 minutes, plus one shorter relief trip.",
      },
      {
        question: "Is one walk a day enough for a dog?",
        answer:
          "One walk a day is generally not enough for most dogs. Dogs need both physical exercise and the mental stimulation of outside smells and environments. Most dogs benefit from at least 2–3 outings per day.",
      },
      {
        question: "How do couples or roommates track who walked the dog?",
        answer:
          "A shared pet care app like Pawlo lets anyone in the household mark a walk complete, with a timestamp visible to everyone. This eliminates the daily guessing about whether the dog has been out.",
      },
      {
        question: "What happens if a dog doesn't get walked enough?",
        answer:
          "Under-exercised dogs often show behavioral problems: destructive behavior, excessive barking, anxiety, and restlessness. Regular walks also support physical health, joint function, and weight management.",
      },
    ],
    relatedSlugs: [
      "who-walked-the-dog-app",
      "coordinate-pet-care-with-roommate",
      "dog-feeding-schedule-whole-household",
    ],
    content: `
<p>The most common answer you'll find online is "at least twice a day." The most honest answer is: it depends, and the gap between what your dog needs and what you're actually doing is worth understanding.</p>

<p>Dog walking frequency is one of those topics that generates strong opinions, genuine guilt, and a lot of Reddit threads from dog owners asking if they're ruining their dog. Most of them aren't. But most dogs would benefit from more than they're getting — and most households struggle less with the frequency itself than with the coordination of actually making it happen consistently.</p>

<h2>The Baseline: What Dogs Actually Need</h2>

<p>Before the household logistics, let's start with the animal's actual requirements.</p>

<h3>By Life Stage</h3>

<p><strong>Puppies (8 weeks – 6 months):</strong> Frequent but short. Puppies can't sustain long walks on developing joints, but they need to go outside constantly — both for housetraining and for exposure to the world. The rule of thumb: five minutes of structured exercise per month of age, up to twice a day. So a four-month-old puppy can handle roughly 20 minutes of walking per session. Potty trips add to this but are shorter and more purpose-driven.</p>

<p><strong>Adolescent dogs (6 months – 2 years):</strong> High energy, high need. This is the stage most owners find most challenging — dogs are physically capable of significant exercise and behaviorally need it to avoid destructive outlets. Three to four walks per day is not unreasonable for many breeds in this stage.</p>

<p><strong>Adult dogs (2–7 years, varies by breed):</strong> Two to three walks per day for most breeds, with at least one longer outing (30 minutes or more) per day. High-energy breeds like border collies, huskies, and vizslas need significantly more. Brachycephalic breeds (bulldogs, pugs) overheat easily and need shorter, more frequent trips.</p>

<p><strong>Senior dogs (7+ years, varies):</strong> Shorter but still regular. Senior dogs need less intense exercise but more frequent short outings for joint health and to accommodate decreased bladder capacity. A dog that could hold it eight hours at age three may need to go out every four hours at age ten.</p>

<h3>By Breed</h3>

<p>Breed is arguably the bigger variable. A greyhound can be perfectly happy with two moderate walks a day and will sleep the rest of the time. A working-breed dog — your Australian shepherds, your Siberian huskies, your Belgian malinois — were bred to work all day and will not be satisfied with a stroll around the block twice a day. They'll redecorate your couch instead.</p>

<p>Know your breed's original purpose. Herding breeds need to move and think. Sporting breeds need to run. Companion breeds are more flexible. If you're getting a dog whose energy level genuinely doesn't match your lifestyle, that's a conversation worth having before adoption, not after.</p>

<h2>The Reality: What Most Owners Are Actually Doing</h2>

<p>Surveys of dog owners consistently show a gap between recommended walk frequency and actual practice. Busy schedules, weather, shared responsibility confusion, and the genuine friction of a twice-daily commitment create a pattern where many dogs get less outdoor time than they need — not because their owners don't care, but because the system breaks down.</p>

<p>The three most common failure patterns:</p>

<p><strong>The morning rush skip.</strong> Work is early. The walk gets cut to a quick potty trip and a promise that the evening walk will be longer. The evening walk also gets shortened because it's been a long day.</p>

<p><strong>The shared household assumption gap.</strong> Two people share walking responsibility. Each assumes the other handled a midday walk. No one actually went. The dog has been inside for ten hours.</p>

<p><strong>The weekday/weekend split.</strong> Dogs get long walks on weekends and inadequate outings during the week. This is better than nothing but creates a pattern of under-exercise followed by over-exercise that can actually cause injury.</p>

<h2>Building a Walking Schedule That Holds</h2>

<p>The best walking schedule is the one that consistently happens, not the aspirational one that relies on everything going perfectly. Start from your actual week, not your ideal week.</p>

<h3>The Two-Person Household Model</h3>

<p>If two people share a dog, the most durable division is by time of day, not by day of the week. Whoever is home in the morning handles morning walks. Whoever is home in the evening handles evening walks. Midday — if needed — is a shared negotiation or a dog walker.</p>

<p>This approach is more resilient than a weekday/person split because it doesn't collapse when one person travels, works late, or has an unusual day.</p>

<h3>Minimum vs. Target</h3>

<p>For planning purposes, define two numbers for your dog: a minimum acceptable walk day, and a target day. On a minimum day, your dog gets two 15-minute outings — enough for elimination and basic stimulation, not enough for real exercise. On a target day, they get a 30-minute morning walk, a midday relief trip, and a 30-minute evening walk.</p>

<p>Tracking this over a week gives you an honest picture. If you're hitting minimums consistently, that's a livable baseline. If you're consistently below minimums, that's a behavioral and health problem in the making.</p>

<h2>Solutions for Busy Households</h2>

<h3>Dog Walkers and Daycare</h3>

<p>If your work schedule genuinely prevents adequate midday walks, a professional walker or a few days per week of doggy daycare is worth the expense. Treat it as a cost of responsible dog ownership for your specific lifestyle, not a luxury. Many dogs with adequate weekday exercise are dramatically calmer and better-behaved than dogs who are under-stimulated five days a week.</p>

<h3>Mental Exercise as a Supplement</h3>

<p>Physical walks are irreplaceable, but mental exercise — training sessions, puzzle feeders, nose work — can supplement when walks are shorter than usual. A ten-minute training session that makes a dog think is not a substitute for a walk, but it does take the edge off a high-energy dog waiting for their people to get home.</p>

<h3>The Coordination Problem</h3>

<p>In multi-person households, the frequency problem is often secondary to the coordination problem. You're not walking the dog less because you don't have time — you're walking the dog less because neither person is sure whether it happened, so the default is to assume it did.</p>

<p>This is exactly what <strong>Pawlo</strong> solves. When one person completes a walk, they tap it in the app. Everyone in the household sees it immediately: "Evening Walk — completed by Jamie at 6:47 PM." The "did someone walk him?" question stops being asked because the answer is always visible. That visibility alone closes most of the gap between what households intend to do and what actually happens.</p>

<p>Pawlo's leaderboard also surfaces something useful: who's actually doing most of the walking over time. It tends to be less surprising than you'd hope, but it gives both people the same data — which makes it a conversation about logistics rather than a fight about effort.</p>

<h2>Signs Your Dog Isn't Getting Enough Walking</h2>

<p>Your dog will usually tell you before the vet does:</p>

<ul>
  <li><strong>Destructive behavior.</strong> Chewing things they've ignored for years, digging, rearranging the furniture with their nose. Pent-up energy goes somewhere.</li>
  <li><strong>Restlessness and pacing.</strong> A dog who can't settle, paces the house, or follows you from room to room is often an under-exercised dog.</li>
  <li><strong>Excessive attention-seeking.</strong> Nudging, whining, bringing you toys constantly — a dog's way of initiating interaction when what they really want is out.</li>
  <li><strong>Weight gain.</strong> Less obvious as a short-term signal, but chronic under-exercise combined with normal feeding amounts is a reliable path to an overweight dog.</li>
  <li><strong>Reactivity.</strong> Dogs who are under-exercised often become more reactive on leash — more barking, more pulling, more difficulty focusing. Exercise doesn't fix reactivity, but inadequate exercise reliably makes it worse.</li>
</ul>

<h2>The Honest Answer</h2>

<p>How often should you walk your dog? More than you probably are, for most dogs. The target for most adult dogs is at least two solid walks per day, with a short midday trip making three — but the number matters less than the consistency and the actual time outside.</p>

<p>A dog who gets two reliable 25-minute walks every single day will be healthier and better-behaved than a dog who gets an ambitious 90-minute trail hike on weekends and sporadic rushed outings on weekdays. Routine beats occasional intensity every time.</p>

<p>Set a realistic schedule. Split the responsibility clearly if you share a dog. Track completions so the coordination gap closes. And when the answer to "did someone walk the dog?" is always one tap away, you'll find it gets asked a lot less often.</p>
    `.trim(),
  },
  {
    slug: "dog-cat-feeding-schedule-shared-home",
    title: "Dog and Cat Feeding Schedules: What Actually Works in a Shared Home",
    seoTitle: "Dog and Cat Feeding Schedules: What Actually Works in a Shared Home",
    description:
      "Feeding a dog and a cat in the same household involves different nutritional needs, different rhythms, and a dog who definitely knows the cat food is up there. Here's what actually works.",
    date: "2026-05-20",
    modifiedDate: "2026-05-20",
    readTime: "9 min read",
    category: "Pet Care Tips",
    keywords: [
      "puppy feeding schedule",
      "cat feeding schedules",
      "dog and cat feeding schedule",
      "feeding dog and cat same household",
      "cat and dog food schedule",
      "multi pet feeding routine",
      "pet feeding schedule shared home",
    ],
    searchIntent: "Build a reliable feeding schedule for dogs and cats living in the same household",
    image: "/blog/dog-cat-feeding-schedule-shared-home.webp",
    imageAlt: "A cat and dog posing together on a blanket indoors",
    faqs: [
      {
        question: "Can dogs and cats eat at the same time?",
        answer:
          "They can, but rarely should. Dogs will typically eat their food and then investigate the cat's bowl. Feeding them simultaneously but in separate spaces, or using an elevated feeding station for the cat, prevents cross-eating.",
      },
      {
        question: "Why can't dogs eat cat food?",
        answer:
          "Cat food is formulated for cats' higher protein and taurine requirements. Dogs who eat cat food regularly can develop digestive upset, weight gain, and pancreatitis over time.",
      },
      {
        question: "How many times a day should you feed a cat?",
        answer:
          "Most adult cats do well with two meals per day, roughly 12 hours apart. Kittens need 3–4 smaller meals. Unlike dogs, some cats tolerate free-feeding, but this becomes problematic in multi-pet households.",
      },
      {
        question: "How do you track feedings for multiple pets with different schedules?",
        answer:
          "A shared app like Pawlo lets you set up separate feeding tasks per pet. Each task is logged individually with a timestamp, so everyone in the household can see which animal has been fed.",
      },
    ],
    relatedSlugs: [
      "feed-multiple-pets-without-chaos",
      "dog-feeding-schedule-whole-household",
      "did-someone-feed-the-dog-app",
    ],
    content: `
<p>Dogs and cats have entirely different nutritional needs, different eating styles, and entirely different opinions about whether the rules apply to them. Getting their feeding schedules to coexist in the same household — without one animal raiding the other's bowl, without anyone accidentally swapping foods, and without the people involved losing track of who has been fed — is a practical problem that doesn't get discussed enough.</p>

<p>Here's how to build a feeding schedule that works for both species, and a household where more than one person shares the responsibility.</p>

<h2>Why Dogs and Cats Can't Just Share a Feeding Routine</h2>

<p>It's tempting to simplify: put both bowls down at the same time twice a day and call it done. This works only if your dog has no interest in the cat's food and your cat eats quickly. In most households, neither of those things is true.</p>

<p><strong>The nutritional problem.</strong> Cat food is significantly higher in protein and fat than dog food. It's formulated for cats' unique metabolic requirements, including taurine — an amino acid cats can't synthesize themselves. Dogs who eat cat food regularly can develop pancreatitis, weight gain, and digestive problems. It's not an immediate emergency if your dog steals a bite, but it's not a habit you want to let develop.</p>

<p>The reverse is equally problematic. Dog food lacks the taurine and arachidonic acid cats need. A cat who is regularly eating dog food instead of cat food will develop nutritional deficiencies over time — particularly taurine deficiency, which causes serious cardiac and vision problems in cats.</p>

<p><strong>The behavior problem.</strong> Dogs are opportunistic. Most dogs, given access to a cat's food, will eat it. Cats are more particular, but a hungry cat will eat dog food when their own isn't available. The behaviors that make both animals interesting companions make them reliably terrible at respecting each other's bowls without physical separation.</p>

<p><strong>The pace mismatch.</strong> Most dogs eat quickly. Many cats graze slowly or eat in multiple sessions. This means a dog can finish their meal and still be in "food mode" when the cat is halfway through theirs.</p>

<h2>The Dog Side: Building a Reliable Schedule</h2>

<p>For most adult dogs, twice-daily feeding works well: morning and evening, roughly 10–12 hours apart. Here's what makes a dog feeding schedule actually hold:</p>

<h3>Specific Times, Not Windows</h3>
<p>"Morning" is a window. "7:00 AM" is a commitment. Dogs have strong internal clocks and will start anticipating meals — their digestive system literally prepares for food at consistent times. That preparation improves digestion and supports stable energy throughout the day. Feeding at inconsistent times within a broad window disrupts this.</p>

<h3>Measured Portions</h3>
<p>In a multi-person household, measured portions do double work: they ensure your dog gets the right amount of food, and they prevent accidental double-feeding. If one person uses a measuring cup and the other eyeballs it, your dog's caloric intake is unpredictable. Agree on a specific measurement before the schedule starts.</p>

<h3>Food Up After Meals</h3>
<p>If you're feeding scheduled meals rather than free-feeding, take the bowl up when the dog is done — or after 15–20 minutes if they're a slow eater. This keeps the dog food out of reach of your cat and builds a cleaner feeding habit overall. It also makes it obvious whether your dog ate that meal or not, which is useful health information.</p>

<h3>Puppy Adjustments</h3>
<p>Puppies under 6 months need 3–4 meals per day. Their stomachs are small and their blood sugar regulation is still developing. If you've brought a puppy into a household that already has a cat, you're now managing three feeding events per day (two cat meals plus a midday puppy meal) rather than two. Make sure both people in the household understand the puppy schedule — the midday meal is the one that most often gets missed.</p>

<h2>The Cat Side: What Cats Actually Need</h2>

<p>Cat feeding is more flexible than dog feeding, but it creates more complicated dynamics in a shared household.</p>

<h3>Scheduled vs. Free Feeding</h3>
<p>Many cats can free-feed — food left out all day — without overeating. But free-feeding in a dog household is almost always a disaster. The dog will find the bowl. If you have a dog and a cat, scheduled meals for the cat are non-negotiable unless the cat's food is physically inaccessible to the dog at all times.</p>

<p>Twice-daily meals work well for most adult cats: once in the morning and once in the evening. Kittens, like puppies, need more frequent meals — 3–4 times per day for cats under 6 months.</p>

<h3>Wet vs. Dry</h3>
<p>Whether you feed wet, dry, or a combination is a conversation to have with your vet, not a scheduling question — but it has schedule implications. Wet food left out too long goes bad and attracts the dog. If you're feeding wet food, put it down, give the cat 20–30 minutes, and take up whatever's left. Dry food is more forgiving for scheduled meals but still needs to be protected from your dog.</p>

<h3>Stress-Free Eating</h3>
<p>Cats are sensitive to stress around mealtimes. A dog hovering nearby, even without stealing food, can cause a cat to eat less or more quickly than is comfortable. Wherever you feed your cat, it should be a place where they feel safe and unrushed. Elevated surfaces work well. A separate room with the door closed is the most reliable option.</p>

<h2>The Separation Question: What Actually Works</h2>

<p>Given the nutritional stakes, the most reliable solution for dog-and-cat households is physical separation at mealtimes. The three common approaches:</p>

<p><strong>Separate rooms with closed doors.</strong> The simplest, most reliable method. Dog eats in one room, cat eats in another. Both doors stay closed until everyone is done. No equipment needed, no behavior modification required. The main cost is a few minutes of attention at each meal.</p>

<p><strong>Elevated feeding for the cat.</strong> A cat feeding station on a counter, shelf, or surface the dog can't access. Works well for households where the dog is the primary threat. Doesn't address cat-to-cat dynamics if you have multiple cats. Doesn't work if your dog is a jumper or your cat is elderly and can't easily climb.</p>

<p><strong>Microchip-activated feeders.</strong> A lid that opens only for the assigned pet's microchip. The cleanest technological solution, but costs $50–$150 per unit. Most useful in cat-only households or when one pet has a special diet that absolutely cannot be shared.</p>

<h2>The Shared Household Coordination Layer</h2>

<p>Separate feeding schedules for a dog and a cat mean more tasks per meal period, not just more animals. In a household where two people share feeding responsibilities, the risk of confusion compounds:</p>

<ul>
  <li>Did someone feed the dog this morning?</li>
  <li>Did someone feed the cat?</li>
  <li>Did the cat get wet food or dry food today?</li>
  <li>Did the dog get the correct portion or did someone use the old bag before we switched foods?</li>
</ul>

<p>Each of these questions is a potential failure point. Without a system, they get answered by memory — which is unreliable at 7 AM on a Tuesday.</p>

<p>The most practical solution is a shared tracker where each animal has their own feeding task. In <strong>Pawlo</strong>, you can set up "Luna — Morning Feed" and "Mochi — Morning Feed" as separate tasks. When one person completes a task, the other household member sees it immediately with a timestamp. If both are still open when the second person comes downstairs, they know both animals need to be fed. If one is marked done, they know which animal still needs attention.</p>

<p>For households with a dog on a three-meal puppy schedule plus a cat on a two-meal adult schedule, that visibility becomes the difference between a system that works and a system that requires constant verbal coordination.</p>

<h2>Building the Full Schedule</h2>

<p>Here's what a functioning dog-and-cat feeding schedule looks like in a typical shared household:</p>

<p><strong>Morning (7:00–7:30 AM)</strong></p>
<ul>
  <li>Cat eats in their room or on their elevated surface (wet or dry food, measured portion).</li>
  <li>Dog eats in kitchen or separate area (measured portion, door closed if needed).</li>
  <li>Both bowls come up after 15–20 minutes.</li>
  <li>Person who fed marks both tasks in Pawlo.</li>
</ul>

<p><strong>Midday (12:00–1:00 PM) — if applicable</strong></p>
<ul>
  <li>Puppies or kittens under 6 months get a midday meal.</li>
  <li>Adult pets generally skip midday feeding unless on a veterinarian-recommended three-meal schedule.</li>
</ul>

<p><strong>Evening (6:00–6:30 PM)</strong></p>
<ul>
  <li>Same as morning routine for both animals.</li>
  <li>Wet food for the cat (if feeding wet evening meals).</li>
  <li>Dog meal at consistent time.</li>
</ul>

<p>The schedule looks obvious written out. The part that breaks it down is the informal, day-to-day execution in a household where two people are both busy and neither always knows what the other person has or hasn't done yet. That's the problem a shared tracker fixes: not the schedule itself, but the visibility into whether the schedule ran today.</p>

<h2>When to Revisit the Schedule</h2>

<p>Feeding schedules aren't permanent. Revisit when:</p>
<ul>
  <li>Your puppy turns 6 months — transition from 3–4 meals to twice daily.</li>
  <li>Your cat transitions from kitten food to adult food (usually around 12 months).</li>
  <li>Either pet starts gaining or losing weight — portion size may need adjustment.</li>
  <li>A vet prescribes a dietary change — new food, new timing, or a prescription formula that must stay separate.</li>
  <li>You add another pet to the household and need to restructure the separation logistics.</li>
</ul>

<p>Get the schedule right once, build the tracking habit, and most households find it becomes automatic within a few weeks. The goal is a system that runs quietly in the background — not one that requires active management every meal.</p>
    `.trim(),
  },
  {
    slug: "missed-pet-medication-dose",
    title: "Missed a Pet Medication Dose? What to Do Next and How to Prevent It",
    seoTitle: "Missed a Pet Medication Dose? What to Do and How to Prevent It",
    description:
      "Realizing you missed a heartworm pill, fluoxetine dose, or monthly flea treatment is stressful. Here's exactly what to do — and the system that makes it stop happening.",
    date: "2026-05-20",
    modifiedDate: "2026-05-20",
    readTime: "9 min read",
    category: "Pet Health",
    keywords: [
      "missed heartworm dose",
      "missed fluoxetine dose dog",
      "dog medication automation",
      "missed pet medication",
      "what to do missed pet dose",
      "pet medication reminder",
      "missed flea treatment dog",
    ],
    searchIntent: "Find out what to do after missing a pet medication dose and how to prevent it",
    image: "/blog/missed-pet-medication-dose.webp",
    imageAlt: "Veterinarian examining a German Shepherd in a clinic",
    faqs: [
      {
        question: "What should I do if I missed my dog's heartworm pill?",
        answer:
          "Give the dose as soon as you remember if you're within a few days of the scheduled date. If you're unsure how much time has passed, call your vet before giving it. Never double up doses of monthly preventatives without veterinary guidance.",
      },
      {
        question: "What happens if I miss a dose of my dog's fluoxetine?",
        answer:
          "Give it as soon as you remember, unless it's almost time for the next dose. Never double up. Fluoxetine takes weeks to build to therapeutic levels, so a single missed dose is unlikely to cause a behavioral crisis, but consistent gaps will reduce its effectiveness.",
      },
      {
        question: "Is it okay to give two doses of flea and tick prevention if one was missed?",
        answer:
          "No. Never double up on topical or oral flea and tick preventatives. The products are dosed for a full month's protection — giving two doses can cause toxicity. Call your vet if the gap concerns you.",
      },
      {
        question: "How do I make sure my pet never misses a medication dose?",
        answer:
          "The most reliable system for multi-person households is a shared tracker where each dose is logged with a timestamp and visible to everyone. Apps like Pawlo let any household member mark a medication task complete so no one accidentally skips or doubles a dose.",
      },
    ],
    relatedSlugs: [
      "pet-medication-tracker-never-miss-dose",
      "pet-sitter-instructions-checklist",
      "dog-feeding-schedule-whole-household",
    ],
    content: `
<p>You remember on a Thursday that the heartworm pill was supposed to happen last Monday. Or you realize at 10 PM that the fluoxetine dose that was supposed to happen at 8 AM never happened. Or you and your partner both thought the other one gave the flea treatment three weeks ago and now neither of you is sure.</p>

<p>The panic that follows is real and proportionate — pet medications are not all the same, and what to do next depends entirely on which medication it is. Here's a guide to the most common scenarios, plus the system that stops missed doses from happening in the first place.</p>

<h2>The Most Important Rule: Never Guess</h2>

<p>Before getting into specific medications: if you are genuinely uncertain whether a dose was given, and the medication is one where doubling a dose carries real risk, call your vet before giving anything. A two-minute phone call is always worth it. Most vets and veterinary practices have after-hours lines for exactly these situations.</p>

<p>What you should not do: give a second dose because you're not sure and decide to "err on the side of caution." For certain medications, a double dose is not cautious — it's dangerous. When in doubt, the safe choice is no dose until you have guidance.</p>

<h2>Missed Heartworm Prevention</h2>

<p>Heartworm prevention (products like Heartgard, Interceptor, or Sentinel) is monthly. The stakes feel high because heartworm disease is serious. Here's the actual guidance:</p>

<p><strong>If you're within a day or two of the scheduled date:</strong> Give the dose as soon as you remember. Continue on the original monthly schedule as if nothing happened.</p>

<p><strong>If you're a week or more late:</strong> Give the dose now and restart the monthly schedule from today's date. You've created a gap in coverage, which means your dog had a window of unprotected time. This matters more if you're in a high-mosquito-activity area during warm months. Mention it to your vet at the next appointment — they may recommend a preventative heartworm test before the next refill, depending on the length of the gap and your geographic risk.</p>

<p><strong>What not to do:</strong> Do not give two doses to "make up for it." Monthly heartworm prevention is dosed for a single month's coverage — doubling it does not extend protection and can cause adverse effects depending on the product.</p>

<p><strong>The uncertainty problem:</strong> If you're in a multi-person household and genuinely can't determine when the last dose was given, call your vet. They'll tell you whether a test is warranted before resuming prevention.</p>

<h2>Missed Flea and Tick Prevention</h2>

<p>Topical treatments (Frontline, K9 Advantix) and oral preventatives (NexGard, Bravecto, Simparica) are typically monthly or quarterly. The guidance is similar to heartworm prevention:</p>

<p><strong>Apply or give the missed dose as soon as you remember.</strong> Your pet has been unprotected since the last dose wore off. Getting coverage back on is the priority.</p>

<p><strong>Restart your schedule from today.</strong> Don't try to catch up to the original date — just treat today as the new Day 1 and mark your calendar 30 days out.</p>

<p><strong>Never double up.</strong> This is especially important for topical treatments. The active ingredients in flea and tick products are pesticides — they're safe at the right dose and potentially toxic at double the dose. If you apply a topical and then find out your partner applied one two days ago, call your vet immediately.</p>

<p><strong>If there was a long gap:</strong> Check your pet for ticks thoroughly, especially if they've been in wooded or grassy areas. A gap in tick prevention during peak season means a real exposure window.</p>

<h2>Missed Behavioral Medication (Fluoxetine, Trazodone, Clomipramine)</h2>

<p>Dogs with anxiety, separation distress, or compulsive behaviors are increasingly managed with daily psychiatric medications. These have different rules than preventatives.</p>

<p><strong>Fluoxetine (Prozac for dogs):</strong> Give the missed dose as soon as you remember. If it's almost time for the next dose, skip the missed one and resume the regular schedule. Never give two doses to compensate. Fluoxetine has a long half-life — a single missed dose won't abruptly destabilize your dog, but it's worth noting that these medications take 4–6 weeks to build to therapeutic levels. Consistent gaps over time erode their effectiveness.</p>

<p><strong>Trazodone:</strong> Often used situationally (before vet visits, thunderstorm season) rather than daily. If you're using it daily and missed a dose, same rule applies — give it if you remember within a reasonable window, skip if you're close to the next dose. If you're using it situationally and forgot before a specific event, that event will just be harder for your dog today.</p>

<p><strong>Clomipramine (Clomicalm):</strong> Similar guidance to fluoxetine — give the missed dose if remembered early, skip if you're near the next scheduled time. Consistent administration matters more than occasional misses.</p>

<p><strong>When to call the vet:</strong> If your dog is on behavioral medication for a serious condition (severe aggression, extreme separation anxiety) and has missed multiple days in a row, contact your vet. Some dogs show rebound symptoms after gaps in behavioral medication — knowing what to watch for is worth a conversation.</p>

<h2>Missed Daily Medication for Chronic Conditions</h2>

<p>Dogs and cats on daily medication for thyroid disease, diabetes, epilepsy, Cushing's disease, kidney disease, or heart conditions are in a different category. These medications are managing an active condition — gaps aren't just a coverage issue, they're a health management issue.</p>

<p><strong>Epilepsy medications (phenobarbital, potassium bromide):</strong> These are the most critical to not miss. Consistent blood levels are essential for seizure control. If you realize you missed a dose, give it as soon as possible. If you've missed more than one dose, or if your dog has had a seizure since the missed dose, contact your vet immediately — do not wait for the next scheduled appointment.</p>

<p><strong>Diabetes (insulin):</strong> This is a call-your-vet situation every time. Insulin dosing is precise, and what to do after a missed injection depends on your pet's current blood glucose and how much time has passed. Your vet should have given you a protocol for this scenario when the diagnosis was made. If they didn't, ask for one at the next visit.</p>

<p><strong>Thyroid medication (methimazole for cats, levothyroxine for dogs):</strong> Give the missed dose if you remember on the same day. If you realize it was missed the day before, give the next scheduled dose on time and don't double up. Long-term gaps cause symptom return, but a single missed day is rarely an emergency.</p>

<p><strong>Heart medications:</strong> Call your vet. The answer depends heavily on which medication and what stage of disease your pet is in.</p>

<p><strong>The consistent theme:</strong> For chronic condition medications, always have a "what if we miss a dose" protocol in writing from your vet, ideally established at the time of diagnosis. This is information most practices will happily provide and most owners never think to ask for until they're in a panic at 11 PM.</p>

<h2>Why Missed Doses Keep Happening in Multi-Person Households</h2>

<p>Missed pet medication in a shared household is almost never caused by negligence. It's caused by a coordination failure — the same failure pattern that causes double-feeding and missed walks. Two people, each reasonably assuming the other handled something that left no visible trace.</p>

<p>The three specific failure modes for medication:</p>

<p><strong>"I thought you did it."</strong> Both people believe the other person gave the medication. Neither did. This is most common with daily medications given at a time when both household members are present but distracted.</p>

<p><strong>"I'll give it when I get home" + the same thought in two heads.</strong> Both people intended to give the medication on their way home. One of them did. The other also did. Now you have a double dose problem instead of a missed dose problem.</p>

<p><strong>The monthly blind spot.</strong> Monthly medications require someone to remember a specific day 30 days out, which means the task depends entirely on whoever set the calendar reminder — and that person's phone being on, and them being the one home on that day.</p>

<h2>The System That Actually Prevents It</h2>

<p>A calendar reminder on one person's phone is a single point of failure in a multi-person household. A shared medication tracker that logs each dose with a timestamp and makes that completion visible to everyone eliminates all three failure modes above.</p>

<p><strong>Pawlo</strong> handles this through its shared task system. Set up each medication as a recurring task — daily, weekly, or monthly. When any household member gives the medication, they tap the task in the app. The dose is logged with their name and a timestamp, immediately visible to every other member of the household. Double-dosing becomes impossible because the completion is always visible. Missed doses get caught because an incomplete task at the end of the day is visible to both people, not just the one who forgot.</p>

<p>For monthly medications specifically, Pawlo's smart reminders (Premium) send a push notification to everyone in the household if a task hasn't been completed by a specified time. That covers the scenario where the person who usually handles it is traveling and their partner doesn't realize the monthly dose is due.</p>

<p>The longer you have a pet on medication, the more important the tracking system becomes. A once-a-year flea treatment is easy to remember. A daily fluoxetine dose, a monthly heartworm pill, and a twice-weekly ear medication for a pet with chronic ear disease — that's a medication schedule that genuinely requires a system.</p>

<h2>The Timestamped Record Your Vet Will Love</h2>

<p>There's a secondary benefit to logging every dose: you always have a complete medication history to share with your vet. When your vet asks "when was the last heartworm prevention?" you can tell them exactly — not "I think last month?" When they ask whether the fluoxetine was given consistently before the behavioral consultation, you have data. When a new vet needs to know what medications your pet has been on, you have a timestamped record.</p>

<p>This sounds like a small thing until the moment you need it.</p>
    `.trim(),
  },
  {
    slug: "split-pet-care-fairly-partner-roommate",
    title: "How to Split Pet Care Fairly With a Partner or Roommate",
    seoTitle: "How to Split Pet Care Fairly With a Partner or Roommate",
    description:
      "In most shared households, one person ends up doing more pet care than they signed up for. Here's why it happens and what actually fixes it — without the passive-aggressive scorekeeping.",
    date: "2026-05-20",
    modifiedDate: "2026-05-20",
    readTime: "9 min read",
    category: "Household Tips",
    keywords: [
      "roommate not feeding dog",
      "roommate dog walking conflict",
      "split pet care fairly",
      "partner not doing pet care",
      "how to divide pet care",
      "pet care responsibilities couple",
      "shared pet care agreement",
    ],
    searchIntent: "Divide pet care responsibilities fairly in a shared household",
    image: "/blog/split-pet-care-fairly-partner-roommate.webp",
    imageAlt: "Happy couple on the floor with their dog",
    faqs: [
      {
        question: "How do couples split pet care fairly?",
        answer:
          "The most durable split is by time of day rather than by individual task — one person owns morning responsibilities, the other owns evenings. This is fewer decisions and more resilient to disruption.",
      },
      {
        question: "What should I do if my roommate isn't doing their share of pet care?",
        answer:
          "Start with a direct, non-accusatory conversation using shared data rather than feelings. A tracking app like Pawlo creates a task history both people can see, which makes the conversation about logistics rather than blame.",
      },
      {
        question: "What is the best app for splitting pet care between two people?",
        answer:
          "Pawlo is built specifically for multi-person pet care — it tracks who completed each task, when, and shows both people the same real-time status. The contribution history makes workload distribution visible.",
      },
      {
        question: "How do you handle pet care when one person travels?",
        answer:
          "Establish a default rule in advance: when one person is away, the other person owns all care, or you arrange outside help. Don't negotiate this when someone is about to leave — agree on the protocol when you're both present.",
      },
    ],
    relatedSlugs: [
      "coordinate-pet-care-with-roommate",
      "pet-care-invisible-labor-households",
      "who-walked-the-dog-app",
    ],
    content: `
<p>Scroll through any relationship advice subreddit for ten minutes and you'll find them: the threads about pet care. The partner who never walks the dog. The roommate who feeds the cat sporadically or not at all. The person who "helps" but only when reminded, every single time, which means the other person is carrying both the task and the cognitive load of managing the reminder.</p>

<p>These threads are not really about pets. They're about fairness, visibility, and the low-grade resentment that builds when one person's effort is invisible and unacknowledged. Pets make it worse because their needs are daily, non-negotiable, and leave no evidence when completed.</p>

<p>Here's how to actually fix it — without the scorekeeping turning into its own problem.</p>

<h2>Why It Almost Always Gets Uneven</h2>

<p>The imbalance isn't usually malicious. It's structural. When two people take on shared responsibility for something without a clear system, a few predictable things happen:</p>

<p><strong>Default behavior emerges.</strong> One person starts handling a task consistently — not because they agreed to own it, but because they were the first one to do it and it just kept falling to them. The other person, not realizing a pattern has formed, stops thinking of it as their task at all. This happens gradually and invisibly.</p>

<p><strong>Initiation energy is unequal.</strong> Doing a task and noticing that a task needs doing are different cognitive loads. One person might be doing 50% of the actual feeding but 100% of the "realizing it's feeding time" thinking. The noticer carries more weight than the task split suggests.</p>

<p><strong>Pet care is invisible.</strong> A fed dog looks exactly like an unfed dog for several hours. A completed walk is invisible thirty minutes later. A cat who got her medication looks no different from a cat who didn't. There's no artifact. No evidence. The work disappears the moment it's done, which means the person doing more has no way to show it and the person doing less has no way to see it.</p>

<p><strong>Mismatched urgency perception.</strong> If one person is more anxious about the pet's wellbeing, they'll default to handling things rather than waiting to see if the other person does it. Over time this person builds resentment. The other person, who would have "gotten to it eventually," doesn't understand why there's tension.</p>

<h2>The Conversation You Need to Have</h2>

<p>Before any system, there needs to be an honest conversation about what both people expect and what they've actually been experiencing. A few principles for making this conversation productive rather than defensive:</p>

<p><strong>Make it about logistics, not character.</strong> "I've been handling most of the morning care" lands differently than "you never feed the dog." The first is a logistics observation. The second is an accusation. You want a problem-solving conversation, not a defensive one.</p>

<p><strong>Come with data if possible.</strong> "I feel like I'm doing more" is easy to dispute. "I've walked the dog 18 times in the last three weeks and you've walked him 4 times" is harder to argue with. This is one reason a tracking app is valuable even before any conflict emerges — it makes the conversation start from shared facts.</p>

<p><strong>Focus on the future structure, not the past accounting.</strong> Even if the historical imbalance is real and clearly documented, relitigating every incident accomplishes nothing. What you want out of the conversation is an agreement about going forward. Get there quickly.</p>

<p><strong>Name the invisible labor specifically.</strong> Remind your partner or roommate that "caring for the pet" includes noticing what needs to be done, tracking whether medications are due, scheduling vet appointments, and managing supplies. If one person is doing more of this mental work, that's real labor even if they're not the one physically filling the bowl.</p>

<h2>The Division of Labor That Actually Holds</h2>

<p>The most durable split isn't by task — it's by time of day.</p>

<p>Assigning "morning care" to one person and "evening care" to the other is more resilient than negotiating individual tasks because:</p>

<ul>
  <li>It's fewer decisions. The morning person doesn't ask "whose job is feeding today?" They just own mornings.</li>
  <li>It handles disruptions naturally. If the morning person is sick, the evening person can cover without a negotiation. There's a clear default to deviate from.</li>
  <li>It distributes both effort and noticing. Each person is responsible for everything in their window — they can't not-notice that the walk needs to happen because it's their window.</li>
</ul>

<p>A typical morning/evening split for a dog-owning household:</p>

<p><strong>Morning person:</strong> Feeding, morning walk, fresh water, any daily morning medication.</p>
<p><strong>Evening person:</strong> Feeding, evening walk, any evening medication, checking on supplies (food, treats, medications running low).</p>

<p>Both people share responsibility for: vet appointments, monthly medications (tracked explicitly), weekend variations, and covering when the other person is unavailable.</p>

<h2>For Roommate Situations Specifically</h2>

<p>Roommate pet care dynamics have some additional complications. Unlike partners, roommates may have less emotional investment in the pet's wellbeing and fewer social consequences for dropping the ball. They may also have genuinely different schedules that make a 50/50 split unrealistic.</p>

<p>A few things that help in roommate setups specifically:</p>

<p><strong>Write down the agreement.</strong> "We discussed it" is much weaker than "we have it in writing." It doesn't need to be a legal document — a shared note that both people have read and acknowledged is enough. Include specific tasks, frequency, and who handles what. Reference it if the conversation comes up again.</p>

<p><strong>Tie pet care to financial contribution where appropriate.</strong> If one person is doing significantly more care than the other, consider whether that should be reflected in how costs are split — vet bills, food, supplies. This isn't punitive; it's a recognition that care and money are both contributions to the pet's wellbeing.</p>

<p><strong>Establish an escalation path.</strong> What happens if a roommate consistently misses their tasks? At what point does that become a roommate problem rather than a pet care problem? Knowing this in advance — ideally before moving in together — makes the situation less fraught when it comes up.</p>

<p><strong>Consider whether the pet can rely on this living situation.</strong> Harsh but important: if your roommate has demonstrated that they won't reliably handle pet care even with a clear agreement and a tracking system, that's information about whether this is a sustainable arrangement for an animal who needs consistent care.</p>

<h2>Making the Invisible Visible</h2>

<p>The single most effective thing a shared household can do is make pet care tasks visible to both people in real time. Not in retrospect, not in a weekly review — in the moment, as tasks are completed or left undone.</p>

<p><strong>Pawlo</strong> was built for exactly this. Set up a shared household, add your pet and their tasks, and both people see the same live task list with completion history. When the morning person feeds the dog, the evening person sees it before they even get out of bed — time-stamped, attributed, done. The evening walk shows up as done or not done when the morning person gets home. There's no guessing. The data is just there.</p>

<p>The contribution tracker shows each person's task completion over time. Most households who start using this find one of two things: either the workload is more balanced than they thought (and one person's perception of imbalance was partly anxiety, not reality), or the data confirms the gap and gives both people a non-emotional starting point for addressing it.</p>

<p>The goal is not to create a leaderboard that causes resentment. The goal is to replace vague feelings of unfairness — which are hard to act on — with concrete information that both people can work from. "You've walked him 4 times this month and I've walked him 19 times" is a different kind of conversation than "I feel like I do everything."</p>

<h2>When One Person Cares More Than the Other</h2>

<p>This one is worth naming directly, because it comes up constantly in the Reddit threads and doesn't get said plainly enough: sometimes the imbalance is real, persistent, and not fixable with a better system.</p>

<p>If one person wanted this pet and the other agreed reluctantly, the person who wanted it will probably always care more. If one person's schedule is genuinely more demanding, they may simply have less capacity for pet care. If one person's emotional connection to the pet is stronger, their follow-through will be more reliable.</p>

<p>None of these things are automatically a problem. They become a problem when the higher-caring person expected an equal partnership and isn't getting one, or when the lower-caring person agreed to a responsibility level they're not actually meeting.</p>

<p>The solution in these cases isn't a better app. It's an honest conversation about whether the arrangement is working — and if it isn't, what adjustments are possible. That might mean one person formally takes on more responsibility with a reduction in other shared costs. It might mean hiring outside help (a dog walker, a pet sitter) to fill the gap. It might mean a harder conversation about the pet's living situation.</p>

<p>A tracking system gives you data. The data can inform the conversation. But the conversation still has to happen.</p>

<h2>The Routine That Makes Fairness Automatic</h2>

<p>Fairness in pet care is easiest when it's structural rather than negotiated day by day. Clear ownership of time windows, a shared tracker so both people work from the same information, and an established protocol for disruptions and travel.</p>

<p>Once that structure exists and both people are actually using it, the question of who's doing their fair share stops being a source of friction. The data is there. The tasks are visible. The pattern either looks fair or it doesn't — and if it doesn't, you have something specific to address instead of something vague to argue about.</p>

<p>Pets are great. Arguing about whether the dog got walked is not. The goal is a household where the pet's needs get met without anyone having to chase, remind, or silently resent. That's achievable — it just requires a few decisions and a shared system to back them up.</p>
    `.trim(),
  },
];

export function getAllPosts(): Post[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
