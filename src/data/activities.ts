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
