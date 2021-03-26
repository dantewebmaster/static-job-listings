import { useEffect, useState } from 'react';
import { Job } from './models/job.interface';
import JobCard from './components/JobCard';
import Chip from './components/Chip';
import { uniq } from './helpers/array';
import data from './data.json';

export default function App() {
  const [jobs] = useState(data);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [filter, setFilter] = useState<string[]>([]);

  useEffect(() => {
    const filteredJobs: Job[] = [];

    jobs.forEach((job) => {
      const tags = [...job.languages, ...job.tools];

      const jobHasTag = tags.some((item) => filter.includes(item));

      if (jobHasTag) {
        filteredJobs.push(job);
      }
    });

    setFilteredJobs(filteredJobs);
  }, [filter, jobs]);

  function addFilter(tag: string) {
    const newFilter = [...filter, tag];
    const uniqFilters = uniq(newFilter);
    setFilter(uniqFilters);
  }

  function removeFilter(tag: string) {
    setFilter((currentFilter) => currentFilter.filter((item) => item !== tag));
  }

  function clearAllFilter() {
    setFilter([]);
  }

  const addExtraMargin = filter.length > 0;

  return (
    <>
      <header className="header">
        {filter.length > 0 && (
          <div className="filter">
            <div className="chips">
              {filter.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  onClose={(chip) => removeFilter(chip)}
                />
              ))}
            </div>
            <button
              className="clear-all"
              type="button"
              onClick={clearAllFilter}
            >
              Clear
            </button>
          </div>
        )}
      </header>
      <div className={`container ${addExtraMargin && 'extra-margin-top'}`}>
        {filteredJobs.length === 0 &&
          jobs.map((item: Job) => (
            <JobCard key={item.id} job={item} onFilter={addFilter} />
          ))}

        {filteredJobs.length > 0 &&
          filteredJobs.map((item: Job) => (
            <JobCard key={item.id} job={item} onFilter={addFilter} />
          ))}
      </div>
    </>
  );
}
