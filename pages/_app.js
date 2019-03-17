
import App, { Container } from 'next/app'
import React from 'react'
import Head from "next/head"

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
         <Head>
          <title>Todo List</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700" rel="stylesheet" />
          <meta name="theme-color" content="#c900ff" />
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp