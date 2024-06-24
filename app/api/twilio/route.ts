
import { NextResponse } from "next/server";
import { Resend } from 'resend';
import { Client } from '@notionhq/client';
import Error from "next/error";

export const runtime = "edge";

// Initialize the Notion client
const notion = new Client({ auth: process.env.NOTION_API_KEY });

// Function to add a new item to the Notion to-do list
async function addToNotionToDoList(content : any) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: process.env.NOTION_DATABASE_ID as string},
      properties: {
        'Name': {
          title: [
            {
              text: {
                content: content,
              },
            },
          ],
        },
        'Status': {
          select: {
            name: 'To Do',
          },
        },
      },
    });
    return response;
  } catch (error) {
    console.error('Error adding to Notion:', error);
    throw error;
  }
}

export async function POST(req: Request) {
    try {
      // Read the incoming webhook data
      const formData = await req.formData();
      const twilioData = Object.fromEntries(formData.entries());
      
      // Extract relevant information
      const from = twilioData.From;
      const to = twilioData.To;
      const body = twilioData.Body;
  
      console.log('From:', from);
      console.log('To:', to);
      console.log('Body:', body);
  
      // Add the body of the SMS to the Notion to-do list
      await addToNotionToDoList(body);
  
      return NextResponse.json({ success: true });
    } catch (error : any) {
      console.error('Error handling Twilio webhook:', error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
  }
  
  export async function GET(req: Request) {
    return NextResponse.json({ success: true });
  }