import React from 'react';
import './StoryReel.css';
import Story from './Story';
import { useStateValue } from './StateProvider';

function StoryReel() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="storyReel">
            <Story 
                image="https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                profileSrc={user.photoURL}
                title={user.displayName}
            />
            <Story 
                image="https://images.unsplash.com/photo-1513151233558-d860c5398176?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                profileSrc="https://cdn4.iconfinder.com/data/icons/jobs-and-occupations-3/64/Programmer-job-avatar-profession-occupation-website-coding-programing-backend-developer-512.png"            
                title="Paras Aghija"
            />
            <Story 
                image="https://images.iphonephotographyschool.com/22676/708/How-To-Blur-Background-On-iPhone.jpg"
                profileSrc="https://cdn4.iconfinder.com/data/icons/jobs-and-occupations-3/64/Programmer-job-avatar-profession-occupation-website-coding-programing-backend-developer-512.png"            
                title="Ashish Singh"
            />
            <Story 
                image="https://images.iphonephotographyschool.com/22680/708/How-To-Blur-Background-On-iPhone.jpg"
                profileSrc="https://cdn4.iconfinder.com/data/icons/jobs-and-occupations-3/64/Programmer-job-avatar-profession-occupation-website-coding-programing-backend-developer-512.png"            
                title="Anurag Singh"
            />
            <Story 
                image="https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                profileSrc="https://cdn4.iconfinder.com/data/icons/jobs-and-occupations-3/64/Programmer-job-avatar-profession-occupation-website-coding-programing-backend-developer-512.png"           
                title="Aman Gothwal"
            />
        </div>
    )
}

export default StoryReel;
