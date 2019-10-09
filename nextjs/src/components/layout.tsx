import * as React from "react";
import Head from "next/head";

import { Header } from "@/app/components/header";

type Props = {
    title?: string;
};

export const Layout: React.FunctionComponent<Props> = ({ children, title = "This is the default title" }) => {
    return <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <Header/>
        {children}
    </div>
};
