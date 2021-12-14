import React from 'react'
import { MenuNav } from './components/Nav/MenuNav';
import { Nav } from './components/Nav/Nav';
import { Page } from './components/Page/Page';
import { Panel } from './components/Panel/Panel';
import { PanelHero } from './components/Panel/PanelHero';
import { PanelSession } from './components/Panel/PanelSession';
import './main.scss';


export const ExpiceApp = () => {
    return (
        <Page>
            <Panel>
                <Nav>
                    <h1>expice</h1>

                    <MenuNav items={['Menu One', 'Menu Two', 'Menu Three', 'Menu Four']} ></MenuNav>
                </Nav>

                <PanelHero></PanelHero>
            </Panel>

            <PanelSession>

            </PanelSession>
        </Page>
    )
}
