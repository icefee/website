import { BasePage } from '../components/base';
import Image from 'next/image';
import { Space, Button } from 'antd';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import styles from '../styles/Download.module.css';

export default function Download() : JSX.Element {
    return (
        <BasePage className="download" title="下载中心">
            <div className={styles.banner}>
                <Image src="/download.jpg" width="1920" height="750" alt="banner" />
                <div className={styles.buttonGroup}>
                    {/* <h2>智能通讯线路巡检仪</h2> */}
                    <h2>RC for Intelligent Instrument</h2>
                    <Space size={10}>
                        <Button size="large" href="/otdr_release1.0.apk" ghost icon={<AndroidOutlined />}>下载apk</Button>
                        <Button size="large" type="dashed" ghost icon={<AppleOutlined />}>敬请期待</Button>
                    </Space>
                </div>
            </div>
        </BasePage>
    )
}
