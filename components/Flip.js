import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import styles from './Flip.module.css'
import classNames from 'classnames'

export default function Flip({ className, frontStyle, backStyle, children, ...rest }) {
    const [flipped, setFlipped] = useState(false);
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })
    const { front: Front, back: Back } = children;
    return (
        <div className={styles.flip} onMouseEnter={() => setFlipped(true)} onMouseLeave={() => setFlipped(false)} { ...rest }>
            <animated.div
                className={classNames(styles.flipItem, styles.back)}
                style={{ ...frontStyle, opacity: opacity.to(o => 1 - o), transform }}>
                    <Front />
                </animated.div>
            <animated.div className={
                classNames(styles.flipItem, styles.front)}
                style={{ ...backStyle, opacity, transform: transform.to(t => `${t} rotateX(180deg)`) }}>
                    <Back />
                </animated.div>
        </div>
    )
}
