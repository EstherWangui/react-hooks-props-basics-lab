export default function Links(props){
    const {github,linkedin} = props
    return(
        <>
        <h3>Links</h3>
        <a href={github}>{github}</a><br/>
        <a href={linkedin}>{linkedin}</a>
        </>
    )
}