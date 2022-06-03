import React from 'react'
import './shrink.css'

const FlexShrink = () => {
    return (
        <>
            <h1>FlexShrink</h1>
            <section className="shrink-container ">
                <div className="items s-1 fg-1">a</div>
                <div className="items">dfd</div>
                <div className="items">234</div>
                <div className="items">234gfd</div>
            </section>
            <h1>iguales</h1>
            <section className="shrink-container ">
                <div className="items s-1 fg-1">a</div>
                <div className="items s-1 fg-1">dfd</div>
                <div className="items s-1 fg-1">234</div>
                <div className="items s-1 fg-1">234gfd</div>
            </section>
            <h1>FlexShrink</h1>
            <section className="shrink-container ">
                <div className="items s-1 fg-1">a</div>
                <div className="items s-1 fg-1">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="items s-1 fg-1">234</div>
                <div className="items s-1 fg-1">234gfd</div>
            </section>
        </>
    )
}
export default FlexShrink
