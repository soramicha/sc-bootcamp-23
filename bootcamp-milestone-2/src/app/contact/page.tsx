import React from 'react'
import ContactPreview from '@/components/contactPreview';
import connectDB from '@/helpers/db';

export default async function Contact() {
    await connectDB();
    
    return ( <div>
    <title>Contact</title>
    <main>
        <br></br>
        <h1 className="page-title">Contact</h1>
        <ContactPreview/>
        <br></br>
    </main>
</div>)
}
