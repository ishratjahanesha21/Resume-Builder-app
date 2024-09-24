/* eslint-disable no-unused-vars */
import { UserButton, useUser } from "@clerk/clerk-react"
import { Button } from "../ui/button"
import { Link } from "react-router-dom";

const Header = () => {
    const { user, isSignedIn } = useUser();
    return (
        <div className="p-5 px-3 flex justify-between shadow-md">
            <img src="/logo.svg" width={100} height={100} alt="logo" />
            {
                isSignedIn ? <div className="flex gap-2 items-center">
                    <Link to={'/dashboard'}>
                    <Button variant='outline'>Dashboard</Button>
                    </Link>
                    <UserButton />
                </div> : <Link tp={'/auth/sign-in'}>
                <Button>Get Start</Button>
                </Link>
            }

        </div>
    )
}

export default Header