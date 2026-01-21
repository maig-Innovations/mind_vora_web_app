import { type InsertLead, type Lead } from "@shared/schema";

export interface IStorage {
  createLead(lead: InsertLead): Promise<Lead>;
}

export class DatabaseStorage implements IStorage {
  async createLead(insertLead: InsertLead): Promise<Lead> {
    // For static site, no database, so return a mock lead
    return {
      id: 1,
      ...insertLead,
      createdAt: new Date(),
    };
  }
}

export const storage = new DatabaseStorage();
