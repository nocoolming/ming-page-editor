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

                        return (
                            <Component
                                config={config}
                                key={item.id}
                                component={item}
                                deep={1} />
                        )
                    }
                )
            }
        </div>
    )
}

function Component(
    {
        config,
        component,
        deep = 1
    }:
        {
            config: Config,
            component: ComponentData,
            deep: number
        }) {

    if (deep > 10) {
        return <></>
    }
    deep++;

    if (component.type === 'Container') {
        return (
            <>
                {
                    component.props.children.map(c => (
                        <Component
                            config={config}
                            key={c.id}
                            component={c}
                            deep={deep} />))

                }
            </>
        )
    }

    const componentConfig = config.components[component.type];


    return componentConfig.render(component.props);

}
// function 
