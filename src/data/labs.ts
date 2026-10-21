// Content for the CosQ Labs site (Design Lab + Creators Lab).

export type Wing = "design" | "creators";

// ---------- Shared ----------

export const GATE_BEATS = [
    "Every brand starts as an idea.",
    "Ideas get designed.",
    "Designs get made.",
    "Made things find their people.",
];

export const WINGS = {
    design: {
        name: "DESIGN LAB",
        otherName: "Creators Lab",
        tag: "Design Lab by CosQ",
        color: "var(--cosq-pink)",
        home: "/digital-labs",
        heading: "Premier design and marketing. End to end.",
        sub: "We design full campaigns and run them from the first idea to the final post, with one team accountable for every deliverable.",
        cta1: { label: "Start a project", href: "/digital-labs/submit-project" },
        cta2: { label: "See the work", href: "/digital-labs/portfolio" },
        tabs: [
            ["/digital-labs", "Home"],
            ["/digital-labs/portfolio", "Portfolio"],
            ["/digital-labs/careers", "Careers"],
            ["/digital-labs/submit-project", "Start a project"],
        ],
        titles: {
            "/digital-labs/portfolio": ["Proof of innovation.", "Case studies, campaigns, and brand systems across disciplines."],
            "/digital-labs/portfolio/q-chan": ["Q-Chan", "COSQ original character. 2D and 3D mascot design."],
            "/digital-labs/portfolio/oac-cosq": ["OAC x CosQ", "Odisha Anime Club. Full brand and event identity."],
            "/digital-labs/careers": ["Build the future of design.", "We're searching for rebels, visionaries, and meticulous crafters to define the next era of visual identity."],
            "/digital-labs/submit-project": ["Start a project", "Tell us what you're building."],
        },
    },
    creators: {
        name: "CREATORS LAB",
        otherName: "Design Lab",
        tag: "Creators Lab by CosQ",
        color: "var(--cosq-purple)",
        home: "/creators",
        heading: "The best creators for brands. The best brands for creators.",
        sub: "Influencer marketing built on continuous opportunities and the best work, for both sides of the deal.",
        cta1: { label: "Partner with creators", href: "/contact" },
        cta2: { label: "Join as a creator", href: "/contact" },
        tabs: [
            ["/creators", "Home"],
            ["/about", "About"],
            ["/services", "Services"],
            ["/portfolio", "Portfolio"],
            ["/blog", "Blog"],
            ["/team", "Team"],
            ["/contact", "Contact"],
        ],
        titles: {
            "/about": ["About us", "We are the scientists of success."],
            "/services": ["Our services", "Complete solutions for content creators, gamers and everyday creators alike."],
            "/portfolio": ["Our portfolio", "Successful campaigns and happy creators."],
            "/blog": ["Blog", "Notes on streaming, Shorts, growth and creator life."],
            "/team": ["Our team", "Meet the visionaries behind the lab."],
            "/contact": ["Contact", "Brands, creators and esports orgs. Get in touch."],
        },
    },
} as const;

// ---------- Design Lab ----------

export const STEPS = [
    ["01", "Ideation", "Brief, audience and goals turned into campaign concepts and directions."],
    ["02", "Production", "Identity, design, video and content made in-house to one set of guidelines."],
    ["03", "Distribution", "Launch across creators, paid media and on-ground activations, then report."],
];

export const CAPABILITIES = [
    ["Brand identity", "Visual languages that command attention: logo systems, color, typography and voice, built to survive contact with the real world."],
    ["UI/UX", "High-performance interfaces designed with precision and human intuition, from prototype to core architecture."],
    ["Content strategy", "Hyper-relevant narratives and media assets designed for deep conversion and lasting impact."],
    ["Creative direction", "Vision across multiple verticals for cohesive, boundary-pushing results from brief to delivery."],
    ["Stream graphics", "Overlays, alerts and panels for broadcasts."],
    ["Merch design", "Apparel your community will want to wear."],
    ["Motion graphics", "Intros, outros and transitions."],
    ["Campaign marketing", "Social, performance and on-ground, planned together."],
];

export const MARKETING = [
    ["Community", "Pre-booking and pre-order drives", "Fan clubs and communities rally early so launches open to full houses and sold-out drops."],
    ["Campus", "Roadshows and micro-screenings", "Trailers, behind-the-scenes and trivia nights held where students already gather."],
    ["On the ground", "Posters and flyers with tracking", "Placed where fans actually go, each batch with its own QR code so scans trace back to sales."],
    ["Activations", "Cosplayers, photo spots and galleries", "Lobby and venue takeovers that turn a launch into something people post about."],
    ["Online", "Influencers, Meta ads and memes", "Creators, paid campaigns and culture-aware content working to one plan."],
    ["Reporting", "A report at the end", "Reach, conversions and footfall, so the next campaign starts from data."],
];

const QCHAN_COVER = "/design-labs/WhatsApp Unknown 2026-06-07 at 7.03.55 AM/WhatsApp Image 2026-06-07 at 6.59.57 AM (1).jpeg";

export interface DesignProject {
    id: string;
    title: string;
    subtitle: string;
    category: string;
    year: string;
    tags: string[];
    stats: string;
    img?: string;
    href?: string;
}

export const DESIGN_PROJECTS: DesignProject[] = [
    { id: "q-chan", title: "Q-Chan", subtitle: "COSQ Original Character. 2D + VRoid mascot design.", category: "Character Design", year: "2024", tags: ["Character Design", "3D"], img: encodeURI(QCHAN_COVER), stats: "172cm OC · Heterochromia · VRoid rigged", href: "/digital-labs/portfolio/q-chan" },
    { id: "oac", title: "OAC x CosQ", subtitle: "Odisha Anime Club. Full brand and event identity.", category: "Event Design", year: "2024", tags: ["Branding", "Event", "Campaign"], stats: "5,000+ attendees · 34+ events · 4 years", href: "/digital-labs/portfolio/oac-cosq" },
    { id: "lumina", title: "Lumina Tech Rebrand", subtitle: "Silicon valley unicorn identity overhaul.", category: "Branding", year: "2024", tags: ["Brand Identity", "Typography"], stats: "Complete identity system · 3 brand expressions" },
    { id: "verve", title: "Verve Mobile OS", subtitle: "Next-gen OS interface for spatial gestures.", category: "UI/UX", year: "2023", tags: ["UI/UX", "Product"], stats: "48 screens · Full design system" },
    { id: "nebula", title: "Nebula 3D Series", subtitle: "Abstract 3D environments for digital consciousness.", category: "3D", year: "2024", tags: ["3D", "Motion"], stats: "12-piece series · Motion exports" },
    { id: "synth", title: "Synth Audio Campaign", subtitle: "High-impact social campaign for premium audio gear.", category: "Content", year: "2023", tags: ["Content", "Social"], stats: "2.4M reach · 60+ assets" },
    { id: "apex", title: "Apex Gaming Hub", subtitle: "Competitive platform designed for visual dominance.", category: "UI/UX", year: "2024", tags: ["UI/UX", "Gaming"], stats: "Web + mobile · Design system" },
    { id: "origin", title: "Origin Organic", subtitle: "Premium packaging for high-end skincare line.", category: "Branding", year: "2023", tags: ["Packaging", "Brand"], stats: "8 SKUs · Retail + DTC packaging" },
];

export const DESIGN_CATEGORIES = ["All", "Branding", "UI/UX", "Content", "3D", "Event Design", "Character Design"];

// Q-Chan case study

export const QCHAN_SHEET = "/design-labs/IMG_1810.JPG.jpeg";

export const QCHAN_STATS = [["172cm", "Height"], ["2", "Eye colours"], ["3", "Outfit variants"], ["3D", "VRChat ready"]];

export const QCHAN_PROFILE = [
    ["Full name", "Q-Chan"],
    ["Archetype", "Lawless Girl · Chaotic Creative"],
    ["Height", "172 cm"],
    ["Eyes", "Heterochromia: Pink (L) · Green (R)"],
    ["Hair", "Dark purple + rainbow streak (red/yellow/blue/green)"],
    ["Signature item", "Bubble bead braid · spray cans on belt"],
    ["Shoes", "Chunky platform sneakers, star motif"],
    ["Personality", "Kinda clumsy · talks a lot · HA HA HA"],
    ["Illustrator", "Suna Mi"],
    ["3D model", "@ph4forms · VRoid Studio"],
    ["Client", "COSQ / Odisha Anime Club"],
];

export const QCHAN_OUTFITS = [
    ["Main outfit", "Light blue relaxed overalls, white tee, red tie, suspenders with spray can holders. Belt with star buckle."],
    ["Bead braid", "Long braided ponytail woven with multi-colour bubble beads (red, green, yellow, teal) ending in a floral tie."],
    ["Rainbow streak", "Short platinum-white hair with a signature 4-colour rainbow streak (red/yellow/blue/green) at the crown."],
    ["Belt prop", "Custom designed belt buckle with star side badges and an RGB gradient grill at centre. 3D rendered in Blender."],
    ["Heterochromia", "Left eye: hot pink. Right eye: vivid green. Both with a large diamond highlight reflecting her dual energy."],
    ["Alt: qipao", "Red Chinese brocade qipao with black fur cuffs, an alternate outfit variant demonstrating costume versatility."],
];

export const QCHAN_PIPELINE = [
    ["01", "Concept", "Pencil + iPad", "Character brief established. Eye studies, face structure, outfit silhouette, personality traits written into the design."],
    ["02", "Illustration", "Digital, Suna Mi", "Full character sheet: front/back/side views, expression study, hair colour chart, shoe detail, tagline."],
    ["03", "3D modelling", "VRoid Studio", "Character rigged in VRoid Studio from the reference sheet. Heterochromic eyes, platinum-white hair with braid, full t-pose rig."],
    ["04", "Props + polish", "Blender + render", "Belt prop designed and rendered. Alternate qipao outfit modelled. VRChat / MMD export pipeline set up."],
];

export interface GalleryFrame {
    src: string;
    label: string;
    phase: "Concept" | "3D Build" | "Props";
}

const GA = "/design-labs/WhatsApp Unknown 2026-06-07 at 7.00.13 AM/WhatsApp Image 2026-06-07 at ";
const GB = "/design-labs/WhatsApp Unknown 2026-06-07 at 7.03.55 AM/WhatsApp Image 2026-06-07 at ";
const frame = (base: string, t: string, label: string, phase: GalleryFrame["phase"]): GalleryFrame => ({ src: encodeURI(base + t + ".jpeg"), label, phase });

export const QCHAN_GALLERY: GalleryFrame[] = [
    frame(GA, "6.59.46 AM", "Eye study, ink on tablet", "Concept"),
    frame(GA, "6.59.47 AM", "Face + outfit pencil sketch", "Concept"),
    frame(GA, "6.59.48 AM", "Back view, braid + spray cans", "Concept"),
    frame(GB, "6.59.58 AM (2)", "Full figure sketch, suspenders", "Concept"),
    frame(GB, "7.00.06 AM", "Action pose, star motif", "Concept"),
    frame(GA, "6.59.45 AM", "Face rig, heterochromia eyes", "3D Build"),
    frame(GA, "6.59.50 AM", "Body rig, braid v1 (grey)", "3D Build"),
    frame(GA, "6.59.51 AM", "Hair colour test, deep purple", "3D Build"),
    frame(GA, "6.59.52 AM", "Full model, qipao alt outfit", "3D Build"),
    frame(GB, "6.59.57 AM", "Final model, front, white uniform", "3D Build"),
    frame(GB, "6.59.57 AM (1)", "Full body, front with braid", "3D Build"),
    frame(GB, "6.59.58 AM", "Back view, purple braid cascade", "3D Build"),
    frame(GB, "6.59.58 AM (1)", "Close face, final render", "3D Build"),
    frame(GB, "6.59.59 AM", "Side profile, full figure", "3D Build"),
    frame(GB, "7.00.00 AM", "Side view, braid length", "3D Build"),
    frame(GB, "7.00.02 AM", "Back, braided bun variant", "3D Build"),
    frame(GB, "7.00.07 AM", "Belt prop render, RGB grill + star badges", "Props"),
    frame(GB, "7.00.09 AM", "Blender, UV unwrap + body mesh", "Props"),
    frame(GB, "7.00.11 AM", "Body sculpt, side proportions", "Props"),
    frame(GB, "7.00.13 AM", "Blender, full rig with braid mesh", "Props"),
];

// OAC x CosQ case study

export const OAC_META = [["Client", "Odisha Anime Club"], ["Project", "CosQ 2024"], ["Scope", "Full brand + event design"], ["Studio", "Digital Labs by COSQ"]];

export const OAC_STATS = [["5,000+", "CosQ expected attendees"], ["200+", "Halloween party attendees"], ["34+", "Events over 4 years"], ["12+", "Brand collaborators"]];

export const OAC_TAGS = ["Cosplay", "LAN Gaming", "Manga Art", "Live Music", "Beyblade", "VTubing", "AMV Edit", "Battle of Bands"];

export const OAC_HALLOWEEN = [
    ["Venue", "Azzuro Club (Ultra Sky Lounge), Bhubaneswar"],
    ["Date & time", "29 Oct 2024 · 3PM – 9PM"],
    ["Ticketing partner", "@showmates.in"],
    ["Marketing partner", "@madket04"],
    ["Anime partner", "@odisha_anime_club_"],
    ["Cosplay partner", "@odishacosplaycommunity"],
    ["Ticket price", "₹299 · 150 redeemable + 1 shot free (2 for girls)"],
];

export const OAC_TIMELINE = [
    ["2020", "Origins in lockdown", "Odisha Anime Club is founded in February 2020 during COVID-19 to combat isolation and bring together anime fans across Odisha: the state's first and only anime club, born from a Quora post asking if one even existed."],
    ["2021", "Community roots", "Regular Discord events, anime quiz nights, and virtual meetups keep the community alive through the pandemic. The club builds a multi-platform presence across Instagram, Facebook, YouTube, Twitter, Threads, and Telegram."],
    ["2022", "First physical events", "Post-pandemic, OAC steps into the real world with in-person meetups, anime movie screenings, and cosplay participation. Chapter 01–03 format: Anime Events, Meetups & Screenings, Cosplay Events."],
    ["2023", "AniMay: collaboration era", "OAC's flagship AniMay event launches in collaboration with @funhub.odisha: private anime screenings, quiz competitions, games, and cosplay under one roof. The club earns national recognition in Otaku Mantra's coverage of Indian anime clubs."],
    ["Feb '24", "Odisha Cosplay Community begins", "cos.labs unveils the Odisha Cosplay Community (OCC), a joint venture between @odisha_anime_club_ and @odisha_pop_culture, built for cosplayers, by cosplayers. 226 likes. 31 comments. The secret was out."],
    ["Oct '24", "Halloween Party: CosQ launch campaign", "Digital Labs designs the CosQ Halloween Party campaign: event poster, social media kit, ticket graphics. 200+ attendees at Azzuro Club, Bhubaneswar, with @showmates.in ticketing, @odisha_anime_club_ as anime partner, and @odishacosplaycommunity as cosplay partner. The city's first taste of CosQ."],
    ["Nov '24", "CosQ: Odisha's biggest cosplay event", "The culmination of 4 years of community-building. Digital Labs designs the entire visual identity, brochure, brand system, and event collaterals for CosQ: a 5,000+ attendee festival at Dream City Resort, Bhubaneswar, on November 30, 2024."],
    ["2026", "Ichi-Go: Odisha's first anime festival of 2026", "OAC scales to a full public anime festival format. Ichi-Go 2026, held on February 1 in Bhubaneswar, marks the next chapter, ticketed via District.in with its own dedicated Instagram presence @ichi_go_2026."],
];

export const OAC_BRIEF = [
    ["Date", "November 30, 2024"],
    ["Venue", "Dream City Resort, Bhubaneswar"],
    ["Target audience", "18–30 year olds, pop-culture community"],
    ["Expected footfall", "5,000+ attendees"],
    ["Client contact", "Harshit Agarwal, Co-Founder CosQ"],
    ["Media partners", "The AniLyst Podcast, JioCinema"],
    ["Key outreach", "Viz Media, PVR INOX Pictures, Otaku Army"],
];

export const OAC_ACTIVATIONS = [
    ["LAN Gaming Arena", "Lag-free PC & mobile gaming. Valorant, CSGO, Fortnite: competitive and casual zones for all skill levels."],
    ["Cosplay Contest", "Cash prize competitions spanning Anitopia (anime), Mangaverse (manga), and Dramatica (live-action) persona categories."],
    ["Art & Manga Workshops", "Professional-led sessions fusing traditional art with manga culture. Participants create their own multiverse characters."],
    ["Battle of the Bands + DJ", "Live music performances, DJ sets, AMV editing competitions, and talent showcases: dance, mimicry, standup, drama."],
    ["Beyblade & Arcade Zone", "Nostalgia unlocked. Spin, crash and clash with childhood memories in dedicated arcade and Beyblade battle zones."],
    ["VTubing Experiences", "Cutting-edge virtual streamer setups letting attendees experience the VTuber format firsthand."],
];

export const OAC_SPONSORS = [["Golden Gyoza", "Gold", "₹2,50,000"], ["Silver Sushi", "Silver", "₹1,50,000"], ["Bronze Bento", "Bronze", "₹1,00,000"], ["Special Partners", "Special", "₹50,000"]];

export const OAC_BENEFITS = ["Stage Presence (exclusive)", "Cosplayer Sponsorship", "Prominent Logo Placement", "Banner Ad Placement", "Live Stream Branding", "Sponsored Email Blast", "Branded Photo Booth", "VIP Badge Branding", "20×20ft Customised Stall"];

export const OAC_COLLABS = ["Otaku Army", "ComicSense", "Fans Army", "Drip Fuel", "Old Town", "The Merch Shop", "ZorolsHere Lost in Art", "Anime Kulture", "PVR INOX Pictures", "No in May", "Ani"];

export const OAC_DELIVERABLES = ["Brand Identity System", "Sponsorship Brochure (15pp)", "Event Poster Series", "Social Media Kit", "Cosplay Character Mascot", "Merch Design Language", "Halloween Party Campaign", "Showmates Ticket Design", "Instagram Carousel Kit", "Sponsorship Deck (Viz Media)", "Event Map Illustration", "Stage Backdrop Graphics", "Digital Campaign Assets", "Post-Event Archive"];

// Careers

export interface Position {
    id: number;
    title: string;
    type: string;
    location: string;
    experience: string;
    salary: string;
    category: string;
    description: string;
    requirements: string[];
}

export const POSITIONS: Position[] = [
    { id: 1, title: "Senior Brand Designer", type: "Full-time", location: "Mumbai / Remote", experience: "5+ years", salary: "₹18–24 LPA", category: "Design", description: "We're looking for a visionary designer to lead brand creation for global tech and luxury clients. You will be responsible for end-to-end identity systems.", requirements: ["Mastery of Adobe CC & Figma", "Strong portfolio of brand identity work", "Experience leading design teams", "Excellent presentation skills"] },
    { id: 2, title: "UI/UX Design Lead", type: "Full-time", location: "Mumbai, India", experience: "4–6 years", salary: "₹15–20 LPA", category: "Product", description: "Lead the design of intuitive digital products. You'll work closely with product managers and engineers to craft seamless experiences.", requirements: ["Deep understanding of user-centered design", "Proven UI/UX track record", "Experience with design systems", "Prototyping mastery"] },
    { id: 3, title: "Motion Graphics Artist", type: "Contract", location: "Remote", experience: "3+ years", salary: "₹8–12 LPA", category: "Creative", description: "Bring static designs to life with compelling motion graphics. You'll create assets for social media, digital ads, and web experiences.", requirements: ["Advanced After Effects & C4D", "Strong sense of timing and motion", "Storyboarding ability", "Creative problem solving"] },
];

export const PERKS = [["Premium pay", "Top tier industry standards"], ["Remote-first", "Work from anywhere"], ["Creative Cloud+", "All tools provided"]];

export const PROJECT_TYPES = ["Brand Identity & Logo", "UI/UX & Web Design", "3D & Motion Graphics", "Campaign & Marketing", "Full Design Partnership"];

// ---------- Creators Lab ----------

export const FOR_BRANDS = [
    ["01", "Vetted creators", "Anime, cosplay and gaming voices matched to your audience, not just your category."],
    ["02", "One point of contact", "One agency contract, one project lead, regular reports and clear milestones."],
    ["03", "Measured results", "A report after every campaign covering reach, conversions and footfall."],
];

export const FOR_CREATORS = [
    ["01", "Continuous opportunities", "A steady pipeline of brand work instead of one-off deals."],
    ["02", "Brands worth working with", "Partnerships chosen to fit your voice and your community."],
    ["03", "Support on the work", "Editing, thumbnails, branding and growth guidance so your best work ships."],
];

export const GAMES = [["Arc Raiders", "Epic sci-fi extraction shooter campaigns"], ["Marvel Rivals", "Superhero team battle strategies"], ["Arknights", "Tower defense content & guides"], ["Valorant", "Tactical shooter esports coverage"]];

export const PLATFORMS = ["Instagram Reels", "YouTube Shorts", "TikTok"];

export const EVERYDAY = [
    ["Reels & Shorts editing", "Fast-turnaround vertical edits, captions, and hooks built for the first three seconds."],
    ["Personal brand strategy", "Find your niche, your voice, and a content pillar system that doesn't burn you out."],
    ["Growth & brand deals", "Posting cadence, trend tracking, and rate guidance so your next deal pays fairly."],
];

export const CHANNELS = [
    ["Influencer marketing", "Creators and fan voices from anime, cosplay and gaming react, share and send followers to act."],
    ["Performance marketing on Meta", "Paid campaigns on Facebook and Instagram aimed at Gen Z, tracked down to conversions."],
    ["Memes and discourse", "Hype created through memes and by joining the conversations already happening online."],
];

export const CREATOR_STATS = [["2+", "Creators"], ["5k+", "Total reach"], ["1+", "Campaigns"], ["24/7", "Support"]];

export const VALUES = [
    ["Authenticity first", "We believe that numbers follow real connections. We never sacrifice your voice for a quick view."],
    ["Data driven", "We don't guess. We test. Every strategy is backed by analytics and market research."],
    ["Creator centric", "You are the talent. You are the boss. We are just the pit crew keeping the engine running."],
];

export const SERVICES = [
    {
        title: "Social Media Management",
        tagline: "Grow your audience across all platforms",
        body: "Let us handle your social media presence while you focus on creating amazing content. We use data-driven strategies to ensure your brand reaches its maximum potential.",
        audience: "Streamers, esports orgs, and game developers, plus everyday creators posting Reels, Shorts, and TikToks who want to grow on purpose.",
        value: "Increase engagement by 40% on average and free up 15+ hours of your week.",
        scope: [["Strategy", "Content calendar & trend analysis"], ["Execution", "Daily posting & community interaction"], ["Growth", "Viral campaign management"], ["Analytics", "Monthly detailed reports"], ["Platforms", "Twitter/X, Instagram, TikTok, Discord, LinkedIn"]],
    },
    {
        title: "Content Production",
        tagline: "Professional quality, every time",
        body: "Elevate your content with professional editing, eye-catching thumbnails, and cohesive branding that makes you stand out from the crowd.",
        audience: "YouTubers and content creators aiming for premium production value, from long-form videos to vertical Shorts and Reels.",
        value: "Higher CTRs with custom thumbnails and increased retention via professional editing.",
        scope: [["Video", "4K editing, color grading, sound design"], ["Graphics", "Thumbnails, overlays, channel art"], ["Shorts", "Repurposing long-form content for TikTok/Reels"], ["Branding", "Logo design and motion graphics"]],
    },
];

export const PLANS = [
    { tier: "Starter", badge: "", cta: "Get started", items: ["Content calendar & strategy", "8 posts / edits per month", "Monthly analytics report", "Perfect for new creators"] },
    { tier: "Professional", badge: "Most popular", cta: "Get started", items: ["Everything in Starter", "Full content production", "Daily posting & community management", "Brand partnership introductions"] },
    { tier: "Enterprise", badge: "", cta: "Talk to us", items: ["Everything in Professional", "Dedicated account strategist", "Multi-creator / org management", "Priority turnaround"] },
];

export const CREATOR_FILTERS = ["all", "campaigns", "creators", "shorts", "games"];

export const CREATOR_PROJECTS = [
    { title: "Arc Raiders Launch Campaign", cat: ["campaigns", "games"], client: "Embark Studios", workType: "Launch Strategy", tools: "Twitch, YouTube, Discord", meta: "Campaign · Q4 2025", desc: "Coordinated a massive multi-creator launch campaign reaching over 5 million unique gamers. We managed the entire lifecycle from creator selection to analytics reporting.", stats: ["5M+ Reach", "50+ Creators", "2M Views"] },
    { title: "Marvel Rivals Tournament", cat: ["campaigns", "games"], client: "NetEase Games", workType: "Esports Event", tools: "OBS, Twitter, Twitch", meta: "Esports Event · 2025", desc: "Managed end-to-end media coverage for the \"Clash of Rivals\" tournament. Our team handled live social updates, highlight reel production, and creator coordination.", stats: ["100K+ Viewers", "30 Teams", "$50K Prize"] },
    { title: "StreamerX Growth Story", cat: ["creators"], client: "StreamerX", workType: "Channel Growth", tools: "Analytics, Branding, Coaching", meta: "Creator Success · 6 Months", desc: "Partnered with an up-and-coming variety streamer to overhaul their brand identity. Implemented data-driven content strategies that resulted in explosive growth.", stats: ["5000% Growth", "50K Followers", "Partnered"] },
    { title: "From Zero to 400K on Shorts", cat: ["creators", "shorts"], client: "A Lifestyle Creator", workType: "Short-Form Growth", tools: "CapCut, Reels, Shorts", meta: "Creator Success · 4 Months", desc: "Took a faceless lifestyle account from zero to 400K followers with a repeatable hook-and-edit system built specifically for Reels and YouTube Shorts.", stats: ["400K Followers", "4 Months", "3 Brand Deals"] },
    { title: "Arknights Content Series", cat: ["games"], client: "Yostar", workType: "Content Production", tools: "Premiere Pro, After Effects, Photoshop", meta: "Content Strategy · 2025", desc: "Produced a 50-episode deep-dive strategy series. This project established the client as the go-to source for high-quality, educational game content.", stats: ["1M+ Views", "50 Episodes", "Top Guides"] },
    { title: "Valorant VCT Coverage", cat: ["campaigns", "games"], client: "Riot Games", workType: "Live Coverage", tools: "Twitter API, Live Blog, Photography", meta: "Esports Coverage · 2025", desc: "Provided real-time comprehensive tournament coverage. Our live team pushed updates faster than any other outlet, capturing key moments as they happened.", stats: ["3M+ Reach", "Daily Updates", "20+ Analysts"] },
    { title: "Influencer Collective", cat: ["creators"], client: "Internal Project", workType: "Community Building", tools: "Discord, Notion, Zapier", meta: "Community Project · Ongoing", desc: "Built a proprietary network of 100+ vetted gaming influencers. This collective facilitates seamless cross-promotion and collaborative content opportunities.", stats: ["100+ Members", "20M+ Reach", "Active"] },
];

export const TESTIMONIALS = [
    ["They treated my Reels like a real business, not a side hustle. My first brand deal paid for a year of the service.", "@mira.made.it", "Instagram Reels Creator"],
    ["Our tournament coverage has never been this fast or this clean. The team feels like part of our org.", "Dex", "Esports Team Manager"],
    ["I finally have a posting schedule I can actually keep up with. Shorts stopped feeling like a chore.", "Jae", "YouTube Shorts Creator"],
];

export const TEAM = [
    ["Soham Patel", "PR & Marketing", "Co-founder of Creators Lab and the voice behind our brand partnerships and press. Soham keeps the agency's story sharp and our creators' names in the right rooms."],
    ["Harshit Agarwal", "Backend", "Co-founder and the engineer behind the systems that keep Creators Lab running. Harshit builds the infrastructure so the rest of the team can move fast."],
    ["Snehasis Ghosh", "Production Manager", "Founder of Creators Lab. Snehasis keeps every shoot, edit, and campaign on schedule, making sure ambitious ideas actually ship on time."],
    ["Pritam Das", "Production Executive", "On the ground for every production, handling the logistics that make a shoot day run smoothly from call time to wrap."],
    ["Ayush", "Accountant", "Keeps the numbers honest and the budgets realistic, so creators get paid on time and the agency stays healthy."],
    ["Randeep Singh", "Design & In-House Mangaka", "Splits his time between brand design work and illustrating original manga-style characters in-house, including art behind our anime community projects."],
    ["Hargun Singh", "UI/UX Designer", "Designs the interfaces creators actually use, obsessing over the small details that make a product feel effortless."],
    ["Chinmayee Mishra", "Company Secretary", "Keeps Creators Lab compliant and well-governed, handling the legal and regulatory backbone behind the agency's growth."],
];

export const OPEN_ROLES = ["Short-Form Video Editor (Reels / Shorts / TikTok)", "Growth & Analytics Strategist", "Community Manager (Discord-fluent)"];

export const CONTACT_ROLES = ["Brand", "Creator", "Esports org"];
