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
            name: "subjektify-build",
            githubRepo: "subjektify/subjektify",
            npmPackage: "@subjektifylabs/subjektify-build",
            author: "Subjektify Labs",
            authorUrl: "https://subjektify.dev",
            description: "Build, validate, and compile your Subjekt model."
        },
        {
            name: "subjektify-codegen",
            githubRepo: "subjektify/subjektify",
            npmPackage: "@subjektifylabs/subjektify-codegen",
            author: "Subjektify Labs",
            authorUrl: "https://subjektify.dev",
            description: "Generate code based on your Subjekt model."
        },
        {
            name: "subjektify-docgen",
            githubRepo: "subjektify/subjektify",
            npmPackage: "@subjektifylabs/subjektify-docgen",
            author: "Subjektify Labs",
            authorUrl: "https://subjektify.dev",
            description: "Generate documentation from your Subjekt model."
        },
        {
            name: "subjektify-deploy",
            githubRepo: "subjektify/subjektify",
            npmPackage: "@subjektifylabs/subjektify-deploy",
            author: "Subjektify Labs",
            authorUrl: "https://subjektify.dev",
            description: "Automate the deployment of your Subjektify projects."
        },
        {
            name: "subjektify-hardhat",
            githubRepo: "subjektify/subjektify",
            npmPackage: "@subjektifylabs/subjektify-hardhat",
            author: "Subjektify Labs",
            authorUrl: "https://subjektify.dev",
            description: "Integrate Hardhat into your Subjektify projects."
        }
    ];
}
