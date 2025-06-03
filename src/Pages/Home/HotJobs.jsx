import React, { use } from 'react';
import JobCard from '../Shared/JobCard';

const HotJobs = ({jobsPromise}) => {
    const jobs = use(jobsPromise);
    return (
        <div>
        <h2 className="text-2xl my-6 text-center">Hot Jobs Of the day</h2>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
            }
           </div>
        </div>
    );
};

export default HotJobs;