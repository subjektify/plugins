import {
    CardMeta,
    CardHeader,
    CardGroup,
    CardDescription,
    CardContent,
    Card,
    Icon,
    Image,
} from 'semantic-ui-react';

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
    }
];

export const FeaturedPlugins = () => {
    return (
        <CardGroup itemsPerRow={4}>
            {plugins.map((plugin, index) => (
                <Card key={index} href={plugin.link}>
                    <CardContent>
                        <Image
                            floated='right'
                            size='mini'
                            src={plugin.image}
                        />
                        <CardHeader>
                            {plugin.header}  <Icon name='check circle' color='green' />
                        </CardHeader>
                        <CardMeta>{plugin.meta}</CardMeta>
                        <CardDescription>
                            {plugin.description}
                            <br />
                        </CardDescription>
                    </CardContent>
                </Card>
            ))}
        </CardGroup>
    );
};
