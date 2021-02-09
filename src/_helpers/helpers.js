/** data convert to react-select format {label:"", text:""} */

export const selectedOptionsJobs = ( stateOrProps ) => {
    
    const convertData = stateOrProps ? Array.from(stateOrProps) : [];
    
    return convertData.map(( item => (
        { value: item, label: item }
    )))

}


export const selectedOptions = ( stateOrProps ) => {
    
    const convertData = stateOrProps ? Array.from(stateOrProps) : [];
    return convertData.map(( item => 
        ( { key: item._id, value: item._id, text: item.fullname || item.text })
    ))

    

}

export const convertedMediaUrl = ( stateOrProps ) => {
    
    const convertData = stateOrProps ? Array.from(stateOrProps) : [{title:""},{title:""},{title:""}];

    return convertData.map(( item => item.title ))
}


export const formatDate = (string) => {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
}

export const calculateAge = (birthday) => {

        //milliseconds in a year 1000*24*60*60*365.24 = 31556736000; 
            let today = new Date(),
            //birthay has 'Dec 25 1998'
            dob = new Date(birthday),
            
            //difference in milliseconds
            diff = today.getTime() - dob.getTime(),
            years = Math.floor(diff / 31556736000);

            /*

                //convert milliseconds into years
                years = Math.floor(diff / 31556736000),

                //1 day has 86400000 milliseconds
                days_diff= Math.floor((diff % 31556736000) / 86400000),

                //1 month has 30.4167 days
                months = Math.floor(days_diff / 30.4167),
                
                days = Math.floor(days_diff % 30.4167);

                return `${years} years ${months} months ${days} days`;

            */
            return ` (${years} yaşında)`;
           
}

export const getWidth = (Responsive) => {
    const isSSR = typeof window === 'undefined'
  
    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}