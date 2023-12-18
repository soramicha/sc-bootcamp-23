import React from 'react';
import style from './portfolioPreview.module.css'
import Link from "../../node_modules/next/link";
import type { IPortfolio } from "@/database/portfolioSchema"

export default function PortfolioPreview(props: IPortfolio) {
  return (
    <div>
    <title>Portfolio</title>
    <main>
        <br></br>
        <h1 className="page-title">{props.title}</h1>
        <br></br>
        <div className="project">
            <Link className="link" href={props.link}><img style={style} src={props.image}></img></Link>
            <div className="project-details">
                <p className="project-name">{props.description}</p>
                <br></br>
                <Link href={props.slug}>Read More</Link>
            </div>
            <br></br>
        </div>
    </main>
</div>
  );
}