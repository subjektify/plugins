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
        {
            name: "subjektify-react",
            npmPackage: "@community/subjektify-react",
            author: "Community Dev",
            authorUrl: "https://github.com/communitydev",
            description: "A plugin to generate React hooks for the Subjekt model."
        }
    ];

    public static readonly officialPlugins: IPlugin[] = [
        {
            name: "subjektify-build",
            npmPackage: "@subjektifylabs/subjektify-build",
            author: "Subjektify Labs",
            authorUrl: "https://subjektify.dev",
            description: "Build, validate, and compile your Subjekt model."
        },
        {
            name: "subjektify-codegen",
            npmPackage: "@subjektifylabs/subjektify-codegen",
            author: "Subjektify Labs",
            authorUrl: "https://subjektify.dev",
            description: "Generate code based on your Subjekt model."
        },
        {
            name: "subjektify-docgen",
            npmPackage: "@subjektifylabs/subjektify-docgen",
            author: "Subjektify Labs",
            authorUrl: "https://subjektify.dev",
            description: "Generate documentation from your Subjekt model."
        },
        {
            name: "subjektify-deploy",
            npmPackage: "@subjektifylabs/subjektify-deploy",
            author: "Subjektify Labs",
            authorUrl: "https://subjektify.dev",
            description: "Automate the deployment of your Subjektify projects."
        },
        {
            name: "subjektify-hardhat",
            npmPackage: "@subjektifylabs/subjektify-hardhat",
            author: "Subjektify Labs",
            authorUrl: "https://subjektify.dev",
            description: "Integrate Hardhat into your Subjektify projects."
        }
    ];
}
