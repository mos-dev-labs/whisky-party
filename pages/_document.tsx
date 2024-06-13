import Document, {Head, Html, Main, NextScript} from "next/document";
import React from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Invite Whisky Party</title>
          <meta name="description" content="위스키 파티에 초대합니다."/>
          <link rel="icon" href="/logo.jpg"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}
