const Logger=(log,props)=>{
    console.log(log)
    let successStyle = "background:rgb(92, 229, 0);color:black;font-weight:bold;padding:6px 13px;border-radius:8px;"
    let wariningStyle = "background:#ffc208;color:black;font-weight:bold;padding:6px 13px;border-radius:8px;"
    let errorStyle = "background:red;color:white;font-weight:bold;padding:6px 13px;border-radius:8px;"
    return {
        log:()=>{
            console.log(`%c${log}`,successStyle,props )
        },
        warn:()=>{
            console.log(`%c${log}`,wariningStyle, )
        },
        error:()=>{
            console.error(`%c${log}`,errorStyle, )
        }
    }
}
export default Logger