import React from 'react';
import PluginCard from '../PluginCard';
import Plugins from '../Plugins';

const plugins = [
    Plugins.officialPlugins[0],
    Plugins.officialPlugins[1],
    Plugins.officialPlugins[2],
];

export default function FeaturedPlugins(): JSX.Element {
    return (
        <div className="hero shadow--lw">
            <div className="container">
                <h1 className='text--center'>Featured Plugins</h1>
                <div className='card-demo'>
                    <div className='row'>
                    {plugins.map((plugin, index) => (
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
            </div>
        </div>
    );
};
