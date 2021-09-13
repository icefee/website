import { Carousel, List } from 'antd';
import styles from '../styles/Home.module.css';
import { BasePage } from '../components/base';
import { CASE, cases } from './api/cases';
import { news } from './api/news';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CaseItem = ({ id, title, cover } : CASE) : JSX.Element => {
  const _style = {
    background: `url(${cover}) center / cover no-repeat`
  }
  return (
    <div className={styles.caseItem}>
      <Link href={`/product/${id}`}>
        <div className={styles.caseLink}>
          <div className={styles.caseCover} style={_style} />
          <p>{title}</p>
        </div>
      </Link>
    </div>
  )
}

export default function Home() : JSX.Element {
  const [offset, setOffset] = useState<number>(0);

  const disabledState = useMemo(() => ({
    prev: offset === 0,
    next: offset === cases.length - 4
  }), [offset]);

  return (
    <BasePage className={styles.container} title="主页">
      <div className={styles.banner}>
        <Carousel effect="fade" autoplay>
          <div>
            <Image width="2000" height="1500" alt="banner1" src="/banner.jpg" />
          </div>
        </Carousel>
        <div className="content-inner">
          <div className={styles.areaBlock}>
            <div className={styles.areaHeader}>
              <div className={styles.areaTitle}>
                <h1>产品与解决方案 / </h1>
                <span>PRODUCTS & SOLUTION</span>
              </div>
              <Link href="/products">
                <span className={styles.more}>
                  <span>MORE</span>
                </span>
              </Link>
            </div>
            <div className={styles.areaContent}>
              <div className={styles.caseScroll}>
                <div className={styles.caseWrap} style={{ transform: `translateX(-${offset * 25}%)` }}>
                  {
                    cases.map(
                      item => (
                        <CaseItem key={item.id} {...item} />
                      )
                    )
                  }
                </div>
                <a className={classNames(styles.prev, styles.control, { [styles.disabled]: disabledState.prev })} onClick={() => setOffset(o => o - 1)}>
                  <LeftOutlined style={{ fontSize: 30 }} />
                </a>
                <a className={classNames(styles.next, styles.control, { [styles.disabled]: disabledState.next })} onClick={() => setOffset(o => o + 1)}>
                  <RightOutlined style={{ fontSize: 30 }} />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.areaBlock}>
            <div className={styles.areaHeader}>
              <div className={styles.areaTitle}>
                <h1>新闻动态 / </h1>
                <span>NEWS</span>
              </div>
              <Link href={`/about?tab=3`}>
                <span className={styles.more}>
                  <span>MORE</span>
                </span>
              </Link>
            </div>
            <div className={styles.areaContent}>
              <List
                itemLayout="horizontal"
                dataSource={news}
                renderItem={item => (
                  <Link href={'/news/' + 2}>
                    <div className="link">
                      <List.Item style={{padding: 0}}>
                        <List.Item.Meta
                          avatar={
                            <div className={styles.thumb}>
                              <Image width={150} height={100} src={item.thumb} alt={item.title} />
                            </div>
                          }
                          title={item.title}
                          description={item.description}
                        />
                      </List.Item>
                    </div>
                  </Link>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </BasePage>
  )
}
