import * as React from "react";
import { motion } from "framer-motion";
import { MobileMenuItem } from "./MobileMenuItem";
import {
  createStyles, ITheme, makeStyles
} from "@chainsafe/common-theme";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export interface NavLink {
  id?: number;
  name: string;
  linkUrl: string;
}

const navlinks: NavLink[] = [
  {
    id: 1,
    name: "Docs",
    linkUrl: "https://web3js.readthedocs.io/en/v1.5.2/"
  },
  {
    id: 2,
    name: "Maintainers",
    linkUrl: "https://web3js.readthedocs.io/en/v1.5.2/"
  },
  {
    id: 3,
    name: "Join Discord",
    linkUrl: "https://discord.com/invite/xSAwrnCWcg"
  },
  {
    id: 4,
    name: "Updates",
    linkUrl: "https://medium.com/chainsafe-systems"
  },
]



const useStyles = makeStyles(({ palette, constants, breakpoints }: ITheme) => {
  return createStyles({
    navMenu: {
      top: "100px",
      position: "absolute",
      right: "0",
      padding: "25px",
      maxWidth: "80%",
    },
  })
})

export const MobileMenu = () => {
  const classes = useStyles();
  return ( 
  <motion.ul 
    variants={variants}
    className={classes.navMenu}
  >
    {navlinks.map(i => (
      <MobileMenuItem name={i.name} linkUrl={i.linkUrl} key={i.id} />
    ))}
  </motion.ul>
)};
