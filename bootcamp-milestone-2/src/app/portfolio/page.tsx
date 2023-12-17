//import Link from 'next/link'
import React from 'react'
import connectDB from '@/helpers/db';
import Portfolios from '@/database/PortfolioSchema';
import PortfolioPreview from '@/components/portfoliopreview';

/*export default function Portfolio() {
    const imgstyle = {
        height: "400px",
        border: "5px black",
    }
    return ( <div>
    <title>Portfolio</title>
    <main>
        <br></br>
        <h1 className="page-title">Portfolio</h1>
        <br></br>
        <div className="project">
            <Link className="link" href="https://scratch.mit.edu/users/7Sofa/"><img style={imgstyle} src="portfolio.png"></img></Link>
            <div className="project-details">
                <p className="project-name">Starter Personal Website</p>
                <br></br>
                <Link className="link" href="/">Learn More</Link>
                <br></br>
            </div>
            <br></br>
        </div>
    </main>
</div>)
}*/

async function getPortfolio(){
	await connectDB(); // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const portfolioitems = await Portfolios.find().sort({ date: -1 }).orFail();
			// send a response as the blogs as the message
	    return portfolioitems;
	} catch (err) {
	    return null;
	}
}

export default async function PortfolioList() {
    const portfoliolist = await getPortfolio();
    if (portfoliolist == null) {
        return (
            <div>
                <title>Portfolio</title>
                <h1>No portfolio yet</h1>
            </div>
        );
    }
    else {
        return (
            <main>
                <title>Portfolio</title>
                <div className="indivblog">
                {portfoliolist.map((p) => (
                    <PortfolioPreview
                        title={p.title}
                        description={p.description}
                        slug={p.slug}
                        image={p.image}
                        link={p.link}
                    /> // This is how we call the component
                    ))}
                </div>
            </main>
        );
    }
}