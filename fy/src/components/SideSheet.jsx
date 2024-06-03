import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import TabsDemo from './MassageView';
import DashBoredHome from './dashBoredHome';
import SchedulePart from './schedulePart';
import AccountManagement from './accoutMangement';
function Sidesheet() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeButton, setActiveButton] = useState(null);

    const handleSidebarMouseEnter = () => {
        setIsOpen(true);
    };

    const handleSidebarMouseLeave = () => {
        setIsOpen(false);
    };

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName === activeButton ? null : buttonName);
    };

    return (
        <div className="flex flex-col lg:flex-row">
            <div
                className="h-screen w-16 lg:w-16 flex flex-col items-center bg-gradient-to-b from-cyan-50 to-cyan-200 cursor-pointer fixed"
                onMouseEnter={handleSidebarMouseEnter}
                onMouseLeave={handleSidebarMouseLeave}
            >
                <div className="mt-5 text-center">
                    <h2 className="text-sm font-medium">Welcome</h2>
                </div>
                <div className={`my-5 ${activeButton === 'patient' ? 'rounded' : ''}`}>
                    <button className="focus:outline-none" onClick={() => handleButtonClick('patient')}>
                        <Icon icon="fluent:patient-32-filled" className={`text-3xl ${activeButton === 'patient' ? 'text-cyan-600' : ''}`} />
                    </button>
                </div>
                <div className={`my-5 ${activeButton === 'chat' ? 'rounded' : ''}`}>
                    <button className="focus:outline-none" onClick={() => handleButtonClick('chat')}>
                        <Icon icon="majesticons:chat-line" className={`text-3xl ${activeButton === 'chat' ? 'text-cyan-600' : ''}`} />
                    </button>
                </div>
                <div className={`my-5 ${activeButton === 'schedule' ? 'rounded' : ''}`}>
                    <button className="focus:outline-none" onClick={() => handleButtonClick('schedule')}>
                        <Icon icon="akar-icons:schedule" className={`text-3xl ${activeButton === 'schedule' ? 'text-cyan-600' : ''}`} />
                    </button>
                </div>
            </div>
            {isOpen && (
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetContent className="bg-gradient-to-b from-cyan-50 to-cyan-200 h-screen">
                        <SheetHeader>
                            <SheetTitle>Welcome</SheetTitle>
                        </SheetHeader>

                        <SheetClose className='w-full'>
                            <button className={`flex items-center w-full px-4 py-2 rounded-md mt-5 mb-5 ${activeButton === 'patient' ? 'bg-white border-blue-500' : ''}`} onClick={() => handleButtonClick('patient')}>
                                <div className="flex items-center mr-4 gap-2">
                                    <h3 className='text-3xl font-medium'><Icon icon="fluent:patient-32-filled" /></h3>
                                    <h3 className='text-3xl font-medium'>Patient</h3>
                                </div>
                            </button>
                        </SheetClose>
                        <SheetClose className='w-full'>
                            <button className={`flex items-center w-full px-4 py-2 rounded-md mb-5 ${activeButton === 'chat' ? 'bg-white border-blue-500' : ''}`} onClick={() => handleButtonClick('chat')}>
                                <div className="flex items-center mr-4 gap-2">
                                    <h3 className='text-3xl font-medium'><Icon icon="majesticons:chat-line" /></h3>
                                    <h3 className='text-3xl font-medium'>Chat</h3>
                                </div>
                            </button>
                        </SheetClose>
                        <SheetClose className='w-full'>
                            <button className={`flex items-center w-full px-4 py-2 rounded-md mt-5 mb-5 ${activeButton === 'schedule' ? 'bg-white border-blue-500' : ''}`} onClick={() => handleButtonClick('schedule')}>
                                <div className="flex items-center mr-4 gap-2">
                                    <h3 className='text-3xl font-medium'><Icon icon="akar-icons:schedule" /></h3>
                                    <h3 className='text-3xl font-medium'>Schedule</h3>
                                </div>
                            </button>
                        </SheetClose>

                        <SheetFooter>
                            <SheetClose asChild>
                            <button className={`item-center absolute inset-x-36 bottom-0 ${activeButton === 'setting' ? 'bg-white border-blue-500' : ''}`} onClick={() => handleButtonClick('setting')}>
                                <div className="mr-4 gap-2 item-center text-center">
                                    <h3 className='text-2xl font-medium items-center px-6 text-center'><Icon icon="ant-design:setting-filled" /></h3>
                                    <h3 className='text-1xl font-medium'>Setting</h3>
                                </div>
                            </button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            )}
            <div className="flex-1 ml-16 lg:ml-20 mt-16 lg:mt-0 p-4">
                {activeButton === 'chat' && (
                    <div className="h-screen w-full">
                        <TabsDemo />
                    </div>
                )}
                {activeButton === 'patient' && (
                    <div className="h-screen w-full">
                        <DashBoredHome />
                    </div>
                )}
                {activeButton === 'schedule' && (
                    <div className="h-screen w-full">
                        <SchedulePart />
                    </div>
                )}
                {activeButton === 'setting' && (
                    <div className="h-screen w-full">
                       <AccountManagement/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Sidesheet;
