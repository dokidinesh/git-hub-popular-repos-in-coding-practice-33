import Loader from 'react-loader-spinner'
import {Component} from 'react'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {
    reposList: [],
    isLoading: true,
    activeFilterId: languageFiltersData[0].id,
  }

  componentDidMount() {
    this.getPopularRepos()
  }

  getPopularRepos = async () => {
    const {activeFilterId} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${activeFilterId}`

    const response = await fetch(url)
    const data = await response.json()

    const updatedData = data.popular_repos.map(item => ({
      name: item.name,
      id: item.id,
      issuesCount: item.issues_count,
      forksCount: item.forks_count,
      starsCount: item.stars_count,
      avatarUrl: item.avatar_url,
    }))
    this.setState({reposList: updatedData, isLoading: false})
  }

  updateActiveFilterId = activeFilterId => {
    this.setState(
      {
        activeFilterId,
      },
      this.getPopularRepos,
    )
  }

  renderReposList = () => {
    const {reposList} = this.state
    return (
      <ul className="repos-list">
        {reposList.map(repo => (
          <RepositoryItem key={repo.id} repositoryDetails={repo} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="repos-app">
        <h1 className="heading">Popular</h1>
        <div className="filters-list">
          {languageFiltersData.map(item => (
            <LanguageFilterItem
              key={item.id}
              languageFilter={item}
              updateActiveFilterId={this.updateActiveFilterId}
            />
          ))}
        </div>
        <div>{isLoading ? this.renderLoader() : this.renderReposList()}</div>
      </div>
    )
  }
}

export default GithubPopularRepos
