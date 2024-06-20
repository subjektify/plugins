import React from 'react';
import styles from './styles.module.css';

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
        <div className="margin-top--lg padding-right--md padding-left--md">
            <h1 className='text--center'>Featured Plugins</h1>
            <div className='row'>
            {plugins.map((plugin, index) => (
                <div key={index} className="col col--3 margin-bottom--lg">
                    <a href={plugin.link} className={styles.cardLink}>
                        <div className={styles.card}>
                            <div className={styles.cardImage}>
                                <img src={plugin.image} alt={plugin.header} />
                            </div>
                            <div className={styles.cardContent}>
                                <h3>{plugin.header}</h3>
                                <p className="text--secondary">{plugin.meta}</p>
                                <p>{plugin.description}</p>
                            </div>
                        </div>
                    </a>
                </div>
            ))}
            </div>
        </div>
    );
};
