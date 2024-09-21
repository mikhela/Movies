import React from 'react'

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
export default function Dropdown(props) {
  return (
    <div>
  <Menu>
      <MenuHandler>
        <Button className='text-xl'>Menu</Button>
      </MenuHandler>
      <MenuList className='text-xl bg-transparent text-white'>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
      </MenuList>
    </Menu>
    </div>
  )
}
