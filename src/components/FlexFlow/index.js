const FlexFlow = () => {
    return (
        <>
            <h1>default: no-wrap</h1>
            <section className="flex-container default">
                <div className="item">1</div>
                <div className="item">2</div>
                <div className="item">3</div>
                <div className="item">4</div>
                <div className="item">5</div>
            </section>
            <h1>wrap</h1>
            <section className="flex-container wrap">
                <div className="item">1</div>
                <div className="item">2</div>
                <div className="item">3</div>
                <div className="item">4</div>
                <div className="item">5</div>
                <div className="item">6</div>
            </section>
            <h1>wrap-reverse</h1>
            <section className="flex-container wrap-reverse">
                <div className="item">1</div>
                <div className="item">2</div>
                <div className="item">3</div>
                <div className="item">4</div>
                <div className="item">5</div>
                <div className="item">6</div>
            </section>
            <h1>default: row reverse no-wrap</h1>
            <section className="flex-container r-nowrap">
                <div className="item">1</div>
                <div className="item">2</div>
                <div className="item">3</div>
                <div className="item">4</div>
                <div className="item">5</div>
                <div className="item">6</div>
            </section>
        </>
    )
}
export default FlexFlow
