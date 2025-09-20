import Header from "@/components/layout/Header";
import { UserProps, UserData } from "@/interfaces";
import UserCard from "@/components/common/UserCard";
import { useState } from "react";
import UserModal from "@/components/common/UserModal";

interface UsersPageProps {
    posts: UserProps[];
}
const Users: React.FC<UsersPageProps> = ({ posts }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [user, setUser] = useState<UserData | null>(null);
    
        const handelAddUser = (newUser: UserData) => {
            setUser({...newUser, id: posts.length + 1})
        };
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="p-4">
                <div className="flex justify-between">
                    <h1 className="text-2xl font-semibold">Users Page</h1>
                    <button onClick={()=>setModalOpen(true)} 
                        className="rounded-full bg-blue-700 text-white px-4 py-2">Add User</button>
                </div>
                
                <div className="grid grid-cols-3 gap-2 ">
                    {
                        user && (
                            <UserCard id={user.id} name={user.name} username={user.username} email={user.email} address={user.address} phone={user.phone} website={user.website} company={user.company} />
                        )
                    }
                    {
                        posts.map(({ id, name, username, email, address, phone, website, company }: UserProps, key: number) => (
                            <UserCard id={id} name={name} username={username} email={email} address={address} phone={phone} website={website} company={company} key={key} />
                        ))
                    }
                </div>

                {isModalOpen && (
                    <UserModal onClose={()=>setModalOpen(false)} onSubmit={handelAddUser}/>
                )}
            </main>

        </div>
    )
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const posts = await response.json()

    return {
        props: {
            posts
        }
    }
}

export default Users;