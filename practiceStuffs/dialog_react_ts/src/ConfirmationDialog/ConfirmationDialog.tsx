import { Dialog, Transition } from "@headlessui/react";
import React, { useState } from "react";
import { Fragment } from "react";
import { ExclamationIcon, XIcon } from "@heroicons/react/outline";

interface Props {
  okText?: string;
  cancelText?: string;
  description?: string;
  title?: string;
  text?: string;
}

const ConfirmationDialog: React.FC<Props> = ({
  okText,
  cancelText,
  description,
  title,
  text
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log("is menu open given by react is ", isMenuOpen);
  return (
    <>
      <div className="z-0 ">
        <p
          onClick={() => setIsMenuOpen((open) => !open)}
          className="m-auto my-24 text-center text-blue-600 hover:underline hover:text-blue-900 "
        >
          {text}
        </p>
      </div>
      <Transition.Root show={isMenuOpen} as={Fragment}>
          
      <Dialog open={isMenuOpen} onClose={setIsMenuOpen}>
        <Transition.Child
        as={Fragment}
        enter="transition-transform duration-300"
        enterFrom="-translate-y-full "
        enterTo="translate-y-0 "
        leave="transition-transform duration-300"
        leaveFrom="translate-y-0"
        leaveTo="-translate-y-full ">
          
          <div className="fixed z-20 p-5 text-white transform bg-indigo-600 rounded-lg shadow-lg top-24 left-1/3 w-96">
          <button className="absolute top-0 right-0 float-right " onClick={()=>setIsMenuOpen(false)}><div ><XIcon className="text-center hover:text-red-400 w-7 h-7"></XIcon></div></button>
          <ExclamationIcon className="flex justify-center w-24 h-24 m-auto text-red-600 " ></ExclamationIcon>
            <h2 className="text-2xl font-medium text-center mt-7">{title}</h2>
            <div className="p-4">
              {description && (
                <p className="mb-4 text-sm font-normal text-center">{description}</p>
              )}
            </div>
            <div className="flex justify-center">
              <button className="w-20 h-10 mr-4 bg-gray-500 rounded-lg shadow-md hover:bg-gray-800">{okText}</button>
              <button className="w-20 h-10 bg-red-400 rounded-lg shadow-md hover:bg-red-600">{cancelText}</button>
            </div>
          </div>
          
        </Transition.Child>
        <Transition.Child
         as={Fragment}
         enter="ease-out duration-300"
         enterFrom="opacity-0"
         enterTo="opacity-50"
         entered="opacity-50"
         leave="ease-in duration-200"
         leaveFrom="opacity-50"
         leaveTo="opacity-0"
        >
            <Dialog.Overlay  className="fixed inset-0 z-0 bg-black"></Dialog.Overlay>
        </Transition.Child>

        </Dialog>
        
      </Transition.Root>
    </>
  );
};

ConfirmationDialog.defaultProps = {
  okText: "Ok",
  cancelText: "Cancel",
};

export default React.memo(ConfirmationDialog);
