import Plugins from "../Plugins";
import PluginCard from "../PluginCard";

export default function OfficialPlugins(): JSX.Element {
    return (
        <div className='card-demo'>
            <div className='row'>
                {Plugins.officialPlugins.map((plugin, index) => (
                    <PluginCard
                        key={index}
                        name={plugin.name}
                        npmPackage={plugin.npmPackage}
                        author={plugin.author}
                        authorUrl={plugin.authorUrl}
                        description={plugin.description}
                    />
                ))}
            </div>
        </div>
    )
}
