import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {

    const { data: session } = useSession();
    const { data } = useSession();
    const { accessToken }: any = data ?? {};
    
    console.log(session);

    if (session) {
        return (
            <>
                {session.user && accessToken ?

                    <>
                        <p>Signed in as {session.user.name}</p><br />
                        <p>Token: {accessToken}</p><br />
                        <button className="bg-red-500 w-64" onClick={() => signOut()}>Sign out</button>
                    </>

                    :
                    null

                }
            </>
        )
    }
    return (
        <>
            Not signed in <br />
            <button className="bg-blue-500 w-64" onClick={() => signIn()}>Sign in</button>
        </>
    )
}