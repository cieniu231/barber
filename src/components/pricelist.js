const PriceList = ({prices, title}) => {
    return (
        <div className="blog-list">
            <h2> {title} </h2>
                <div>
                    <h2>{prices.name}</h2>
                    <h2>{prices.combo}</h2>
                </div>
        </div>
    );
}

export default PriceList;