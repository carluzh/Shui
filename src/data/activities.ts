import type { LogitActivity } from "@/types";
import { getCollection } from 'astro:content';

interface DayActivity {
  date: string;
  sports: boolean;
  twitter: boolean;
  work: boolean;
  growth: boolean;
}

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

interface TodoItem {
  text: string;
  done: number;
  link?: string;
}

interface Todo {
  title: string;
  percentage: number;
  items: TodoItem[];
}

interface Activity {
  title: string;
  description: string;
  colorClass: string;
  type: string;
  highlight?: boolean;
  iconUrl?: string;
  titleFont?: string;
  todos: Todo[];
}

export const ACTIVITIES: Activity[] = [
  {
    title: "alphix",
    description: "Redefining fees. Building a competitive DEX.",
    colorClass: "rgb(255, 255, 255)",
    type: "custom_project",
    highlight: true,
    iconUrl: "/images/logo_alphix.png",
    titleFont: "Consolas Regular",
    todos: [
      {
        title: "Strategy",
        percentage: 77,
        items: [
          { text: "Create Whitepaper", done: 1 },
          { text: "Write Business Plan", done: 1 },
          { text: "Pre-Seed Deck", done: 1 },
          { text: "Base Batch Incubator", done: 0 },
        ],
      },
      {
        title: "Product",
        percentage: 55,
        items: [
          { text: "Core Hook Development", done: 0 },
          { text: "Frontend App", done: 1 },
          { text: "Private Alpha", done: 1 },
          { text: "Private Beta", done: 0 },
        ],
      },
      {
        title: "Marketing",
        percentage: 28,
        items: [
          { text: "Twitter", done: 1 },
          { text: "Discord", done: 0 },
          { text: "Telegram", done: 0 },
          { text: "Content Schedule", done: 0 },
        ],
      },
    ],
  },
  
  // {
//   title: "Starknet Gaming",
//   description: "Article on Influence",
//   colorClass: "rgb(255, 100, 255)",
//   type: "research",
//   todos: [
//     {
//       title: "Initial Research",
//       percentage: 100,
//       items: [
//         { text: "Idea and General Knowledge", done: 1 },
//         { text: "Finding Articles, Content, etc.", done: 1 },
//         { text: "Taking Notes", done: 1 },
//         { text: "Contact relevant people", done: 1 }
//       ]
//     },
//     {
//       title: "Narrative & Approach",
//       percentage: 0,
//       items: [
//         { text: "Read example pieces", done: 0 },
//         { text: "General research", done: 0 }
//       ]
//     },
//     {
//       title: "Playing Influence",
//       percentage: 80,
//       items: [
//         { text: "Fund Argent Wallet", done: 1 },
//         { text: "Build Miners and Warehouses", done: 1 },
//         { text: "Start simple Production", done: 1 },
//         { text: "Look into Profitability and Late Game", done: 0 },
//       ]
//     },
//     {
//       title: "Writing & Publish",
//       percentage: 0,
//       items: [
//         { text: "TBD", done: 0 }
//       ]
//     }
//   ]
// },
];

export function getActivityLevel(activity: DayActivity): number {
  return [activity.sports, activity.twitter, activity.work, activity.growth].filter(Boolean).length;
}
