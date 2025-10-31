import type { Config } from "./config/type";
import type { ComponentData, Data } from "./config/Data";

export function Preview({ config, data }:
    {
        config: Config,
        data: Data
    }
) {
    return (
        <div>
            <p>Preview</p>
            {/* {JSON.stringify(data)} */}
            {
                data.map(
                    item => {

                        return <Component config={config} key={item.id} component={item} />
                    }
                )
            }
        </div>
    )
}

function Component({ config, component }: { config: Config, component: ComponentData }) {
    if (component.type === 'Container') {
        return (
            <>
                {
                    component.props.children.map(c => (
                        <Component
                            config={config}
                            key={c.id}
                            component={c} />))

                }
            </>
        )
    }

    const componentConfig = config.components[component.type];


    return componentConfig.render(component.props);

}
// function 
