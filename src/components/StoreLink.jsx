const StoreLink = () => {
    const onStoreClick = (e) => {
        e.preventDefault()
        window.location.href = "https://shop.nhl.com/";
    }

    return (
        <div className="storelink" onClick={onStoreClick}>
            <p id="storelink__p1">
                GET YOUR GAME ON<br/>
                <span id="storelink__p2">NHL Apparel Store</span>
            </p>
            <div id="storelink__store-btn"/>
        </div>
    )
}

export default StoreLink;