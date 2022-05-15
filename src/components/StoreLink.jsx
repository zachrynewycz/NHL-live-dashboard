const StoreLink = () => {
    const onStoreClick = (e) => {
        e.preventDefault()
        window.location.href = "https://shop.nhl.com/";
    }

    return (
        <div className="storelink" onClick={onStoreClick}>
            <p id="storelink__p1">GET YOUR GAME ON</p>
            <p id="storelink__p2">NHL Apparel Store</p>
            <div id="storelink__store-btn"/>
        </div>
    )
}

export default StoreLink;