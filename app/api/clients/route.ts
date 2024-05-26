import { connect } from "../../../dbConfig/dbConfig";
import ozohClient from "../../../models/clientModel";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';


connect()


export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { name, number, service, email, message } = reqBody;
        
        const user = process.env.EMAIL_USER;

        const newClientFeedback = new ozohClient({
            name,
            number,
            service,
            email,
            message
        });
        
        const clientFeedback = await newClientFeedback.save(); 

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
                to: 'ozohmazaike@gmail.com',
                subject: `New Feedback from client, ${name}`,
                html: `
                    <p>Name: ${name}</p>
                    <p>Number: ${number}</p>
                    <p>Service: ${service}</p>
                    <p>Email: ${email}</p>
                    <p>Message: ${message}</p>
                `
            });

            await transporter.sendMail({
                from: user,
                to: email,
                replyTo: email,
                subject: `Feedback Received`,
                html: `
                <p>Thank you so much, ${name} for your feedback. 
                We promise to offer you the best service.</p>
                `
            });

        } catch (error) {
            console.log(error.message);
            
        }


    } catch (error) {
        return NextResponse.json({ error: error.message}, {status: 500})
    }
}