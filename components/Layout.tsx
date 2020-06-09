import Header from "./Header"

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: "1px solid #DDD"
}


function Layout(props: { children: import("react").ReactNode }) {

    return (
        <div style={layoutStyle}>
            <Header />
            {props.children}
        </div>
    )
}

export default Layout