import Link from "next/link";
import { modules } from "../lib/constants";

export default function Dashboard() {
    return (
        <div id="home">
            <div className="title">
                <h1>Bienvenid@</h1>
            </div>

            <div className="modules">
                {
                    modules.map((module) => (
                        <Link key={module.url} href={module.url}>
                            <div className="icon-container" dangerouslySetInnerHTML={{__html: module.svg}} />
                            <h2>{module.name}</h2>
                            <p>{module.description}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}