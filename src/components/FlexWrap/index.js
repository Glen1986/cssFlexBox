import React from 'react'
import './wrap.css'

const FlexWrap = () => {
    return (
        <>
            <h1>nowrap</h1>
            <section className="flex-container nowrap">
                <div className="item orange">1</div>
                <div className="item blue">2</div>
                <div className="item green">3</div>
                <div className="item blue">4</div>
            </section>
            <h1>wrap</h1>
            <section className="flex-container wrap">
                <div className="item orange">1</div>
                <div className="item blue">2</div>
                <div className="item green">3</div>
                <div className="item blue">4</div>
            </section>
            <h1>nowrap</h1>
            <section className="flex-container wrap-reverse">
                <div className="item orange">1</div>
                <div className="item blue">2</div>
                <div className="item green">3</div>
                <div className="item blue">4</div>
            </section>
        </>
    )
}
export default FlexWrap
