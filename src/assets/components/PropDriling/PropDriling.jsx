import A from "./A"

const data={
    theme:"dark",
    bgColor:"#000000",
    texColor:"#ffffff"
} 

const PropDriling = () => {
    return (
        <div>

            <h1>PropDriling</h1>
            <A theme={data}/>

        </div>
    )
}

export default PropDriling 