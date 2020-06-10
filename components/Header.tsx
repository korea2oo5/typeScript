import Link from 'next/link'

const linkStyle = {
    marginRight: 15
}

function Header() {
    return (
        <div>
            <Link href="/">
                <a style={linkStyle}>Home</a>
            </Link>
            <Link href="/user">
                <a style={linkStyle}>user</a>
            </Link>
        </div>
    )
}

export default Header