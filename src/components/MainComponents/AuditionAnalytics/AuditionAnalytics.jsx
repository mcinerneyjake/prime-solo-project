import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BarChart from './BarChart';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './AuditionAnalytics.css';

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

function AuditionAnalytics() {
  const dispatch = useDispatch();
  const auditionData = useSelector((store) => store.auditionDataReducer);

  console.log('auditionData:', auditionData);

  useEffect(() => {
    dispatch({
      type: 'FETCH_ANALYTICS_DATA',
    });
  }, []);

  return (
    <div>
      <h2 className='audition-analytics-h2'>Audition Analytics</h2>
      {auditionData.length ? <BarChart auditionData={auditionData} /> : 'error'}
    </div>
  );
}

export default AuditionAnalytics;
