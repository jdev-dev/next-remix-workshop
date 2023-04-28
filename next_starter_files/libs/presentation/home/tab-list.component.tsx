import Link from "next/link"

const TabList = () => {
    return (
        <div className="nav nav-pills outline-active">
            <ul className="nav-item">
                <Link href='/articles' as='/'>Global Feed</Link>
            </ul>
        </div>
    )
}

export default TabList;