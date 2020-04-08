import { connect } from 'react-redux'
import { getData } from '../actions/index'
import Dogs from '../components/Dogs'

const mapStateToProps = state => ({
    loading: state.loading
})

const mapDispatchToProps = {
    getData
}

export default connect(mapStateToProps, mapDispatchToProps)(Dogs)