import { Button, Container, Divider, Header, Icon } from "semantic-ui-react"

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
            <Container className="home-view-create">
                <Button icon secondary labelPosition='left'>
                    <Icon name='rocket' />Create your own</Button>
            </Container>
            <Divider horizontal>
                <Header as='h4'>
                    Build
                </Header>
            </Divider>
            <Divider horizontal>
                <Header as='h4'>
                    Composer
                </Header>
            </Divider>
        </div>
    )
}
