import {PropsWithChildren} from "react";

export const BaseLayout = ({children}: PropsWithChildren) => (
    <main className="main">{children}</main>
)