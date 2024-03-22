import Chat from "@/components/home/chat"
import Landing from "@/components/home/landing"
import { authOptions } from "@/lib/authOptions"
import { getServerSession } from "next-auth"
async function chat(){
    const session = await getServerSession(authOptions)
    console.log(session)
    return(
        session !== null ? (
        <Chat/>
        ) : (
            <Landing/>
        )
    )
}

export default chat