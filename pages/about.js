import { BasePage } from './_app';
import { Tabs, List } from 'antd';
import styles from '../styles/About.module.css';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { news } from './api/news';

export default function About() {
    const router = useRouter();
    const [_key, _setKey] = useState(`1`);
    useEffect(() => {
        const { tab } = router.query;
        if (tab != undefined && tab != '') {
            _setKey(tab)
        }
    }, [router.query])

    useEffect(() => {
        if (_key === '3') {
            _fetchNews()
        }
    }, [_key])

    const _fetchNews = async () => {
        const res = await fetch('/api/news');
        const _news = await res.json();
        console.log(_news)
    }

    return (
        <BasePage className="about" title="关于">
            <div className="banner">
                <Image width="1920" height="400" alt="banner" src="/banner_about.jpg" />
            </div>
            <Tabs activeKey={_key} onChange={_setKey} centered>
                <Tabs.TabPane tab={
                    <div className="tab-title">
                        <p>公司简介</p>
                        <p>INTRODUCTION</p>
                    </div>
                } key="1">
                    <div className={classNames('content-inner', 'p-10', styles.introduce)}>
                        <h2>深圳知远科技</h2>
                        <h4>ABOUT US</h4>
                        <p>远知科技是一家兼具智能硬件和互联网基因的高科技创新型企业，专长在于物联网、大数据、智能系统、边缘计算、光电/软硬一体化等前沿技术和交叉领域应用。</p>
                    </div>
                </Tabs.TabPane>
                <Tabs.TabPane tab={
                    <div className="tab-title">
                        <p>执业资质</p>
                        <p>INTRODUCTION</p>
                    </div>
                } key="2">
                    <div className="content-inner p-10">
                        这里是执业资质
                    </div>
                </Tabs.TabPane>
                <Tabs.TabPane tab={
                    <div className="tab-title">
                        <p>新闻动态</p>
                        <p>NEWS</p>
                    </div>
                } key="3">
                    <div className="content-inner">
                        <List
                            itemLayout="horizontal"
                            dataSource={news}
                            renderItem={item => (
                                <Link href={'/news?id=' + 2}>
                                    <List.Item className="link">
                                        <List.Item.Meta
                                            avatar={
                                                <div className={styles.thumb}>
                                                    <Image width={150} height={100} alt={item.title} src={item.thumb} />
                                                </div>
                                            }
                                            title={item.title}
                                            description={item.description}
                                        />
                                    </List.Item>
                                </Link>
                            )}
                        />
                    </div>
                </Tabs.TabPane>
                <Tabs.TabPane tab={
                    <div className="tab-title">
                        <p>公众号</p>
                        <p>WECHAT SUBSCRIPTION</p>
                    </div>
                } key="4">
                    <div className="content-inner p-10" style={{ textAlign: 'center' }}>
                        <Image src="/qrcode.png" alt="qrcode" width="200" height="200" />
                    </div>
                </Tabs.TabPane>
            </Tabs>
        </BasePage>
    )
}
