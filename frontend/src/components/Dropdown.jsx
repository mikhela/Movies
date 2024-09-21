import React from 'react';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from '@material-tailwind/react';

export default function Dropdown({ label, items }) {
  return (
    <div className="flex justify-center   border-[1px] px-1 lg:px-4 py-1 rounded-2xl">
      <div className="">
        <Menu>
         <MenuHandler>
            <Button className="text-xl">{label}</Button>
          </MenuHandler>
          <MenuList className="text-xl bg-transparent text-white bg-black border-[1px] px-1 py-2">
            {items.map((item, index) => (
              <MenuItem
                className="text-left mt-2 w-[100px] md:w-[150px] hover:bg-transparent hover:text-white"
                key={index}
              >
                {item}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </div>
    </div>
  );
}
