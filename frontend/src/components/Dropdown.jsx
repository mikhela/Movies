import React from 'react';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from '@material-tailwind/react';

export default function Dropdown({ label, items, onSelect }) {
  return (
    <div className="flex justify-center border-[1px] px-1 lg:px-4 py-1 rounded-2xl relative bg-black w-[130px] sm:w-[200px] md:w-[250px] lg:w-[150px]">
      <Menu>
        <MenuHandler>
          <Button className="text-xl">{label}</Button>
        </MenuHandler>
        <MenuList className="text-xl bg-transparent text-white bg-black border-[1px] px-1 py-2 w-[130px] sm:w-[200px] md:w-[250px] lg:w-[150px] mt-1 rounded-2xl">
          {items.map((item, index) => (
            <MenuItem
              className="text-left mt-2 hover:bg-transparent hover:text-white"
              key={index}
              onClick={() => onSelect(item)} // Call onSelect with the clicked item
            >
              {item}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
}
