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
    description: "Article on Influence",
    colorClass: "rgb(255, 100, 255)",
    type: "research",
    todos: [
      {
        title: "Playing Influence",
        percentage: 80,
        items: [
          { text: "Fund Argent Wallet", done: 1 },
          { text: "Build Miners and Warehouses", done: 1 },
          { text: "Start simple Production", done: 1 },
          { text: "Look into Profitability and Late Game", done: 0 },
        ]
      },
      {
        title: "Initial Research",
        percentage: 0,
        items: [
          { text: "Idea and General Knowledge", done: 0 },
          { text: "Finding Articles, Content, etc.", done: 0 },
          { text: "Taking Notes", done: 0 },
          { text: "Contact relevant people", done: 0 }
        ]
      },
      {
        title: "Narrative & Approach",
        percentage: 100,
        items: [
          { text: "TBD", done: 0 },
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