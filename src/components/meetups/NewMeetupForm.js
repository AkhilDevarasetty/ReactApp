import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';
import {useRef} from 'react';

function NewMeetupForm(props) {

    const titltRef = useRef();
    const imageRef = useRef();
    const addresseRef = useRef();
    const descriptionRef = useRef();


    function onFormSubmit(event){
        event.preventDefault();
        const enteredTitle = titltRef.current.value;
        const enteredImgUrl = imageRef.current.value;
        const enteredAddress = addresseRef.current.value;
        const enteredDescription = descriptionRef.current.value;

        const newMeetupData = {
            title:enteredTitle,
            imgUrl:enteredImgUrl,
            address:enteredAddress,
            description:enteredDescription
        }
        props.submittFormData(newMeetupData);
    }
    return <Card>
        <form className={classes.form} onSubmit={onFormSubmit}>
            <div className={classes.control}>
                <label htmlFor='title'>Meetup Title</label>
                <input type='text' required id='title' ref={titltRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Meetup Image</label>
                <input type='url' required id='image' ref={imageRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='addres'>Address</label>
                <input type='text' required id='addres' ref={addresseRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Description</label>
                <textarea id='description' rows='5' required ref={descriptionRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
}
export default NewMeetupForm;
