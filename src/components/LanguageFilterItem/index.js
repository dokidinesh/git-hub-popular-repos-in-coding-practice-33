// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {languageFilter, updateActiveFilterId} = props
  const {id, language} = languageFilter
  const onClickFilter = () => {
    updateActiveFilterId(id)
  }

  return (
    <button type="button" className="filter-item" onClick={onClickFilter}>
      {language}
    </button>
  )
}

export default LanguageFilterItem
