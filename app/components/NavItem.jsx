import Link from "next/link"

export default function NavItem({dataTest, label,path}){
    return (
        <Link data-test={dataTest} href={path}>
            {label}
        </Link>
    )
}