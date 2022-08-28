import React, { useState } from "react";
import {  Button, ButtonVariant, Masthead, MastheadBrand, MastheadContent, MastheadMain, MastheadToggle, Nav, NavItem, NavList, Page, PageSidebar, PageToggleButton, SkipToContent, Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem } from "@patternfly/react-core";
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
import { LinkedinIcon, GithubIcon } from '@patternfly/react-icons'
import { useLocation } from "react-router-dom";

const pages = [
  {link: "/", title: "Home Page"},
  {link: "/blog",  title: "Blog"},
  {link: "/media", title: "Media"} 
]

const PageLayout = ({children}) => {
  const currentPage = useLocation().pathname
  const [navSelectedItem, setNavSelectedItem] = useState(pages.findIndex(page => page.link === currentPage))

  const PageNav = (
    <Nav onSelect={e => setNavSelectedItem(() => e.itemId)} aria-label="Nav">
      <NavList>
        {pages.map((page, i) => (
          <NavItem to={page.link} key={page.link} itemId={i} isActive={navSelectedItem === i} >
            {page.title}
          </NavItem>
        ))}
      </NavList>
    </Nav>
  )

  const headerToolbar = (
    <Toolbar id="toolbar" isFullHeight isStatic>
      <ToolbarContent>
        <ToolbarGroup
          variant="icon-button-group"
          alignment={{ default: 'alignRight' }}
          spacer={{ default: 'spacerNone', md: 'spacerMd' }}
        >
          <ToolbarItem>
            <Button component="a" aria-label="LinkedIn link" variant={ButtonVariant.plain} href="https://www.linkedin.com/in/matoval/" target="_blank">
              <LinkedinIcon size="md" />
            </Button>
            <Button component="a" aria-label="Github link" variant={ButtonVariant.plain} href="https://github.com/matoval" target="_blank">
              <GithubIcon size="md" />
            </Button>
          </ToolbarItem>
        </ToolbarGroup>
      </ToolbarContent>
    </Toolbar>
  )

  const Header = (
    <Masthead>
      <MastheadToggle>
        <PageToggleButton variant="plain" aria-label="Global navigation">
          <BarsIcon />
        </PageToggleButton>
      </MastheadToggle>
      <MastheadMain>
        <MastheadBrand>
          Matthew Sandoval
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>{headerToolbar}</MastheadContent>
    </Masthead>
  )

  const Sidebar = <PageSidebar nav={PageNav} />;

  return (
    <Page
      header={Header}
      // breadcrumb={PageBreadcrumb}
      sidebar={Sidebar}
      isManagedSidebar
      isTertiaryNavWidthLimited
      isTertiaryNavGrouped
      mainContainerId={currentPage}
    >
      {children}
    </Page>
  )
}

export default PageLayout