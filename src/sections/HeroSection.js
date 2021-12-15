import React from 'react'
import { MenuNav } from '../components/Nav/MenuNav';
import { Nav } from '../components/Nav/Nav';
import { Page } from '../components/Page/Page';
import { Panel } from '../components/Panel/Panel';
import { PanelHero } from '../components/Panel/PanelHero';
import { PanelSession, SessionPanel } from '../components/Panel/PanelSession';
import { UserPanel, UserPanelState, UserPanelDrop } from '../components/Panel/UserPanel';
import { Ellipse, EllipseBottom } from '../components/Ellipse/Ellipse';
import { Image, ImageLettuce } from '../components/Image/Image';
import { PaginationPanel, PaginationButton } from '../components/Panel/PaginationPanel';
import ellipse from '../images/ellipsebg.png';
import lettuce from '../images/—Pngtree—lettuce_1175257 1.png';
import food from '../images/—Pngtree—delicious food_568171 1.png';
import '../main.scss';

export const HeroSection = () => {
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
                <SessionPanel>
                    <UserPanel><i className="far fa-user"></i></UserPanel>
                    <UserPanelState></UserPanelState>
                    <UserPanelDrop> User <i className='fas fa-angle-down'></i></UserPanelDrop>
                </SessionPanel>

                <Ellipse src={ellipse}></Ellipse>
                <EllipseBottom src={ellipse}></EllipseBottom>
                <ImageLettuce src={lettuce}></ImageLettuce>
                <Image src={food}></Image>

                <PaginationPanel>
                    <PaginationButton><i className="fas fa-arrow-left"></i></PaginationButton>
                    <PaginationButton><i className="fas fa-arrow-right"></i></PaginationButton>
                </PaginationPanel>

            </PanelSession>
        </Page>
    )
}
