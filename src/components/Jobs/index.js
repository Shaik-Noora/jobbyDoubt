import {Component} from 'react'
import './index.css'

class Jobs extends Component {
  componentDidMount() {
    this.getJobs()
  }

  getJobs = async () => {
    const url = 'https://apis.ccbp.in/jobs'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
  }

  render() {
    return (
      <>
        <h1>SDE</h1>
        <p>12 LPA</p>
      </>
    )
  }
}

export default Jobs
