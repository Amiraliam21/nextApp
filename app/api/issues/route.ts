import { NextRequest, NextResponse } from "@/node_modules/next/server";
import {z} from 'zod';
import prisma from "@/prisma/client";

const createIssueSchema = z.object({
    title: z.string().min(1).max(255),
    disc:  z.string().min(1)
})

export async function POST(request: NextRequest){
    const body = await request.json();
    const validation = createIssueSchema.safeParse(body);
    if (!validation.success){
        return NextResponse.json(validation.error.errors, {status:400});
    }
        const newIssue = await prisma.issue.create({
            data: {title: body.title, disc: body.disc}
        });

        return NextResponse.json(newIssue, {status: 201})
    
}
