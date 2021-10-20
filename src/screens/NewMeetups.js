import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from 'react-router-dom'

function NewMeetups(){

     const navigation = useHistory();
    function onAddNewMeetup(data){
        fetch('https://react-app-5892c-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }
        }
        ).then(()=>{
            navigation.replace('/all-meetups');
        })
    }
    return(
        <section>
            <h1>Add Meetup</h1>
            <NewMeetupForm submittFormData={onAddNewMeetup}/>
        </section>
    );
}

export default NewMeetups;