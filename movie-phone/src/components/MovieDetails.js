import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { LoadDetails } from '../store/action/MovieAction'

const mapDetailStateToProps = ({ detailState }) => {
  return { detailState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetails: (id) => dispatch(LoadDetails(id))
  }
}

const Details = (props) => {
  console.log(props.detailState)
  useEffect(() => {
    props.fetchDetails(props.match.params.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <p>{props.detailState.details.title}</p>
      <p>{props.detailState.details.overview}</p>
      <p>{props.detailState.details.runtime}</p>
    </div>
  )
}

export default connect(mapDetailStateToProps, mapDispatchToProps)(Details)
