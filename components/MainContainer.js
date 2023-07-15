import A from "./A";
import Head from "next/head";

const MainContainer = ({children}) => {
    return (
        <>
            <Head>
                <title>Next JS</title>
            </Head>
            <div className="navbar">
                <div className="link">
                    <A href={'/'} text='MainPage'/>
                </div>
                <div className="link">
                    <A href={'/users'} text='Users'/>
                </div>
            </div>
            <div>{children}</div>
            <style jsx>
                {`
                  .navbar {
                    background: #f19f15;
                    padding: 15px;
                  }

                `}
            </style>
        </>
    );
};

export default MainContainer;