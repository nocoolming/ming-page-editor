import { config } from '~/config';
import type { Route } from './+types/preview';
import { Preview } from '@nocoolming/page-editor';

export function meta(): Route.MetaArgs {
    return [
        { title: 'This is ming editor preview demo' },
        { name: 'description', content: 'This is ming editor preview demo.' }
    ];
}

export default function PreviewPage() {
    const data = [
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
        }];

    return (
        <>
            {/* <p>Preview page</p> */}

            {/* <p>{JSON.stringify(data)}</p> */}
            <Preview
                config={config}
                data={data} />
        </>
    )
}