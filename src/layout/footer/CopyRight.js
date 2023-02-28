import Link from "next/link";

const CopyRight = () => {

    return (
        <p>

            © {new Date().getFullYear()}. <Link href="/">OZ Gradac</Link> Sva prava zadrzana.

        </p>
    )

}
export default CopyRight;