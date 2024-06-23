import Plugins from "../Plugins";
import PluginCard from "../PluginCard";

export default function CommunityPlugins(): JSX.Element {
    return (
        <div className='card-demo'>
            <div className='row'>
                {Plugins.communityPlugins.map((plugin, index) => (
                    <PluginCard
                        key={index}
                        name={plugin.name}
                        githubRepo={plugin.githubRepo}
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
