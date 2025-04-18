import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class Jobs extends Component {
  componentDidMount() {
    this.getJobs()
  }

  getJobs = async () => {
    const url = 'https://apis.ccbp.in/jobs'
    const token = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const updatedData = data.jobs.map(each => ({
      companyLogoUrl: each.company_logo_url,
      employmentType: each.employment_type,
      id: each.id,
      jobDescription: each.job_description,
      location: each.location,
      packagePerAnnum: each.package_per_annum,
      rating: each.rating,
      title: each.title,
    }))
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
