import { connect } from 'react-redux'
import { getData, fetchDataImages } from '../actions/index'
import Images from '../components/Images'

const mapStateToProps = state => ({
    loadingImage: state.loadingImage,
    dogs: state.dogs,
    dogsImages: state.dogs_images
})

const mapDispatchToProps = {
    fetchDataImages,
    getData
}

export default connect(mapStateToProps, mapDispatchToProps)(Images)