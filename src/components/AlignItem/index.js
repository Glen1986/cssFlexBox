import React from 'react'
import './styles.css'

const AlignItem = () => {
    return (
        <>
            <p>center</p>
            <section className="container center flex">
                <div className="item">1</div>
                <div className="item">2 item</div>
                <div className="item">otro item bla bla bla bla bla</div>
                <div className="item">cuarto item</div>
            </section>
            <p>stretch</p>
            <section className="container center stretch">
                <div className="item">1</div>
                <div className="item">2 item</div>
                <div className="item">otro item bla bla bla bla bla</div>
                <div className="item">cuarto item</div>
            </section>
            <p>flex-start</p>
            <section className="container  flex-start">
                <div className="item">1</div>
                <div className="item">2 item</div>
                <div className="item">otro item bla bla bla bla bla</div>
                <div className="item">cuarto item</div>
            </section>
            <p>flex-end</p>
            <section className="container end">
                <div className="item">1</div>
                <div className="item">2 item</div>
                <div className="item">otro item bla bla bla bla bla</div>
                <div className="item">cuarto item</div>
            </section>
            <p>baseline</p>
            <section className="container baseline">
                <div className="item">item 1</div>
                <div className="item">2 item y mas texto</div>
                <div className="item">
                    otro ooitem bla bla item bla bla bla bla bla
                </div>
            </section>
            <h2>column</h2>
            <p>flex-start</p>
            <section className="container flex-start column">
                <div className="item">1</div>
                <div className="item">2 item</div>
                <div className="item">otro item bla bla bla bla bla</div>
                <div className="item">cuarto item</div>
            </section>
            <p>flex-end</p>
            <section className="container column end">
                <div className="item">1</div>
                <div className="item">2 item</div>
                <div className="item">otro item bla bla bla bla bla</div>
                <div className="item">cuarto item</div>
            </section>
            <p>center</p>
            <section className="container center column">
                <div className="item">1</div>
                <div className="item">2 item</div>
                <div className="item">otro item bla bla bla bla bla</div>
                <div className="item">cuarto item</div>
            </section>
            <p>baseline</p>
            <section className="container baseline column">
                <div className="item">1</div>
                <div className="item">2 item</div>
                <div className="item">otro item bla bla bla bla bla</div>
                <div className="item">cuarto item</div>
            </section>
            <p>aliniamiento cenrtal</p>

            <section className="container central center">
                <div className="item">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum sunt nihil, aspernatur ea, possimus culpa minima
                </div>
            </section>
        </>
    )
}
export default AlignItem
