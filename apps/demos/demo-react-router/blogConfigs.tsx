import type { Config, } from "@nocoolming/page-editor";

export const config = {
    components: {
        HeadingBlock: {
            fields: {
                title: {
                    type: 'text',
                }
            },
            render: ({ title }: { title: string }) => {
                return (
                    <h1>${title}</h1>
                )
            }
        },
        ImageBlock: {
            fields: {
                src: {
                    type: 'string',
                },
                alt: {
                    type: "string",
                }
            },
            render: ({ alt, src }: { alt: string, src: string }) => (
                <img src={src} alt={alt} />
            )
        },
        ContainerBlock:{
            render: ( )=> {
                <div></div>
            }
        }
    }
}

// export const blockConfigs: Record<string, BlockConfig> = {
//     Text: {
//         fields: [{
//             key: 'text',
//             label: '文本',
//             type: 'string'
//         }],
//         acceptsChildren: false,
//         render: (props) => {
//             console.log(JSON.stringify(props));
//             return (
//                 <p>{props.text}</p>
//             )
//         }
//     },
//     Image: {
//         fields: [{
//             key: 'src',
//             label: 'Image url',
//             type: 'string'
//         }],
//         acceptsChildren: false,
//         render: props => <img src={props.src} alt='' className="max-w-xs block" />
//     },
//     Container: {
//         fields: [],
//         acceptsChildren: true,
//         render: (_, children) => (
//             <div className="">
//                 {children}
//             </div>
//         )
//     }
// };