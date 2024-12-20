import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromPastes, updateToPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function Paste() {
  const [searchItem, setSearchItem] = useState("");
  const allPastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();

  const filteredData = allPastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  function handleEdit() {}

  function handleCopy(paste) {
    navigator.clipboard
      .writeText(paste.content)
      .then(() => {
        toast.success("Content copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  }

  function handleShare() {}

  return (
    // <div>
    //   {allPastes.map((paste) => (
    //     <div className="mt-8 flex flex-row space-x-3 ">
    //       <div className="w-48">
    //         <ul>
    //           <li>{paste.title}</li>
    //           <li>{paste.content}</li>
    //         </ul>
    //       </div>

    //       <div>
    //         <button className="ml-3" onClick={handleClickEdit}>Edit</button>
    //         <button className="ml-3">Delete</button>
    //       </div>
    //     </div>
    //   ))}
    // </div>

    <div>
      <input
        className="p-2 rounded-xl mt-8 min-w-[600px]"
        type="text"
        placeholder="search here"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />

      <div className="flex flex-col gap-5 mt-5 max-h-80 overflow-y-scroll scrollbar-thin">
        {filteredData.length > 0 &&
          filteredData.map((paste) => (
            <div className="border p-6 rounded">
              <div className="font-bold">{paste.title}</div>
              <div>{paste.content}</div>
              <div className="flex flex-row mt-3 place-content-evenly gap-2">
                <button onClick={handleEdit} className="text-yellow-500">
                  <Link to={`/?pasteId=${paste?._id}`}>Edit</Link>
                </button>
                <button className="">
                  <Link to={`/pastes/${paste?._id}`}>View</Link>
                </button>
                <button onClick={() => handleCopy(paste)} className="">
                  copy
                </button>
                <button onClick={handleShare} className="">
                  share
                </button>
                <button
                  onClick={() => handleDelete(paste?._id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Paste;
