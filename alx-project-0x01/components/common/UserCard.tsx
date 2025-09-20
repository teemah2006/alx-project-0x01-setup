import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, username, email, address, phone, website, company }) => {
    return (
        <div className="max-w-xl  my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">{name} ({username})</h2>
        </div>
        <p className="text-gray-600 mb-2"><strong>Email:</strong> {email}</p>
        <p className="text-gray-600 mb-2"><strong>Phone:</strong> {phone}</p>
        <p className="text-gray-600 mb-2"><strong>Website:</strong> {website}</p>
        <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Address</h3> 
            <p className="text-gray-600">{address.suite}, {address.street}, {address.city}, {address.zipcode}</p>
        </div>
        <div className="mt-4"> 
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Company</h3>
            <p className="text-gray-600"><strong>Name:</strong> {company.name}</p>
            <p className="text-gray-600"><strong>Catch Phrase:</strong> {company.catchPhrase}</p>  
            <p className="text-gray-600"><strong>BS:</strong> {company.bs}</p>
        </div>
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
            <span>User ID: {id}</span>
        </div>
        </div>
    )
}

export default UserCard;