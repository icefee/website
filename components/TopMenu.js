import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import styles from './TopMenu.module.css'

const navs = [
    {
        href: '/',
        title: '首页',
        subTitle: 'HOME'
    },
    {
        href: '/products',
        title: '产品方案',
        subTitle: 'SOLUTION'
    },
    {
        href: '/about',
        title: '关于我们',
        subTitle: 'ABOUT US'
    },
    {
        href: '/contact',
        title: '联系我们',
        subTitle: 'CONTACT'
    }
];

function Logo() {
    return (
        <div className={styles.logo}>
            <Image width={120} height={40} alt="logo" src="/vercel.svg" />
        </div>
    )
}

export default function TopMenu() {
    const router = useRouter();
    return (
        <header className={styles.wrap}>
            <div className={styles.inner}>
                <Logo />
                <ul className={styles.menu}>
                    {
                        navs.map(
                            ({ title, subTitle, ...rest }, index) => (
                                <li key={index}>
                                    <Link {...rest}>
                                        <div className={classNames(styles.menuItem, {[styles.menuActive]: rest.href === router.route })}>
                                            <div>
                                                {title}
                                            </div>
                                            <div>{subTitle}</div>
                                        </div>
                                    </Link>
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
        </header>
    )
}

