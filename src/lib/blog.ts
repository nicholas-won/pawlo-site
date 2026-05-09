export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  imageAlt: string;
  content: string;
};

const posts: Post[] = [
  {
    slug: "did-someone-feed-the-dog-app",
    title: "Did Someone Feed the Dog? Here's the App That Finally Solves It",
    description:
      "The most common argument in pet-owning households has a surprisingly simple fix. Here's why a dedicated shared pet care app beats texting, sticky notes, and group chats.",
    date: "2026-05-01",
    readTime: "5 min read",
    category: "Pet Care Tips",
    image: "/screenshots/home.png",
    imageAlt: "Pawlo app home screen showing pet feeding tasks for a household",
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

<h2>Free to Start</h2>

<p>Pawlo is free to download with support for one pet and unlimited household members. Premium ($3.99/month or $24.99/year) unlocks unlimited pets, home screen widgets, full care history, and smart reminders.</p>

<p>If you've ever sent a text that just says "did you feed him?" — Pawlo is the app you've been waiting for.</p>
    `.trim(),
  },
  {
    slug: "best-shared-pet-care-apps-couples-2026",
    title: "The Best Shared Pet Care Apps for Couples in 2026",
    description:
      "If you and your partner share a pet, a generic to-do app isn't going to cut it. Here are the best options in 2026 — and what to actually look for before you commit.",
    date: "2026-05-03",
    readTime: "6 min read",
    category: "App Reviews",
    image: "/screenshots/task-done.png",
    imageAlt: "Pawlo app showing shared pet task list for Max and Luna",
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
<li><strong>Free tier that's actually useful:</strong> You shouldn't have to pay before you know the app fits your routine.</li>
</ul>

<h2>The Options in 2026</h2>

<h3>1. Pawlo — Best Overall for Couples and Households</h3>

<p>Pawlo was designed from the ground up for multi-person pet care. The core mechanic is exactly what couples need: a shared task list where every completion is visible in real time, tagged with the name of whoever did it. No more "I thought you fed her."</p>

<p>Setup is genuinely fast — you can have a household running in under two minutes, invite your partner via a link, and be tracking tasks before your coffee finishes brewing. The free plan covers one pet with unlimited household members, which is perfect for most couples starting out.</p>

<p>What sets Pawlo apart is the <strong>streak system</strong>: your household earns consecutive-day streaks for completing all tasks. It sounds trivial until your partner refuses to let a 21-day streak die over a forgotten evening walk. That's real accountability with zero nagging.</p>

<p>Premium ($3.99/month or $24.99/year) adds unlimited pets, home screen widgets, smart reminders, and full care history. The free trial is seven days — long enough to actually evaluate it.</p>

<p><strong>Best for:</strong> Couples, roommates, and families who want a purpose-built solution with real-time visibility.<br/>
<strong>Free plan:</strong> Yes — 1 pet, unlimited members.<br/>
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

<p>The free plan is genuinely functional, setup takes minutes, and the real-time sync is fast enough to prevent the scenarios that cause 90% of pet-household arguments.</p>
    `.trim(),
  },
  {
    slug: "coordinate-pet-care-with-roommate",
    title: "How to Coordinate Pet Care With Your Roommate (Without the Passive-Aggressive Texts)",
    description:
      "Sharing pet care with a roommate is one of those things that sounds easy and isn't. Here's a practical guide to getting on the same page — and an app that does the heavy lifting.",
    date: "2026-05-06",
    readTime: "5 min read",
    category: "Pet Care Tips",
    image: "/screenshots/home.png",
    imageAlt: "Pawlo showing household member task coordination on the home screen",
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

<h2>The Free Plan Works Well for Roommates</h2>

<p>Pawlo's free plan covers one pet with unlimited household members — which covers the typical roommate scenario completely. If you have more than one pet, Pawlo Premium ($3.99/month or $24.99/year) is what you'd want, and it adds home screen widgets so you can check task status without even opening the app.</p>

<p>Pet care coordination with a roommate doesn't have to be a source of friction. It just needs a system — and two minutes to set one up.</p>
    `.trim(),
  },
  {
    slug: "dog-feeding-schedule-whole-household",
    title: "Dog Feeding Schedule: How to Build One Your Whole Household Actually Follows",
    description:
      "A consistent dog feeding schedule is critical for your dog's health and behavior. Here's how to build one that every member of your household will actually stick to.",
    date: "2026-05-08",
    readTime: "6 min read",
    category: "Dog Care",
    image: "/screenshots/home.png",
    imageAlt: "Pawlo app showing dog feeding tasks and daily progress for a household",
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
    description:
      "Missing a pet medication dose can have real health consequences. Here's how to build a reliable tracking system for households where multiple people share care responsibility.",
    date: "2026-05-09",
    readTime: "5 min read",
    category: "Pet Health",
    image: "/screenshots/task-done.png",
    imageAlt: "Pawlo app showing pet medication task tracking including Heartworm Meds",
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
];

export function getAllPosts(): Post[] {
  return posts.sort(
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
