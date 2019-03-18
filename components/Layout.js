const Layout = props => (
    <div className="container">
        <div className="content">
        <h1 className="title">Enye-Todo</h1>
        {props.children}
    </div>
    <style jsx>{`
        :global(body) {
            margin: 0;
            padding: 0;
            background: linear-gradient(180deg, #c900ff, #6e00ff) no-repeat;
            font-family: "Montserrat", sans-serif;
        }
        .title {
            margin-top: 0;
        }
        .container {
            width: 100vw;
            height: 100vh;
            margin-top: 25px;
            margin-bottom: 25px;
            display: flex;
            justify-content: center;
            align-items: flex-start;
        }
        .content {
            background: #f9f9f9;
            padding: 15px;
            width: 500px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
            border-radius: 10px;
            height: 90vh;
        }

        @media (max-width: 600px) {
            .content {
              width: 88%;
            }
          }
    `}</style>
    </div>
  )
  
  export default Layout