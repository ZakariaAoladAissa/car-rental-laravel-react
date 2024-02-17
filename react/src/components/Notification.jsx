import './notification.css'

const Notification =({message})=>{
    return(
        <div className='notification-container'>
            {message}
        </div>
    )
}
export default Notification