import { Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import Tab  from './Tab';

interface Props{
    children: React.ReactElement[]; // (React.Fc<TabProps>)[]
}

const TabList: React.FC<Props> = ({children}) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
  
  const tabWidth = 100 /children.length;

  children.forEach(c=>{
    if(c.type !== Tab) {
      throw "Children of Tablist should be Tab . Recieved" + c.type;
    }
  })
    return (
        <div >
      <div className="pb-1 bg-primary-100">
        <div className="relative max-w-md mx-auto ">
          <div className="flex text-xl font-bold ">
            {children.map((child, index) => (
              <div className="flex-1 px-2 py-4 text-center cursor-pointer" onClick={() =>setSelectedIndex(index)}>
                {child.props.title}
                <span className="text-xs text-golden">★</span>
              </div>
            ))}
          </div>
          <div className="absolute h-1 duration-300 ease-in-out bg-primary-400 " style={{width: tabWidth + "%", left: (tabWidth * selectedIndex) + "%" } }></div>
        </div>
      </div>
      <div className="relative bg-primary-200">
      {children.map((child, index) => (
              <Transition
              as={Fragment}
              show={index === selectedIndex}
                enter="transition-opacity duration-1000"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                entered="opacity-100"
                leave="transition-opacity duration-1000"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute left-0 right-0 px-4 py-2 bg-primary-200">{child}</div>
              </Transition>
              ))}
      
      </div>
    </div>
    );
};
    
TabList.defaultProps={};

    
export default React.memo(TabList);