import '../styles/globals.css'

export const metadata ={
    title:'promptopida'
    ,description:'discover and share ai Promps'
}



function RootLayout({children}) {
  return (
    <html lang='en'>
        <body>
            <div className="main">
                <div className="gradient"/>
            </div>
            <div className="app">
                {children}
            </div>
        </body>
    </html>
  )
}

export default RootLayout