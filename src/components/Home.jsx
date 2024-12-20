import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

function Home() {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      setTitle(paste.title);
      setValue(paste.content);
      console.log(paste);
    }
    console.log("useeff");

    //cleanup
    // return ()=>{ setTitle("");
    //   setValue("");}
  }, [pasteId]);

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      //update
      console.log("update");
      dispatch(updateToPastes(paste));
    } else {
      //create
      if(title!="" && value!="")
      dispatch(addToPastes(paste));
      else{
        toast("Please enter title and content.",{
          position:"top-right"
      
        })
      }
     
    }

    //after creation or updation
    setTitle("");
    setValue("");
    setSearchParams({});
  }

  return (
    <div>
      <div className="flex flex-row gap-4 mt-5">
        <input
          className="p-2 pl-3 rounded-xl m-2 w-[58%]"
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <div>
          <button className="m-2" onClick={createPaste}>
            {pasteId ? "Update My Paste" : "Create My Paste"}
          </button>
        </div>
      </div>

      <div className="">
        <textarea
          className="mt-4 pl-3 pt-3 rounded-xl min-w-[600px]"
          value={value}
          placeholder=" Enter content here"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          rows={20}
        />
      </div>
    </div>
  );
}

export default Home;
