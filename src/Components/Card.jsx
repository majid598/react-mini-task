import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"


const page = ({ data, reference }) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className="relative w-60 h-72 text-white overflow-hidden rounded-[45px] px-8 py-10 bg-zinc-900/90">
      <FaRegFileAlt />
      <p className="text-sm font-semibold mt-5 leading-tight">{data.desc}</p>
      <div className="footer absolute bottom-0 left-0 w-full">
        <div className="flex items-center py-3 px-8 mb-3 justify-between">
          <h4>{data.filesize}</h4>
          <span className="w-7 h-7 rounded-full cursor-pointer flex items-center justify-center bg-zinc-600">
            {data.close ? (
              <IoCloseSharp />
            ) : (
              <LuDownload className="text-white font-bold" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full py-4 ${data.tag.tagcolor === 'red' ? 'bg-red-600' : 'bg-green-600'} flex items-center justify-center`}>
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default page;
