import React, { useState } from 'react';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from '@material-tailwind/react';

export default function Dropdown({ label, items }) {
  const [selectedItem, setSelectedItem] = useState('');

  const handleSelect = (item) => {
    setSelectedItem(item); 
    console.log(item);
  };

  return (
    <div className="flex justify-center border-[1px] px-1 lg:px-4 py-1 rounded-2xl relative bg-black w-[130px] sm:w-[200px] md:w-[250px] lg:w-[150px]">
      <Menu>
        <MenuHandler>
          <Button className="text-xl">{selectedItem || label}</Button>
        </MenuHandler>
        <MenuList className="text-xl bg-black text-white border-[1px] px-1 py-2 w-[130px] sm:w-[200px] md:w-[250px] lg:w-[150px] mt-1 rounded-2xl">
          {items.map((item, index) => (
            <MenuItem
              key={index}
              className="text-left mt-2 hover:bg-transparent hover:text-white"
              onClick={() => handleSelect(item)}
            >
              {item}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
}
