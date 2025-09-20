import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
    const [user, setUser] = useState<UserData>({
        id: 1,
        name: "",
        username: "",
        email: "",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
                lat: "",
                lng: ""
            }
        },
        phone: "",
        website: "",
        company: {
            name: "",
            catchPhrase: "",
            bs: ""
        }
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const changeCompany = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, company: { ...prevUser.company, [name]: value } }));
    };

    const changeAddress = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, address: { ...prevUser.address, [name]: value } }));
    };

    const changeAddressGeo = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, address: { ...prevUser.address, geo: { ...prevUser.address.geo, [name]: value } } }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(user);
        onClose();
    };

    return (
        <div className="fixed overflow-auto inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white mt-20 rounded-lg p-8 shadow-lg w-full max-w-3xl">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
                <form onSubmit={handleSubmit}>
                    {/* Personal info */}
                    <p className="text-xl font-semibold">Personal</p>
                    <div className="grid grid-cols-2 gap-2">
                    <div className="mb-4">
                        <label htmlFor="id" className="block text-gray-700 font-medium mb-2">User ID</label>
                        <input
                            type="number"
                            id="id"
                            name="id"
                            value={user.id}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter user name"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={user.username}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter username"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={user.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter phone number"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="website" className="block text-gray-700 font-medium mb-2">Website</label>
                        <input
                            type="text"
                            id="website"
                            name="website"
                            value={user.website}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter website"
                        />
                    </div>
                    </div>
                    {/* company details */}
                    <p className="text-xl font-semibold">Company details</p>
                    <div className="grid grid-cols-2 gap-2">
                    <div className="mb-4">
                        <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company Name</label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={user.company.name}
                            onChange={changeCompany}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter company name"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="catchPhrase" className="block text-gray-700 font-medium mb-2">Catch Phrase</label>
                        <input
                            type="text"
                            id="catchPhrase"
                            name="catchPhrase"
                            value={user.company.catchPhrase}
                            onChange={changeCompany}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter catch phrase"
                        />
                    </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="bs" className="block text-gray-700 font-medium mb-2">BS</label>
                        <input
                            type="text"
                            id="bs"
                            name="bs"
                            value={user.company.bs}
                            onChange={changeCompany}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter BS"
                        />
                    </div>
                    {/* address details */}
                    <p className="text-xl font-semibold">Address details</p>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="mb-4">
                        <label htmlFor="street" className="block text-gray-700 font-medium mb-2">Street</label>
                        <input
                            type="text"
                            id="street"
                            name="street"
                            value={user.address.street}
                            onChange={changeAddress}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter street"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="suite" className="block text-gray-700 font-medium mb-2">Suite</label>
                        <input
                            type="text"
                            id="suite"
                            name="suite"
                            value={user.address.suite}
                            onChange={changeAddress}

                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter suite"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="city" className="block text-gray-700 font-medium mb-2">City</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={user.address.city}
                            onChange={changeAddress}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter city"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="zipcode" className="block text-gray-700 font-medium mb-2">Zipcode</label>
                        <input
                            type="text"
                            id="zipcode"
                            name="zipcode"
                            value={user.address.zipcode}
                            onChange={changeAddress}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter zipcode"
                        />
                    </div>
                    {/* geo details */}
                    <div className="mb-4">
                        <label htmlFor="lat" className="block text-gray-700 font-medium mb-2">Latitude</label>
                        <input
                            type="text"
                            id="lat"
                            name="lat"
                            value={user.address.geo.lat}
                            onChange={changeAddressGeo}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter latitude"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lng" className="block text-gray-700 font-medium mb-2">Longitude</label>
                        <input
                            type="text"
                            id="lng"
                            name="lng"
                            value={user.address.geo.lng}
                            onChange={changeAddressGeo}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter longitude"
                        />
                    </div>
                    </div>
                    

                    <div className="flex justify-between items-center">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                        >
                            Add User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserModal;