import { CardContainer } from './styles';
import { Job } from '../../models/job.interface';
import Chip from '../Chip';

export interface JobCardProps {
  job: Job;
  onFilter: (tag: string) => void;
}

const JobCard = ({ job, onFilter }: JobCardProps) => {
  const isHighlighted = job.featured && job.new;
  const tags = [...job.languages, ...job.tools];

  return (
    <CardContainer highlighted={isHighlighted}>
      <img className="logo" src={job.logo} alt={job.company} />
      <div className="card-infos">
        <div className="card-header">
          <p className="company">{job.company}</p>
          <div className="badges">
            {job.new && <span className="badge new">new</span>}
            {job.featured && <span className="badge featured">featured</span>}
          </div>
        </div>

        <h1 className="position">
          <a href="#!">{job.position}</a>
        </h1>

        <div className="extra-infos">
          <span className="time">{job.postedAt}</span>
          <span className="period">{job.contract}</span>
          <span className="location">{job.location}</span>
        </div>
      </div>
      <div className="job-tags">
        {tags.map((tag) => (
          <Chip key={tag} label={tag} onSelect={() => onFilter(tag)} />
        ))}
      </div>
    </CardContainer>
  );
};

export default JobCard;
