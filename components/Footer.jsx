import Link from "next/link";

const Footer = () => {
    return (
        <footer className="flex justify-between">
            <div>
                <h1 className="text-md font-extrabold text-gray-700">Kubwayo Fitness</h1>
                <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()}. All Rights Reserved.</p>
            </div>
            <Link href="#">Terms & Conditions</Link>
        </footer>
     )
}


export default Footer;