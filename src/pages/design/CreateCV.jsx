import React, { useState } from "react";
import TopNav from "@/components/navs/TopNav";
import SideNavCreateCV from "@/components/navs/SideNavCreateCV";
import { Phone, Mail, Locate } from "lucide-react";
import defaultAvatar from "@/assets/images/default_avatar.jpg";

const CreateCV = () => {
  const [resume, setResume] = useState({
    name: "Maung Maung",
    role: "The role you are applying for?",
    email: "mgmg@gmail.com",
    phone: "0912345678",
    location: "Yangon",
  });

  const handleInput = (e) => {
    setResume({ ...resume, [e.target.id]: e.target.value });
  };

  return (
    <main>
      <TopNav />
      <SideNavCreateCV />
      <section className='flex justify-center'>
        <div
          className='bg-white border-2 border-#dddddd pl-12 pt-12'
          style={{
            width: "210mm", // A4 width
            height: "297mm", // A4 height
          }}
        >
          <div className='grid grid-cols-4'>
            <div className='col-span-3'>
              <div
                contentEditable={true}
                onInput={handleInput}
                value={resume.name}
                className='text-3xl font-bold'
              >
                {resume.name}
              </div>
              <p
                id='role'
                contentEditable={true}
                onInput={handleInput}
                value={resume.role}
              >
                {resume.role}
              </p>
              <div className='flex flex-row gap-3 mt-2'>
                <div className='flex items-center gap-2'>
                  <Mail size={14} />
                  <p
                    id='email'
                    className='text-xs'
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    onInput={handleInput}
                  >
                    {resume.email}
                  </p>
                </div>
                <div className='flex items-center gap-2'>
                  <Phone size={14} />
                  <p
                    id='phone'
                    className='text-xs'
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    onInput={handleInput}
                  >
                    {resume.phone}
                  </p>
                </div>
                <div className='flex items-center gap-2'>
                  <Locate size={14} />
                  <p
                    id='location'
                    className='text-xs'
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    onInput={handleInput}
                  >
                    {resume.location}
                  </p>
                </div>
              </div>
            </div>
            <img
              src={defaultAvatar}
              alt='Default Avatar'
              className='rounded-full w-24 h-24'
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default CreateCV;
