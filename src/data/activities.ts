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
    title: "Website",
    description: "Adding functionality and improving UX",
    colorClass: "rgb(105, 73, 242)",
    type: "skill",
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
  {
    title: "Starknet Gaming",
    description: "Article on Influence",
    colorClass: "rgb(255, 100, 255)",
    type: "research",
    todos: [
      {
        title: "Initial Research",
        percentage: 100,
        items: [
          { text: "Idea and General Knowledge", done: 1 },
          { text: "Finding Articles, Content, etc.", done: 1 },
          { text: "Taking Notes", done: 1 },
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
        title: "Writing & Publish",
        percentage: 0,
        items: [
          { text: "TBD", done: 0 }
        ]
      }
    ]
  },
  {
    title: "Winter Arc",
    description: "Personal fitness plan",
    colorClass: "rgb(100, 149, 237)", // Cornflower Blue
    type: "personal",
    todos: [
      // Bodybuilding
      {
        title: "Bodybuilding",
        percentage: 0,
        items: [
          { text: "Week 1 - 5x: Push/Pull/Legs/Push/Pull", done: 0 },
          { text: "Week 2 - 5x: Push/Pull/Legs/Pull/Push", done: 0 },
          { text: "Week 3 - 5x: Pull/Push/Legs/Pull/Push", done: 0 },
          { text: "Week 4 - 5x: Push/Pull/Legs/Push/Pull", done: 0 },
          { text: "Week 5 - 5x: Pull/Legs/Push/Pull/Legs", done: 0 },
          { text: "Week 6 - 5x: Push/Legs/Pull/Push/Legs", done: 0 },
          { text: "Week 7 - 3x: Deload Week (Push/Pull/Legs)", done: 0 },
          { text: "Week 8 - 5x: Push/Pull/Legs/Push/Pull", done: 0 },
          { text: "Week 9 - 5x: Pull/Push/Legs/Pull/Push", done: 0 },
        ]
      },
      {
        title: "Stretching",
        percentage: 0,
        items: [
          { text: "Week 1 - Shoulders & Neck", done: 0 },
          { text: "Week 1 - Lower Back & Legs", done: 0 },
          { text: "Week 1 - Core & Flexibility", done: 0 },
          
          { text: "Week 2 - Shoulders & Neck", done: 0 },
          { text: "Week 2 - Lower Back & Legs", done: 0 },
          { text: "Week 2 - Core & Flexibility", done: 0 },
          
          { text: "Week 3 - Shoulders & Neck", done: 0 },
          { text: "Week 3 - Lower Back & Legs", done: 0 },
          { text: "Week 3 - Core & Flexibility", done: 0 },
          
          { text: "Week 4 - Shoulders & Neck", done: 0 },
          { text: "Week 4 - Lower Back & Legs", done: 0 },
          { text: "Week 4 - Core & Flexibility", done: 0 },
          
          { text: "Week 5 - Shoulders & Neck", done: 0 },
          { text: "Week 5 - Lower Back & Legs", done: 0 },
          { text: "Week 5 - Core & Flexibility", done: 0 },
          
          { text: "Week 6 - Shoulders & Neck", done: 0 },
          { text: "Week 6 - Lower Back & Legs", done: 0 },
          { text: "Week 6 - Core & Flexibility", done: 0 },
          
          { text: "Week 7 - Shoulders & Neck", done: 0 },
          { text: "Week 7 - Lower Back & Legs", done: 0 },
          { text: "Week 7 - Core & Flexibility", done: 0 },
          
          { text: "Week 8 - Shoulders & Neck", done: 0 },
          { text: "Week 8 - Lower Back & Legs", done: 0 },
          { text: "Week 8 - Core & Flexibility", done: 0 },
          
          { text: "Week 9 - Shoulders & Neck", done: 0 },
          { text: "Week 9 - Lower Back & Legs", done: 0 },
          { text: "Week 9 - Core & Flexibility", done: 0 },
        ]
      },
      {
        title: "Running",
        percentage: 0,
        items: [
          { text: "Week 1 - Run 3km (Tuesday 20:00)", done: 0 },
          { text: "Week 1 - Run 3km (Thursday 20:30)", done: 0 },
          
          { text: "Week 2 - Run 3.5km (Tuesday 19:30)", done: 0 },
          { text: "Week 2 - Run 3.5km (Thursday 19:00)", done: 0 },
          
          { text: "Week 3 - Run 4km (Tuesday 19:00)", done: 0 },
          { text: "Week 3 - Run 4km (Thursday 18:30)", done: 0 },
          
          { text: "Week 4 - Run 4.5km (Tuesday 18:30)", done: 0 },
          { text: "Week 4 - Run 4.5km (Thursday 18:00)", done: 0 },
          
          { text: "Week 5 - Run 5km (Tuesday 18:00)", done: 0 },
          { text: "Week 5 - Run 5km (Thursday 17:30)", done: 0 },
          
          { text: "Week 6 - Run 5.5km (Tuesday 17:30)", done: 0 },
          { text: "Week 6 - Run 5.5km (Thursday 17:00)", done: 0 },
          
          { text: "Week 7 - Run 6km (Tuesday 17:00)", done: 0 },
          { text: "Week 7 - Run 6km (Thursday 16:30)", done: 0 },
          
          { text: "Week 8 - Run 6.5km (Tuesday 16:30)", done: 0 },
          { text: "Week 8 - Run 6.5km (Thursday 16:00)", done: 0 },
          
          { text: "Week 9 - Run 7km (Tuesday 16:00)", done: 0 },
          { text: "Week 9 - Run 7km (Thursday 15:30)", done: 0 },
        ]
      }
    ]
  },
];

export function getActivityLevel(activity: DayActivity): number {
  return [activity.sports, activity.twitter, activity.work, activity.growth].filter(Boolean).length;
}

export function getActivityForDate(date: string): DayActivity | undefined {
  return ACTIVITY_DATA.find(activity => activity.date === date);
}
