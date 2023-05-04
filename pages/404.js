import Link from "next/link";


export default function Page404(){
    return(
        <div>
            <h1>Você se perdeu e caiu em uma página 404 :0</h1>
            <Link href="/faq">ir para FAQ</Link>
        </div>
    )
}