import React from 'react';
import {UserWorker} from "../interfaces/user-worker";
import {WorkerListElementProps} from "../interfaces/props/worker-list-element-props";

const WorkerListElement: React.FC<WorkerListElementProps> = (workersData) => {
    return (
        <div>
            {workersData.workers.map((worker: UserWorker) => (
                <li>{worker.name}</li>
            ))}
        </div>
    );
};

export default WorkerListElement;