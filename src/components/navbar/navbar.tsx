import React, { FunctionComponent } from "react";
import { Flex, Text, Image } from "@chakra-ui/core";
import { Link } from "gatsby";

import { NavItem } from "./navitem";
import hackSocLogo from "../../assets/images/hackSocLogo.png";

const routes = [
  {
    id: "home",
    text: "Home",
  },
  {
    id: "about",
    text: "About",
  },
  {
    id: "sponsors",
    text: "Sponsors",
  },
  {
    id: "team",
    text: "Team",
  },
  {
    id: "contact",
    text: "Contact",
  },
];

export const NavBar: FunctionComponent<{ location: string }> = ({
  location,
}) => (
  <Flex
    as="nav"
    align="center"
    p={[2, 2, 4, 4]}
    w="100vw"
    position="fixed"
    top={0}
    backgroundColor="secondary"
    opacity={0.8}
    zIndex={1}
  >
    <Flex flex={1}>
      <Link to="">
        <Image
          src={hackSocLogo}
          w={[10, 12, 16, 16]}
          h={[10, 12, 16, 16]}
          mx={[5, 5, 20, 20]}
        />
      </Link>
    </Flex>
    <Flex>
      {routes.map(({ id, text }) => (
        <NavItem
          key={id}
          id={id}
          text={text}
          locationHash={location.hash}
        ></NavItem>
      ))}
    </Flex>
  </Flex>
);
