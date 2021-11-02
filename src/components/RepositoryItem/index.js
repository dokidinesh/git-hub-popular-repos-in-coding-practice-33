// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props

  const {
    name,
    issuesCount,
    forksCount,
    starsCount,
    avatarUrl,
  } = repositoryDetails

  return (
    <li className="repo-item">
      <img className="repo-image" src={avatarUrl} alt={name} />
      <h1 className="name">{name}</h1>
      <div>
        <div>
          <img
            className="icon-image"
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
          />
          <p>{starsCount} stars</p>
        </div>
        <div>
          <img
            className="icon-image"
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
          />
          <p>{forksCount} forks</p>
        </div>
        <div>
          <img
            className="icon-image"
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
          />
          <p>{issuesCount} open issues</p>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
