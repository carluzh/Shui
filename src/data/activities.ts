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
        percentage: 75,
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
        percentage: 80,
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
        percentage: 100,
        items: [
          { text: "Read through Documents", done: 1 },
          { text: "Start playing off-chain", done: 1 },
          { text: "Try on-chain, farm Beasts", done: 1 },
          { text: "Fix Addiction", done: 0 }
        ]
      },
      {
        title: "Writing",
        percentage: 60,
        items: [
          { text: "Create Structure/Outline", done: 1 },
          { text: "Pivot: General Gaming piece, learnings in future articles", done: 1 },
          { text: "Write First Draft", done: 1 },
          { text: "Implement Feedback", done: 0 },
          { text: "Polish Article, Add Images", done: 0 },

        ]
      },
      {
        title: "Publish",
        percentage: 20,
        items: [
          { text: "Deliver First Draft to Od1n, Oded, etc.", done: 1 },
          { text: "Deliver Final Article", done: 0 },
          { text: "Create X Article Overview", done: 0 },
          { text: "Push Article to Site", done: 0 },
          { text: "Create KOL list", done: 0 },
          { text: "Publish", done: 0 }
        ]
      }
    ]
  },

{
  title: "Website",
  description: "Adding functionality and improving UX",
  colorClass: "rgb(105, 73, 242)",
  type: "skill", // Added type
  todos: [
    {
      title: "Features",
      percentage: 100,
      items: [
        { text: "Newsletter Pup-up", done: 1 }
      ]
    },
    {
      title: "Backend",
      percentage: 30,
      items: [
        { text: "Local date calculation", done: 1 },
        { text: "Activity Workflow, mobile", done: 0 },
        { text: "Project Workflow, mobile", done: 0 }
      ]
    },
    {
      title: "UX",
      percentage: 40,
      items: [
        { text: "Writing Curation + Overhaul", done: 0 },
        { text: "Calendar ToM", done: 0 },
        { text: "General Layout", done: 0 }
      ]
    }
  ]
}
];