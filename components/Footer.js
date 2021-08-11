import styles from './Footer.module.css';
import Link from 'next/link'
import Image from 'next/image'
import { Popover } from 'antd';
import { LinkIn, WeChart } from '../components/Icons';
import classNames from 'classnames';

export default function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.links}>
                <div className={classNames('content-inner', styles.linksInner)}>
                    <div>
                        <h4>产品方案</h4>
                        <ul>
                            <li>
                                <Link href="/products?tab=1">电力</Link>
                            </li>
                            <li>
                                <Link href="/products?tab=2">交通</Link>
                            </li>
                            <li>
                                <Link href="/products?tab=3">管廊</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>关于我们</h4>
                        <ul>
                            <li>
                                <Link href="/about?tab=1">公司介绍</Link>
                            </li>
                            <li>
                                <Link href="/about?tab=2">执业资质</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>联系我们</h4>
                        <div className={styles.sns}>
                            <div className="sns-item">
                                <Popover placement="left" style={{ padding: 5 }} content={
                                    <div>
                                        <Image width="120" height="120" alt="qrcode" src="/qrcode.png" />
                                    </div>
                                }>
                                    <WeChart size={24} />
                                </Popover>
                            </div>
                            <div className="sns-item">
                                <LinkIn size={24} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <div className="content-inner">
                    <p>Copyright © 2021 FurtherSense Co.,Ltd.  All right reserved.</p>
                </div>
            </div>
        </footer>
    )
}
