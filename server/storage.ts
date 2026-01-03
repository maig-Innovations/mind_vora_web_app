import { db } from "./db";
import {
  contactSubmissions,
  subscribers,
  type InsertContact,
  type InsertSubscriber,
  type ContactSubmission,
  type Subscriber
} from "@shared/schema";

export interface IStorage {
  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
}

export class DatabaseStorage implements IStorage {
  async createContactSubmission(contact: InsertContact): Promise<ContactSubmission> {
    const [submission] = await db
      .insert(contactSubmissions)
      .values(contact)
      .returning();
    return submission;
  }

  async createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber> {
    const [sub] = await db
      .insert(subscribers)
      .values(subscriber)
      .returning();
    return sub;
  }
}

export const storage = new DatabaseStorage();
