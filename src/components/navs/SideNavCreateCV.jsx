import React from "react";
import { SquarePen, ArrowDownUp, LayoutTemplate, Download } from "lucide-react";

const SideNavCreateCV = () => {
  return (
    <main className='fixed left-6 bg-white w-46 h-56 shadow-md'>
      <section className="grid grid-rows-4 max-w-full">
        <ListItem title='Add Section' icon={SquarePen} />
        <ListItem title='Rearrange' icon={ArrowDownUp} />
        <ListItem title='Templates' icon={LayoutTemplate} />
        <ListItem title='Download' icon={Download} />
      </section>
    </main>
  );
};

const ListItem = ({ title, icon: Icon }) => {
  return (
    <div className='grid grid-cols-4 py-3.5'>
      <Icon size={20} className='col-span-1 text-gray-600 ml-3' />
      <p className='col-span-3'>{title}</p>
    </div>
  );
};

export default SideNavCreateCV;
