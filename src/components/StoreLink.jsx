const StoreLink = () => {
    const handleStoreRedirect = (e) => {
        e.preventDefault();
        window.location.href = "https://shop.nhl.com/";
    };

    return (
        <div className="storelink" onClick={handleStoreRedirect}>
            <h1>Fan Shop</h1>
            <img id="jerseyOverlay" src={`${process.env.PUBLIC_URL}/images/tarasenko_jersey.png`} />

            <div className="storelink__underline">
                <p>Handled by</p>
                <img id="shopLogo" src={`${process.env.PUBLIC_URL}/images/nhl_shop_logo.png`} />
            </div>
        </div>
    );
};

export default StoreLink;
