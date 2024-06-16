import { Container, Divider, Header, Icon } from "semantic-ui-react"
import { FeaturedPlugins } from "../components"

export const HomeView = () => {
    return (
        <div>
            <Container className="home-view-hero" text>
                <Header
                    as='h1'
                    content='Extend, Integrate, Empower.'
                />
                <Header
                    as='h1'
                    color="blue"
                    content='Supercharge your dApps with modular plugins'
                />
            </Container>
            <Divider horizontal>
                <Header as='h4'>
                    <Icon name='paper plane' />
                    Featured Plugins
                </Header>
            </Divider>
            <FeaturedPlugins />
        </div>
    )
}
