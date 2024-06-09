import {PropsWithChildren} from "react";
import './style.css'

export const BaseLayout = ({children}: PropsWithChildren) => (
    <div className="wrapper">
        <main className="main">{children}</main>
    </div>
)