import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ViewPaste() {
  const { id } = useParams();
  console.log(id);

  const allPastes = useSelector((state) => state.paste.pastes);

  const paste = allPastes.find((paste) => paste._id == id);
  console.log(paste);

  return (
    <div>
      <div className="flex flex-col gap-1 mt-5">
        <input
          className="p-1 pl-3 rounded-xl m-2 w-[600px] "
          type="text"
          placeholder="Enter title"
          value={paste.title}
          disabled
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        {/* <div className="font-bold">{paste.title}</div> */}
        {/* <div>{paste.content}</div> */}
      </div>
      <div className="">
        <textarea
          className="mt-4 pl-3 pt-3 rounded-xl min-w-[600px]"
          value={paste.content}
          placeholder=" Enter content here"
          disabled
          onChange={(e) => {
            setValue(e.target.value);
          }}
          rows={20}
        />
      </div>
    </div>
  );
}

export default ViewPaste;
