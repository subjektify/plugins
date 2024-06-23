export interface IPlugin {
    name: string;
    githubRepo?: string;
    npmPackage?: string;
    author: string;
    authorUrl?: string;
    description: string;
}

export default class Plugins {
    public static readonly communityPlugins: IPlugin[] = [
    ];

    public static readonly officialPlugins: IPlugin[] = [
        {
            name: "subjektify-toolbox",
            githubRepo: "subjektify/subjektify",
            npmPackage: "@subjektifylabs/subjektify-toolbox",
            author: "Subjektify Labs",
            authorUrl: "https://subjektify.dev",
            description: "A collection of tools to help you build Subjektify projects."
        },
        {
            name: "subjektify-hardhat",
            githubRepo: "subjektify/subjektify",
            npmPackage: "@subjektifylabs/subjektify-hardhat",
            author: "Subjektify Labs",
            authorUrl: "https://subjektify.dev",
            description: "Integrate Hardhat into your Subjektify projects."
        },
        {
            name: "subjektify-react",
            githubRepo: "subjektify/subjektify-react",
            npmPackage: "@subjektifylabs/subjektify-react",
            author: "Subjektify Labs",
            authorUrl: "https://subjektify.dev",
            description: "Generate React hooks from your Subjekt model."
        },
    ];
}
