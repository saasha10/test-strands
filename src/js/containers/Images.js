import { connect } from 'react-redux'
import { getData } from '../actions/index'
import Images from '../components/Images'

const mapStateToProps = state => ({
    dogs: state.dogs,
    dogsImages: state.dogs_images
})

const mapDispatchToProps = {
    getData
}

export default connect(mapStateToProps, mapDispatchToProps)(Images)