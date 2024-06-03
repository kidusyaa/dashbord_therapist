import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { userProfile } from './patientsData';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
const AccountManagement = () => {
    const [profile, setProfile] = useState(userProfile);
    const [isEditing, setIsEditing] = useState(false);
    const [isChangingPassword, setIsChangingPassword] = useState(false);
    const [password, setPassword] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    const handleProfileChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handlePasswordChange = (e) => {
        setPassword({ ...password, [e.target.name]: e.target.value });
    };

    const handleProfileSubmit = (e) => {
        e.preventDefault();
        // Update profile API call
        console.log('Profile updated:', profile);
        setIsEditing(false);
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        // Change password API call
        console.log('Password changed:', password);
        setIsChangingPassword(false);
    };

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfile({ ...profile, profilePicture: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4 bg-blue-200">Account Management</h2>

            <div className='flex flex-col md:flex-row md:space-x-4'>
                {isEditing ? (
                    <div className="mb-8 border-blue-300 max-w-lg w-full">
                        <h3 className="text-xl font-semibold mb-2">Update Profile</h3>
                        <form onSubmit={handleProfileSubmit} className="space-y-4">
                            <div className="flex flex-col items-center mb-4">
                                <img
                                    src={profile.profilePicture}
                                    alt="Profile"
                                    className="w-32 h-32 rounded-full mb-2"
                                />
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleProfilePictureChange}
                                    className="border border-gray-300 p-2 rounded-md"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-1 font-medium">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={profile.name}
                                    onChange={handleProfileChange}
                                    className="border border-gray-300 p-2 rounded-md"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-1 font-medium">Bio</label>
                                <textarea
                                    name="bio"
                                    value={profile.bio}
                                    onChange={handleProfileChange}
                                    className="border border-gray-300 p-2 rounded-md"
                                ></textarea>
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-1 font-medium">Credentials</label>
                                <input
                                    type="text"
                                    name="credentials"
                                    value={profile.credentials}
                                    onChange={handleProfileChange}
                                    className="border border-gray-300 p-2 rounded-md"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-1 font-medium">Specialties</label>
                                <input
                                    type="text"
                                    name="specialties"
                                    value={profile.specialties}
                                    onChange={handleProfileChange}
                                    className="border border-gray-300 p-2 rounded-md"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-1 font-medium">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={profile.email}
                                    onChange={handleProfileChange}
                                    className="border border-gray-300 p-2 rounded-md"
                                />
                            </div>
                            <button
                                type="submit"
                                className=" border-blue-400 border-2 p-2 rounded-md hover:bg-blue-200 shadow-md"
                            >
                                Update Profile
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className="mb-8 border-blue-300 max-w-lg w-full border-2 p-4 shadow-md rounded-md">
                        <h3 className="text-xl font-semibold mb-2">Profile Information</h3>
                        <div className="flex justify-center mb-4">
                            <img
                                src={profile.profilePicture}
                                alt="Profile"
                                className="w-32 h-32 rounded-full mb-2"
                            />
                        </div>
                        <div className='space-y-2'>
                            <p><strong className='text-blue-400 text-lg'>Name:</strong> {profile.name}</p>
                            <p><strong className='text-blue-400 text-lg'>Bio:</strong> {profile.bio}</p>
                            <p><strong className='text-blue-400 text-lg'>Credentials:</strong> {profile.credentials}</p>
                            <p><strong className='text-blue-400 text-lg'>Specialties:</strong> {profile.specialties}</p>
                            <p><strong className='text-blue-400 text-lg'>Email:</strong> {profile.email}</p>
                        </div>
                        <button
                            onClick={() => setIsEditing(!isEditing)}
                            className=" text-blue-400 p-2 rounded-md hover:bg-blue-500 mb-4 hover:text-white justify-end mt-1">
                            <Icon className="text-2xl" icon="uil:edit" /> Edit
                        </button>
                    </div>
                )}
                <div className='w-full'>
                    <button
                        onClick={() => setIsChangingPassword(!isChangingPassword)}
                        className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-400 mb-4 w-full md:w-[200px]"
                    >
                        Change Password
                    </button>

                    {isChangingPassword && (
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-2">Change Password</h3>
                            <form onSubmit={handlePasswordSubmit} className="space-y-4">
                                <div className="flex flex-col">
                                    <label className="mb-1 font-medium">Current Password</label>
                                    <input
                                        type="password"
                                        name="currentPassword"
                                        value={password.currentPassword}
                                        onChange={handlePasswordChange}
                                        className="border border-gray-300 p-2 rounded-md"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="mb-1 font-medium">New Password</label>
                                    <input
                                        type="password"
                                        name="newPassword"
                                        value={password.newPassword}
                                        onChange={handlePasswordChange}
                                        className="border border-gray-300 p-2 rounded-md"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="mb-1 font-medium">Confirm New Password</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={password.confirmPassword}
                                        onChange={handlePasswordChange}
                                        className="border border-gray-300 p-2 rounded-md"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-400 w-full"
                                >
                                    Change Password
                                </button>
                            </form>
                        </div>
                    )}

                    <div className="mb-8">
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <button className="bg-red-500 text-white p-2 rounded-sm w-full md:w-[200px]">Delete Account</button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Are you sure you want to delete your account?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will permanently delete your
                                        account and remove your data from our servers.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction>Delete</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountManagement;
