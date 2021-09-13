import { BasePage } from '../components/base'
import { Tabs } from 'antd'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { UrlObject } from 'url'

export default function Contact() : JSX.Element {
    const router = useRouter();
    const [_key, _setKey] = useState(`1`);
    useEffect(() => {
        const { tab } = router.query;
        if (tab != undefined && tab != '') {
            _setKey(tab as string)
        }
    }, [router.query])
    return (
        <BasePage className="contact" title="联系我们">
            <div className="banner">
                <Image width="1920" height="400" alt="banner" src="/banner_contact.jpg" />
            </div>
            <Tabs activeKey={_key} onChange={tab => {
                router.replace({
                    path: router.pathname,
                    query: {
                        tab
                    }
                } as UrlObject)
            }} centered>
                <Tabs.TabPane tab={
                    <div className="tab-title">
                        <p>联系方式</p>
                        <p>CONTACT WAYS</p>
                    </div>
                } key="1">
                    <div className="content-inner"></div>
                </Tabs.TabPane>
                <Tabs.TabPane tab={
                    <div className="tab-title">
                        <p>加入我们</p>
                        <p>JOIN US</p>
                    </div>
                } key="2">
                    <div className="content-inner p-10">
                        <p>成为远知的一员，意味着能够接触到更新更多的技术类型和广阔丰富的落地场景，欢迎有志向拥抱新技术，迎接新挑战的你，加入我们共同奋进的团队！</p>
                    </div>
                </Tabs.TabPane>
                <Tabs.TabPane tab={
                    <div className="tab-title">
                        <p>商务洽谈</p>
                        <p>SALES & MARKETING</p>
                    </div>
                } key="3">
                    <div className="content-inner"></div>
                </Tabs.TabPane>
            </Tabs>
        </BasePage>
    )
}
