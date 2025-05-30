import React from "react";
import TopNav from "@/components/navs/TopNav";

const CreateCV = () => {
  return (
    <div>
      <TopNav />

      <main className='flex justify-center mt-8'>
        <div
          className='bg-white border-2 border-#dddddd'
          style={{
            width: "210mm", // A4 width
            height: "297mm", // A4 height
          }}
        >
        </div>
      </main>
    </div>
  );
};

export default CreateCV;
