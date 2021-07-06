import { Dialog, Transition } from "@headlessui/react";
import React, { useState } from "react";
import { Fragment } from "react";
import { ExclamationIcon } from "@heroicons/react/outline";

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
      <div className="z-0 bg-blue-300">
        <p
          onClick={() => setIsMenuOpen((open) => !open)}
          className="text-blue-600 hover:underline hover:text-blue-900 "
        >
          {text}
        </p>
      </div>
      <Transition.Root show={isMenuOpen} as={Fragment}>
          
      <Dialog open={isMenuOpen} onClose={setIsMenuOpen}>
        <Transition.Child
        as={Fragment}
        enter="transition-transform duration-1000"
        enterFrom="translate "
        enterTo="translate-z-0 "
        leave="ease-in duration-200"
        leaveFrom="translate-z-0"
        leaveTo="translate-z-full ">
          
          <div className="fixed z-10 flex flex-col items-center justify-center bg-white rounded-lg m-28">
          <ExclamationIcon className="flex justify-center w-10 h-10 text-red-600 " ></ExclamationIcon>
            <h2 className="text-2xl font-medium mt-7">{title}</h2>
            <div className="p-4">
              {description && (
                <p className="mb-4 text-sm font-normal">{description}</p>
              )}
            </div>
            <div className="flex justify-center">
              <button className="h-10 p-3 bg-gray-500">{okText}</button>
              <button className="h-10 p-3 bg-red-400">{cancelText}</button>
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
