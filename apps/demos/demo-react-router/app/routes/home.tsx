import { useState } from "react";
import type { Route } from "./+types/home";
import { config } from '../config'
import '../app.css'
import { MingEditor } from "@nocoolming/page-editor";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Home() {
    const [data, setData] = useState(
        {
            body: [
                {
                    "id": "bSI6emfWPqthOV9CyaQbx",
                    "type": "Heading",
                    "props": { "value": "11" }
                },
                {
                    "id": "y9vcO8hMRZ-J2McAUsC8z",
                    "type": "Container",
                    "props": {
                        "children": [
                            { "id": "Flbsx433JkyX6KGJwCuaw", "type": "Heading", "props": { "value": "3" } },
                            { "id": "imu7wC-lsQMI6msEYcZT3", "type": "Heading", "props": { "value": "4" } }]
                    }
                }],
            header: [],
            footer: []
        }
    );

    return (
        <>
            {/* <p>{JSON.stringify(data)}</p> */}
            <MingEditor
                data={data}
                onChange={e => setData(e)}
                config={config} />
        </>
    )

}
