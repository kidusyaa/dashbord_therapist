import React from 'react';
import TodoList from './toDo';
import UpcomingEvents from './upcoming';
import ListOfPatients from './listofpatients';
const SchedulePart = () => {
  return (
    <div>
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 lg:w-2/3 px-4">
        <UpcomingEvents />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 px-4">
        <TodoList />
      </div>
    </div>
<ListOfPatients/>
    </div>
  );
};

export default SchedulePart;
