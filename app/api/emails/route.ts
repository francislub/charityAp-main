import { connect } from "../../../dbConfig/dbConfig";
import ozohEmailsClient from "../../../models/emailsModel";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';


connect()


export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { newsemail } = reqBody;
        
        const user = process.env.EMAIL_USER;

        const newClientEmail = new ozohEmailsClient({
            newsemail
        });
        
        const clientEmail = await newClientEmail.save();

        // Send feedback email
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: user,
                pass: process.env.EMAIL_PASS,
            },
        });

        try {
            
            await transporter.sendMail({
                from: user,
                to: 'mugabimoses07@gmail.com',
                subject: `New Email subscribed for NewsLetter.`,
                html: `
                    <p>Email: ${newsemail}</p>
                `
            });

            await transporter.sendMail({
                from: user,
                to: newsemail,
                replyTo: newsemail,
                subject: `Email Received`,
                html: `
                <p>Thank you so much for subscribing to our newsletter. 
                We promise to give you updates on our services.</p>
                `
            });

        } catch (error) {
            console.log(error.message);
            
        }


    } catch (error) {
        return NextResponse.json({ error: error.message}, {status: 500})
    }
}