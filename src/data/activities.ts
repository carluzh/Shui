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
        percentage: 10,
        items: [
          { text: "Idea and General Knowledge", done: 1 },
          { text: "Finding Articles, Content, etc.", done: 0 },
          { text: "Taking Notes", done: 0 },
          { text: "Contact relevant people", done: 0 }
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
    title: "Website",
    description: "Creating a personal site with Cursor",
    colorClass: "rgb(192, 255, 102)",
    type: "skill",
    todos: [
      {
        title: "Layout and Learning Curve",
        percentage: 100,
        items: [
          { text: "Inspired by Railly Hugo", done: 1, link: "https://x.com/RaillyHugo" },
          { text: "Fork Layout", done: 1 },
          { text: "Cursor Setup", done: 1 },
          { text: "Research Astro + basic Web Dev", done: 1 },
        ]
      },
      {
        title: "Implement Github-style activity tracker",
        percentage: 100,
        items: [
          { text: "Create 3 week lookback Calendar", done: 1},
          { text: "Simple, Low overhead Tracking Method", done: 1 },
          { text: "Expanded View inspired by Github", done: 1 },
          { text: "Streak + UI Improvements", done: 1 },
        ]
      },
      {
        title: "Article Layout",
        percentage: 75,
        items: [
          { text: "Quotations", done: 1 },
          { text: "Comments + Highlighted Text + Misc", done: 1 },
          { text: "Footer", done: 1 },
          { text: "Improve readability", done: 0 },
        ]
      },
      {
        title: "Current Projects",
        percentage: 100,
        items: [
          { text: "Find ideal structure", done: 1,},
          { text: "Implement colorClass and iconClass", done: 1 },
          { text: "Content Navigation + Progress Bars", done: 1 },
        ]
      },      {
        title: "Finalize and Publish",
        percentage: 60,
        items: [
          { text: "Settle on Color Scheme", done: 1,},
          { text: "Add Animations + Eastereggs", done: 1 },
          { text: "Add relevant Articles/Threads", done: 1 },
          { text: "Mobile Support", done: 0 },
          { text: "Twitter Thread", done: 0 },
        ]
      },
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
*/
];