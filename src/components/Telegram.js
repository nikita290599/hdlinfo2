const Telegram = () => {

    return (<div className="container text-center text-theme" style={{ width: "50%" }}>
        <h2>Connect <i className="fab fa-telegram-plane" style={{ width: "0.5rem", marginRight: "2rem" }}></i> Telegram</h2>
        <br></br>
        <h3>Add bot to your group</h3><br></br>
        <h5>Manual:</h5>
        <div style={{ fontSize: "1rem" }} >
            1. Open the telegram app.<br></br>
            2. Open the group you want to add the bot to.<br></br>
            3. Click on add members in group settings.<br></br>
            4. Search @HodlInfoBot and click it<br></br>
        </div>
        <br />
        <h5>Automatic :</h5>
        <h6>Go to :<a href='https://t.me/HodlInfoBot?startgroup=true' style={{ textDecoration: "none", color: "inherit" }}>https://t.me/HodlInfoBot?startgroup=true</a></h6>
        <br></br>
        <h3>Chat with the bot</h3>
        <h5>Manual :</h5>
        <div style={{ fontSize: "1rem" }} >

            1. Open the telegram app.<br />
            2. Click on new message button.<br />
            3. In search bar type HodlInfoBot.<br />
            4. Click on @HodlInfoBot.<br />
        </div>


        <br></br>
        <h5>Automatic :</h5>
        <h6>Go to :<a href='https://t.me/HodlInfoBot' style={{ textDecoration: "none", color: "inherit" }}>https://t.me/HodlInfoBot</a></h6>
        Go to :
    </div>);
}

export default Telegram;