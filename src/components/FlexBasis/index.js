import React from 'react'
import './basis.css'

const FlexBasis = () => {
    return (
        <>
            <p>bauto</p>
            <section className="flex-container">
                <div className="items bauto fg-1">a</div>
                <div className="items bauto fg-1">b</div>
                <div className="items bauto fg-2">ccc</div>
                <div className="items bauto fg-3">c</div>
            </section>
            <p>b-0</p>
            <section className="flex-container">
                <div className="items bg-0 fg-1">a</div>
                <div className="items bg-0 fg-1">b</div>
                <div className="items bg-0 fg-2">ccc</div>
                <div className="items bg-0 fg-3">c</div>
            </section>
            <p>bauto</p>
            <section className="flex-container">
                <div className="items bauto fg-1">a</div>
                <div className="items bauto fg-1">b</div>
                <div className="items bauto fg-1">ccc</div>
                <div className="items bauto fg-1">c</div>
            </section>
            <p>bauto</p>
            <section className="flex-container">
                <div className="items bauto fg-2">a</div>
                <div className="items bauto fg-2">b</div>
                <div className="items bauto fg-2">ccc</div>
                <div className="items bauto fg-2">2</div>
            </section>
            <p>bauto</p>
            <section className="flex-container">
                <div className="items bauto fg-1">a</div>
                <div className="items bauto fg-1">b</div>
                <div className="items bauto fg-2">ccc</div>
                <div className="items bauto fg-3">c</div>
            </section>
        </>
    )
}
export default FlexBasis
