/*eslint-disable*/

import { BasePage } from './_app';
import { Tabs, Row, Col } from 'antd';
import styles from '../styles/Product.module.css';
import classNames from 'classnames';
import Flip from '../components/Flip';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const ProductItem = ({ image }) => (
    <div style={{ height: 150, background: `url(${image}) center / cover no-repeat` }} className={styles.productItem}></div>
)

export default function Products() {
    const router = useRouter();
    const [_key, _setKey] = useState(`1`);
    useEffect(() => {
        const { tab } = router.query;
        if (tab != undefined && tab != '') {
            _setKey(tab)
        }
    }, [router.query])
    return (
        <BasePage className="products" title="产品与解决方案">
            <div className="banner">
                <Image width="1920" height="400" alt="banner" src="/banner_products.jpg" />
            </div>
            <Tabs activeKey={_key} onChange={_setKey} centered>
                <Tabs.TabPane tab={
                    <div className="tab-title">
                        <p>电力</p>
                        <p>POWER INDUSTRY</p>
                    </div>
                } key="1">
                    <div className={classNames('content-inner', styles.productGroup)}>
                        <Row gutter={[16, 16]}>
                            <Col sm={6} xs={12}>
                                <Flip style={{ height: 150 }}>
                                    {{
                                        front: () => <ProductItem image="/products/2_1/1.png" />,
                                        back: () => (<div className={styles.case}>
                                            <span className="case-item">电力案例1</span>
                                        </div>)
                                    }}
                                </Flip>
                            </Col>
                            <Col sm={6} xs={12}>
                                <Flip style={{ height: 150 }}>
                                    {{
                                        front: () => <ProductItem image="/products/2_1/2.png" />,
                                        back: () => (<div className={styles.case}>
                                            <span className="case-item">电力案例2</span>
                                        </div>)
                                    }}
                                </Flip>
                            </Col>
                            <Col sm={6} xs={12}>
                                <Flip style={{ height: 150 }}>
                                    {{
                                        front: () => <ProductItem image="/products/2_1/3.png" />,
                                        back: () => (<div className={styles.case}>
                                            <span className="case-item">电力案例3</span>
                                        </div>)
                                    }}
                                </Flip>
                            </Col>
                        </Row>
                    </div>
                </Tabs.TabPane>
                <Tabs.TabPane tab={
                    <div className="tab-title">
                        <p>交通</p>
                        <p>TRANSPORTATION INDUSTRY</p>
                    </div>
                } key="2">
                    <div className={classNames('content-inner', styles.productGroup)}>
                        <Row gutter={[16, 16]}>
                            <Col sm={6} xs={12}>
                                <Flip style={{ height: 150 }}>
                                    {{
                                        front: () => <ProductItem image="/products/2_2/1.png" />,
                                        back: () => (<div className={styles.case}>
                                            <span className="case-item">交通案例1</span>
                                        </div>)
                                    }}
                                </Flip>
                            </Col>
                            <Col sm={6} xs={12}>
                                <Flip style={{ height: 150 }}>
                                    {{
                                        front: () => <ProductItem image="/products/2_2/2.png" />,
                                        back: () => (<div className={styles.case}>
                                            <span className="case-item">交通案例2</span>
                                        </div>)
                                    }}
                                </Flip>
                            </Col>
                            <Col sm={6} xs={12}>
                                <Flip style={{ height: 150 }}>
                                    {{
                                        front: () => <ProductItem image="/products/2_2/3.png" />,
                                        back: () => (<div className={styles.case}>
                                            <span className="case-item">交通案例3</span>
                                        </div>)
                                    }}
                                </Flip>
                            </Col>
                        </Row>
                    </div>
                </Tabs.TabPane>
                <Tabs.TabPane tab={
                    <div className="tab-title">
                        <p>管廊</p>
                        <p>PETRO INDUSTRY</p>
                    </div>
                } key="3">
                    <div className={classNames('content-inner', styles.productGroup)}>
                        <Row gutter={[16, 16]}>
                            <Col sm={6} xs={12}>
                                <Flip style={{ height: 150 }}>
                                    {{
                                        front: () => <ProductItem image="/products/2_3/1.png" />,
                                        back: () => (<div className={styles.case}>
                                            <span className="case-item">管廊案例1</span>
                                        </div>)
                                    }}
                                </Flip>
                            </Col>
                            <Col sm={6} xs={12}>
                                <Flip style={{ height: 150 }}>
                                    {{
                                        front: () => <ProductItem image="/products/2_3/2.png" />,
                                        back: () => (<div className={styles.case}>
                                            <span className="case-item">管廊案例2</span>
                                        </div>)
                                    }}
                                </Flip>
                            </Col>
                        </Row>
                    </div>
                </Tabs.TabPane>
            </Tabs>
        </BasePage>
    )
}
