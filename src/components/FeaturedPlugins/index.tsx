import React from 'react';
import styles from './styles.module.css';
import PluginCard from '../PluginCard';

const plugins = [
    {
        header: 'subjektify-build',
        meta: '@subjektifylabs',
        description: 'Build, validate, and compile your Subjekt model.',
        image: 'https://avatars.githubusercontent.com/u/146701492',
        link: '/docs/plugins/subjektify-build',
    },
    {
        header: 'subjektify-codegen',
        meta: '@subjektifylabs',
        description: 'Generate code based on your Subjekt model.',
        image: 'https://avatars.githubusercontent.com/u/146701492',
        link: '/docs/plugins/subjektify-codegen',
    },
    {
        header: 'subjektify-docgen',
        meta: '@subjektifylabs',
        description: 'Generate documentation from your Subjekt model.',
        image: 'https://avatars.githubusercontent.com/u/146701492',
        link: '/docs/plugins/subjektify-docgen',
    },
    {
        header: 'subjektify-deploy',
        meta: '@subjektifylabs',
        description: 'Automate the deployment of your Subjektify projects.',
        image: 'https://avatars.githubusercontent.com/u/146701492',
        link: '/docs/plugins/subjektify-deploy',
    },
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
                            title={plugin.header}
                            meta={plugin.meta}
                            description={plugin.description}
                            imageUrl={plugin.image}
                            link={plugin.link}
                        />
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
