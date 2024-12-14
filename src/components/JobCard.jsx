/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'
import { format } from 'date-fns';

const JobCard = ({ job }) => {
  const { job_title, date_line, category, min_price, max_price, description, bid_count } = job
  return (
    <Link
      to={`/job/1`}
      className='w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'
    >
      <div className='flex items-center justify-between'>
        <span className='text-xs font-light text-gray-800 '>
          Deadline: {format(new Date(date_line), 'MM/dd/yyyy')}
        </span>
        <span className={`px-3 py-1 text-[8px]  uppercase  rounded-full ${job.category === 'Web Development' && 'text-blue-500 bg-blue-100/60'} ${job.category === 'Graphics Design' && 'text-green-500 bg-green-100/60'} ${job.category === 'Digital Marketing' && 'text-red-500 bg-red-100/60'}`}>
          {category}
        </span>
      </div>

      <div>
        <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
          {job_title}
        </h1>

        <p className='mt-2 text-sm text-gray-600 '>
          {description.substring(0, 180)}...
        </p>
        <p className='mt-2 text-sm font-bold text-gray-600 '>
          Range: ${min_price} - ${max_price}
        </p>
        <p className='mt-2 text-sm font-bold text-gray-600 '>Total Bids: {bid_count}</p>
      </div>
    </Link>
  )
}

export default JobCard
