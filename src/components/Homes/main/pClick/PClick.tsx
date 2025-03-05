"use client"

import { githubClik } from "@/app/store/storeMane"

const PClick: React.FC = () => {
    const { setWindow } = githubClik()
    return (
        <div>
            <p onClick={() => setWindow()} style={{ cursor: "pointer" }}>
                👾 GitHub: github.com/Mihuil121
            </p>
        </div>
    )
}

export default PClick