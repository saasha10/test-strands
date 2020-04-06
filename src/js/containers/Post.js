import { connect } from 'react-redux'
import { getData } from '../actions/index'
import Post from '../components/Post'

const mapStateToProps = state => ({
    loading: state.loading
})

const mapDispatchToProps = {
    getData
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)