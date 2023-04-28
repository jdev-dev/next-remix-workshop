export default function Card({ children, className }) {

    return <div className={`border my-5 p-5 rounded-md border-teal-400 ${className}`}>
        {children}
    </div>
}
