// import { Link, Outlet } from "react-router-dom";

import { Outlet } from "react-router-dom";

export const MovieDetailsPage = () => {
    return (
        <div style={{ display: "flex" }}>
            <main style={{ padding: "1rem 0" }}>
                <h2>MovieDetailsPage</h2>
            </main>
            <Outlet />
        </div>
    )
}

// export default function Invoices() {
//     return (
//       <main style={{ padding: "1rem 0" }}>
//         <h2>Invoices</h2>
//       </main>
//     );
//   }