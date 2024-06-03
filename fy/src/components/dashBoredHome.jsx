import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import UpcomingEvents from './upcoming';
import { Patients } from './patientsData'; // Import the Patients data
import EditAppointmentEdit from './editAppointement';

export default function DashBoredHome() {
    const [progress, setProgress] = useState(13);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPatients, setFilteredPatients] = useState(Patients);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setProgress(16), 500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Filter patients based on search term
        const filtered = Patients.filter(patient =>
            patient.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPatients(filtered);
    }, [searchTerm]);

    const handleSelectPatient = (patient) => {
        setSelectedPatient(patient);
        setIsDialogOpen(true);
    };

    const handleSave = (updatedAppointment) => {
        const updatedPatients = Patients.map(patient =>
            patient.id === updatedAppointment.id ? updatedAppointment : patient
        );
        console.log('Updated Patients:', updatedPatients);
        setSelectedPatient(null);
        setIsDialogOpen(false);
    };

    return (
        <div className='my-2'>
            <div className='flex flex-wrap p-4 gap-4'>
                <div className='flex items-center gap-4 flex-wrap'>
                    <div className='w-[150px] border-blue-400 border-2 shadow-md p-2 rounded'>
                        <h4 className='text-blue-400 font-light'>Number of Patients</h4>
                        <h1 className='font-bold'>47</h1>
                    </div>
                    <div className='w-[180px] border-blue-400 border-2 shadow-md p-2 rounded'>
                        <h4 className='text-blue-400 font-light'>Patients Assigned Tasks</h4>
                        <h1 className='font-bold'>7</h1>
                    </div>
                </div>
                <div className='p-2 justify-end flex-1 mb:'>
                    <UpcomingEvents />
                </div>
            </div>
            <div className="flex items-center justify-between mb-4 flex-wrap">
                <div className='flex mt-[25px] space-x-2'>
                    <h3 className='items-center pt-2'>Search patient: </h3>
                    <input
                        type="text"
                        placeholder="Search patient..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-1 bg-blue-100 max-w-full md:w-[600px]"
                    />
                </div>
            </div>
            <div className='flex items-center mb-4 ml-8'>
                <Icon className="text-cyan-500 text-4xl" icon="ci:main-component" />
                <h3 className='text-blue-600 ml-2 font-semibold text-lg'>Progress View of Patients</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {filteredPatients.map((item, index) => (
                    <Card key={index} className="w-full p-4 bg-white shadow-md rounded-lg">
                        <CardHeader>
                            <CardTitle>
                                <div className='flex space-x-2'>
                                    <h5 className='text-gray-400 font-light'>Name: </h5>
                                    <h3>{item.name}</h3>
                                </div>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className='flex space-x-2'>
                                <h5 className='text-gray-400 font-light'>Task Type: </h5>
                                <h3>{item.taskType1}</h3>
                            </div>
                            <div className='flex space-x-2'>
                                <h5 className='text-gray-400 font-light'>Task Type: </h5>
                                <h3>{item.taskType2}</h3>
                            </div>
                            <div>
                                <Progress value={item.progress} />
                            </div>
                            <div className='flex space-x-2'>
                                <h5 className='text-gray-400 font-light'>Time: </h5>
                                <h3>{item.start}</h3>
                                <button onClick={() => handleSelectPatient(item)}>
                                    <Icon className='text-2xl hover:text-blue-400' icon="uil:edit" />
                                </button>
                            </div>
                        </CardContent>
                        <CardFooter className='flex justify-end'>
                            <button className='bg-blue-500 text-white font-medium rounded-md shadow-sm hover:bg-blue-400 p-2'>
                                Send text
                            </button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <div className='flex items-center mb-4 ml-8 mt-8'>
                <Icon className="text-cyan-500 text-4xl" icon="ci:main-component" />
                <h3 className='text-blue-600 ml-2 font-semibold text-lg'>Feedback of Patients</h3>
            </div>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Patients.slice(0, 4).map((item, index) => (
                        <Card key={index} className="w-full bg-blue-200 p-4">
                            <CardHeader>
                                <CardTitle>{item.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>{item.content}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="flex justify-end my-4">
                    <button className="text-blue-500 hover:underline flex items-center space-x-1">
                        <span>See More</span>
                        <Icon className='text-xl' icon="ep:right" />
                    </button>
                </div>
            </div>
            {selectedPatient && (
                <EditAppointmentEdit
                    patient={selectedPatient}
                    onSave={handleSave}
                    isOpen={isDialogOpen}
                    onClose={() => setIsDialogOpen(false)}
                />
            )}
        </div>
    );
}
