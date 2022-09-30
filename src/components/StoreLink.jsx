const StoreLink = () => {
    const handleStoreRedirect = (e) => {
        e.preventDefault();
        window.location.href = "https://shop.nhl.com/";
    };

    return (
        <div className="storelink" onClick={handleStoreRedirect}>
            <div>
                <p id="storelink__p1">GET YOUR GAME ON &#127954;</p>
                <p id="storelink__p2">SHOP NHL APPAREL</p>
            </div>

            <button id="storelink__store-btn"/>
        </div>
    );
};

export default StoreLink;
