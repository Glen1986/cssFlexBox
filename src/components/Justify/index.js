import React from 'react'
import './justify.css'

const Justify = () => {
    return (
        <>
            <h1>justify-content Row</h1>
            <p>flex-start</p>
            <section className="container flex-start">
                <div className="item">1</div>
                <div className="item">2 item</div>
                <div className="item">otro item</div>
            </section>
            <p>flex-end</p>
            <section className="container flex-end">
                <div className="item">1</div>
                <div className="item">2 item</div>
                <div className="item">otro item</div>
            </section>
            <p>center</p>
            <section className="container center">
                <div className="item">1</div>
                <div className="item">2 item</div>
                <div className="item">otro item</div>
            </section>
            <p>space-between</p>
            <section className="container space-between">
                <div className="item">1</div>
                <div className="item">2 item</div>
                <div className="item">otro item</div>
            </section>
            <p>space-arround</p>
            <section className="container space-around">
                <div className="item">1</div>
                <div className="item">2 item</div>
                <div className="item">otro item</div>
            </section>
            <h2>column </h2>
            <p>flex-start</p>
            <section className="container column flex-start">
                <div className="item">1</div>
                <div className="item">2 item</div>
                <div className="item">otro item</div>
            </section>
            <p>flex-end</p>
            <section className="container column flex-end">
                <div className="item">1</div>
                <div className="item">2 item</div>
                <div className="item">otro item</div>
            </section>
            <p>center</p>
            <section className="container column center">
                <div className="item">1</div>
                <div className="item">2 item</div>
                <div className="item">otro item</div>
            </section>
            <p>space-between</p>
            <section className="container column space-between">
                <div className="item">1</div>
                <div className="item">2 item</div>
                <div className="item">otro item</div>
            </section>
            <p>space-around</p>
            <section className="container column space-around">
                <div className="item">1</div>
                <div className="item">2 item</div>
                <div className="item">otro item</div>
            </section>
        </>
    )
}
export default Justify
