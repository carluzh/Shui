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
    title: "Winter Arc",
    description: "Personal fitness plan",
    colorClass: "rgb(100, 149, 237)", // Cornflower Blue
    type: "personal",
    highlight: true,
    todos: [
      // Bodybuilding
      {
        title: "Bodybuilding",
        percentage: 20,
        items: [
          { text: "Week 1 - PPL (5x)", done: 1 },
          { text: "Week 2 - PPL (5x)", done: 2 },
          { text: "Week 3 - PPL (3x) - deload", done: 1 },
          { text: "Week 4 - Arms, Legs, Core (3x)", done: 0 },
          { text: "Week 5 - PPL (5x)", done: 0 },
          { text: "Week 6 - Whole (2x)", done: 0 },
          { text: "Week 7 - PPL (5x)", done: 0 },
          { text: "Week 8 - PPL (5x)", done: 0 },
          { text: "Week 9 - Deload (2x)", done: 0 },
        ]
      },
      {
        title: "Stretching",
        percentage: 10,
        items: [
          { text: "Week 1 - Sleep, Hamstrings I, Post Run", done: 1 },
          { text: "Week 2 - Detox, Shoulders I, Cool Down", done: 2 },
          { text: "Week 3 - Core, Posture Power, Planks I", done: 2 },
          { text: "Week 4 - Back, Posture Stabilizer, Planks II", done: 0 },
          { text: "Week 5 - Full Body, Pelvic Tilt, Planks III", done: 0 },
          { text: "Week 6 - Hips, Tech Neck, Planks IV", done: 0 },
          { text: "Week 7 - Twists, Wake Up, Shoulders", done: 0 },
          { text: "Week 8 - Splits, Posture Reset, Expert", done: 0 },
          { text: "Week 9 - Lower Back, Sleep, Planks IV", done: 0 },
        ]
      }
    ]
  },
  {
    title: "Website",
    description: "Adding functionality and improving UX",
    colorClass: "rgb(105, 73, 242)",
    type: "skill",
    todos: [
      {
        title: "Features",
        percentage: 100,
        items: [
          { text: "Newsletter Pup-up", done: 1 },
          { text: "Article 'Show More'", done: 1 },
          { text: "Highlight Activities", done: 1 }
        ]
      },
      {
        title: "Backend",
        percentage: 30,
        items: [
          { text: "Local date calculation", done: 1 },
          { text: "User-side Date calculation", done: 1 },
          { text: "Activity Workflow, mobile", done: 0 },
          { text: "Project Workflow, mobile", done: 0 }
        ]
      },
      {
        title: "UX",
        percentage: 66,
        items: [
          { text: "Writing Overhaul", done: 1 },
          { text: "Calendar ToM", done: 1 },
          { text: "Writing Curation + Search", done: 1 },
          { text: "Lacking Data Indicator", done: 1 }
        ]
      }
    ]
  },
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
          { text: "Read example pieces", done: 0 },
          { text: "General research", done: 0 }
        ]
      },
      {
        title: "Writing & Publish",
        percentage: 0,
        items: [
          { text: "TBD", done: 0 }
        ]
      }
    ]
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

export function getActivityForDate(date: string): DayActivity | undefined {
  return ACTIVITY_DATA.find(activity => activity.date === date);
}
