import * as React from 'react';
import { useState } from 'react';
import {
    Collapse,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { MenuItem } from 'src/components/ui/menu/MenuList';
import Link from 'next/link';

/**
 * 메뉴 컴포넌트
 * @param {number} id
 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | undefined | null} icon
 * @param {string} title
 * @param {MenuItem[] | undefined} subMenu
 * @returns {React.JSX.Element}
 * @author yhju@coopnc.com
 * @since 2023.10.20
 */
const MenuListItem = ({ id, icon, title, subMenu }: MenuItem) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText className="lnbTitle" primary={title} />
        {open ? (
          <ExpandLess fontSize="large" />
        ) : (
          <ExpandMore fontSize="large" />
        )}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" className="lnbItem" disablePadding>
          {subMenu?.length &&
            subMenu.map((menu) => {
              return (
                <Link key={`${id}-${menu.id}`} href={menu.link || '#'}>
                  <ListItemButton sx={{ pl: 9, py: 0 }}>
                    <ListItemText>{menu.title}</ListItemText>
                  </ListItemButton>
                </Link>
              );
            })}
        </List>
      </Collapse>
    </>
  );
};
export default MenuListItem;
