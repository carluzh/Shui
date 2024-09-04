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
    colorClass: "rgb(176, 20, 0)",
    type: "article",
    todos: [
      {
        title: "Initial Research",
        percentage: 100,
        items: [
          { text: "Research", done: 1 },
          { text: "Outline", done: 0 },
          { text: "First Draft", done: 0 },
          { text: "Revisions", done: 0 },
          { text: "Publish", done: 0 }
        ]
      },
      {
        title: "Rust for Beginners",
        percentage: 20,
        items: [
          { text: "Outline", done: 0 },
          { text: "Introduction", done: 0 },
          { text: "Basic Syntax", done: 0 },
          { text: "Memory Management", done: 0 },
          { text: "Concurrency", done: 0 }
        ]
      }
    ]
  }

/*
{
  title: "Research",
  description: "Exploring new technologies and concepts",
  colorClass: "rgb(88, 255, 51)",
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
*/
];