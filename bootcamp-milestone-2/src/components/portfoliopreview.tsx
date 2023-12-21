import React from 'react';
import style from './portfolioPreview.module.css'
import Link from "../../node_modules/next/link";
import type { IPortfolio } from "@/database/portfolioSchema"
import Image from 'next/image'

export default function PortfolioPreview(props: IPortfolio) {
  return (
    <div>
    <title>Portfolio</title>
    <main>
        <br></br>
        <h1 className="page-title">{props.title}</h1>
        <br></br>
        <div className="project">
            <Link className="link" href={props.link}><Image style={style} alt="image" width="500" height="250" src={props.image}></Image></Link>
            <div className="project-details">
                <p className="project-name">{props.description}</p>
                <br></br>
                <Link href={`/portfolio/${props.slug}`}>Read More</Link>
            </div>
            <br></br>
        </div>
    </main>
</div>
  );
}