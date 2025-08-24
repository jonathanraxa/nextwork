// our-domain.com/[meetupId]

import { useRouter } from 'next/router';

const MeetupDetails = () => {
    const router = useRouter();
    const meetupId = router.query.meetupId;
    return (
        <>
            <img src={`https://picsum.photos/200/300?random=${meetupId}`} alt='Random Image' />
            <h1>Meetup Details</h1>
            <p>{meetupId}</p>
        </>
    )
};

export default MeetupDetails;