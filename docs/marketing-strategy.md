# Niagova — go-to-market notes for the launch site

Niagova (from *niaga* + *nova*) is the rebrand of MyBizGate: websites, booking, ordering and business systems for Malaysian SMEs. "You name it, we build it" is the promise; the live demos are the proof.

## Positioning
- **Promise:** every Niagova build answers *how much, got slot, where are you* before the first WhatsApp. This is the story every industry template already tells, so the corporate site tells it once, up front.
- **Proof over claims:** "Try a live demo before you pay a sen" and "demo in 48 hours" are the two offers that turn a browsing owner into a WhatsApp conversation.
- **Ladder:** Starter (RM 299) → Business (RM 599) → Website + System (RM 999) → Custom Build (quoted). The yearly plan (RM 199 / 299 / 399) is the recurring revenue and the retention mechanism.

## What the site does for marketing
1. **Build configurator** (section `#build`): business type × needs × headache → recommended plan, price, closest demo and a pre-written WhatsApp enquiry. It makes "you name it" an action instead of a slogan and qualifies the lead.
2. **Demo gallery** with filters: 12 demos across 9 industries, live links where hosted, "Preview on request" otherwise.
3. **Reply-cost calculator**: the lead magnet. Owners see hours lost per month; the CTA sends that number to sales.
4. **Pricing with the approve-the-demo-first rule**, plus a Custom Build card so nothing feels out of scope.
5. **FAQ** that answers ownership, language, timeline and "were you MyBizGate?" to carry trust across the rebrand.

## Channels (recommended order)
1. **Google Business Profile + local SEO** for "website untuk klinik/spa/bengkel", "sistem booking", "sistem order WhatsApp". Create one landing page per industry later (`/dental`, `/beauty`, `/home-services`), each reusing the demo and configurator.
2. **WhatsApp click-to-chat ads** (Meta) with 15-second screen recordings of a demo booking flow. Target by interest and radius around Klang Valley first.
3. **TikTok / Reels**: "watch the website answer 'berapa?' for you" clips cut from the demo pages.
4. **Referral**: RM 199 credit on the yearly plan for every referred client that goes live (a free Starter renewal, or RM 199 off a higher plan).
5. **Partners**: accountants, company secretaries, POS resellers and franchise operators who meet SMEs at registration time.
6. **Case studies**: one per industry as clients go live, each with the before/after WhatsApp count.

## Rebrand continuity checklist
- Keep `mybizgate.com` live with a 301 to `niagova.com`; keep the "Formerly MyBizGate" line in the footer and FAQ for 12 months.
- Update Google Business Profile name, WhatsApp Business profile, email signatures and social handles together on launch day.
- Move demo subdomains (`petgate.mybizgate.com` etc.) to `demo.niagova.com/<slug>` and update `DEMOS` in `script.js`.
- Trademark: the mark is a proposed design; run MyIPO clearance before using ® anywhere.

## Measurement
Track WhatsApp clicks per section (`data-` attributes can be added for GA4), configurator completions, calculator CTA clicks, and demo link clicks. Target: 30% of visitors reach a WhatsApp CTA, 10% click one.
