import fetch from 'isomorphic-unfetch';

function Home({ channels }) {
    return (
        <div>
            <header> Podcast </header>
            <div className="channels">
                {channels.map(channel => (
                    <div className="channel" key={channel.id}>
                        <img src={channel.urls.logo_image.original} alt=""/>
                        <h2>{channel.title}</h2>
                    </div>
                )) 
                }
            </div>
        <style jsx>{`
            header {
                color: #fff;
                background: #8756ca;
                padding: 15px;
                text-align: center;
                font-size: 1.25rem;
                font-weight: bold;
            }
            .channels {
                display: grid;
                grid-gap: 15px;
                padding: 15px;
                grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            }
            .channel {
                display: block;
                margin-bottom: 0.5em;
                color: #333;
                text-decoration: none;
                
            }
            .channel img {
                border-radius: 3px;
                box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                width: 100%;
            }
            h2 {
                padding: 5px;
                font-size: 0.9em;
                font-weight: 600;
                margin: 0;
                text-align: center;
                }
        `}</style>

        <style jsx global>{`
            body {
                margin: 0;
                font-family: system-ui;
                background: white;
            }
        `}</style>
    </div>
    )
}

Home.getInitialProps = async () => {
    const req = await fetch('https://api.audioboom.com/channels/recommended')
    const { body : channels} = await req.json()
    return { channels }
}

export default Home