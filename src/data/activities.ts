import type { LogitActivity } from "@/types";
import { getCollection } from 'astro:content';

// This function will get all the writing entries and format them for ACTIVITIES
async function getWritingActivities() {
  const allWritingEntries = await getCollection('writing');
  return allWritingEntries.map(entry => ({
    title: entry.data.title,
    date: entry.data.date,
    slug: entry.slug,
    type: 'article'
  }));
}

// Export ACTIVITIES as an async function
export async function getACTIVITIES() {
  const writingActivities = await getWritingActivities();
  
  return [
    ...writingActivities,
    // You can add other non-article activities here if needed
    {
      id: "2",
      type: "study",
      icon: "💻",
      title: "Researched StarkWare",
      details: "Read and Summarized the majority of articles.",
      date: new Date(2024, 7, 16),
      tags: ["Website", "development"],
      timeSpent: 90,
    },
    // ... other existing activities
  ];
}

export const LOGIT_ACTIVITIES: LogitActivity[] = [
  {
    id: "2",
    type: "study",
    icon: "💻",
    title: "Researched StarkWare",
    details: "Read and Summarized the majority of articles.",
    date: new Date(2024, 7, 16),
    tags: ["Website", "development"],
    timeSpent: 90, // Estimated time, adjust as needed
  },
  {
    id: "1",
    type: "project",
    icon: "💻",
    title: "Forked Website",
    details: "Moved Logit and Upcoming Projects to the Main Page.",
    date: new Date(2024, 7, 16),
    tags: ["Website", "development"],
    timeSpent: 90, // Estimated time, adjust as needed
  },
];

export const ACTIVITIES = [
  {
    title: "Aerodrome Article",
    description: "Diving into ve(3,3), metrics and profitability",
    colorClass: "rgb(31, 94, 255)",
    type: "article",
    todos: [
      {
        title: "Initial Research",
        percentage: 25,
        items: [
          { text: "Idea and General Knowledge", done: 1 },
          { text: "Finding Articles, Content, etc.", done: 1 },
          { text: "Taking Notes", done: 0 },
          { text: "Contact relevant people", done: 1 }
        ]
      },
      {
        title: "Narrative & Approach",
        percentage: 0,
        items: [
          { text: "TBD", done: 0 }
        ]
      }
    ]
  },
  {
    title: "Starknet Gaming",
    description: "Testing Influence, Loot, Realms and co",
    colorClass: "rgb(255, 100, 255)",
    type: "research",
    todos: [
      {
        title: "Influence",
        percentage: 40,
        items: [
          { text: "Fund Argent Wallet", done: 1 },
          { text: "Build Miners and Warehouses", done: 1 },
          { text: "Start simple Production", done: 1 },
          { text: "Look into Profitability and Late Game", done: 0 },
          { text: "Aborted. Dumb Game Design.", done: 1 },
        ]
      },
      {
        title: "Loot Survivor",
        percentage: 80,
        items: [
          { text: "Read through Documents", done: 1 },
          { text: "Start playing off-chain", done: 1 },
          { text: "Try on-chain, farm Beasts", done: 1 },
          { text: "Fix Addiction", done: 0 }
        ]
      },
      {
        title: "Document",
        percentage: 0,
        items: [
          { text: "Jot down learnings, benefits and downsides", done: 0 }
        ]
      }
    ]
  }


/*
{
  title: "Research",
  description: "Exploring new technologies and concepts",
  colorClass: "rgb(105, 73, 242)",
  type: "research", // Added type
  todos: [
    {
      title: "Layer 2 Solutions",
      percentage: 75,
      items: ["Optimistic Rollups", "ZK Rollups", "Plasma", "State Channels", "Comparative Analysis"]
    },
    {
      title: "Decentralized Identity",
      percentage: 40,
      items: ["W3C Standards", "DID Methods", "Verifiable Credentials", "Use Cases", "Implementation Challenges"]
    }
  ]
},
{
  title: "Skill Development",
  description: "Learning new programming languages",
  colorClass: "rgb(204, 14, 191)",
  type: "skill", // Added type
  todos: [
    {
      title: "JavaScript",
      percentage: 50,
      items: ["Basics", "Advanced Concepts", "Frameworks"]
    }
  ]
}
  {
    title: "Daily Threads",
    description: "Trying to push a thread a day. From the 16th - 22nd.",
    colorClass: "rgb(192, 255, 102)",
    type: "skill",
    todos: [
      {
        title: "On Doing the Bit",
        percentage: 100,
        items: [
          { text: "Posted on X", done: 1, link: "https://x.com/ShuiTangs/status/1835606660364091844" },
          { text: "Title Image", done: 1 },
          { text: "Writing Done", done: 1 },
          { text: "Initital Research", done: 1 },
        ]
      },
      {
        title: "Fragmentation Quickie",
        percentage: 0,
        items: [
          { text: "Posted on X", done: 1, link: "https://x.com/ShuiTangs/status/1836013031987233031" }
        ]
      },
      {
        title: "What happened to Heroglyphs",
        percentage: 0,
        items: [
          { text: "To be updated", done: 0 }
        ]
      },
      {
        title: "Uniswap Profitability",
        percentage: 0,
        items: [
          { text: "To be updated", done: 0 }
        ]
      },
      {
        title: "Has Crypto gotten safer?",
        percentage: 0,
        items: [
          { text: "To be updated", done: 0 }
        ]
      },
      {
        title: "Iterating on the Attention Economy",
        percentage: 0,
        items: [
          { text: "To be updated", done: 0 }
        ]
      },
      {
        title: "Article: Aerodrome",
        percentage: 0,
        items: [
          { text: "To be updated", done: 0 }
        ]
      }
    ]
  },
*/
];