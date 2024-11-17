const getAppointment = () => {
    const all = localStorage.getItem('appointment');
    if (all) {
        const appointment = JSON.parse(all)
        return appointment
    } else {
        return []
    }
}
 
const setAppointment = (data) => {
    const appointment = getAppointment()
    appointment.push(data)
    const strAppointment = JSON.stringify(appointment)
    
    localStorage.setItem('appointment',strAppointment)
}

const removeAppoint = email => {
    const appointment = getAppointment()
    const remaining = appointment.filter(appoint => appoint.email !== email)
    localStorage.setItem("appointment",JSON.stringify(remaining))
    console.log(remaining)
}

export {setAppointment,getAppointment,removeAppoint}